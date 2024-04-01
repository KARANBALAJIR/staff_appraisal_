import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client';
import { createUser, findUserByEmail , hashPassword , emailTest , generateToken} from '@/services/user.service'
import jwt from 'jsonwebtoken'
const prisma = new PrismaClient(); 

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try{
            const { email, password } = req.body;

            if (!email || !password) {
                return res.status(400).json({ success: false, message: 'Email and password are required' });
            }
            const emailformat = await emailTest(email)

            if (!emailformat) {
                return res.status(400).json({ success: false, message: 'Invalid email format. Email should end with @sece.ac.in' });
            }

            const existingUser = await findUserByEmail(email)

            if (existingUser) {
                return res.status(409).json({ success: false, message: 'User already exists' })
            }
            
            const hashedPassword = await hashPassword(password)

            const user = await createUser(email,hashedPassword)
            
            if (user) {
                const token = await generateToken({ email: user.email, role: user.role, designation: user.designation });
                res.status(200).json({ success: true, message: 'user created successfully', user: user , accessToken: token })
            } else {
                res.status(500).json({ success: false, message: 'Failed to create user' })
            }
        }
        catch(err){
            res.status(500).json({ success: false, message: 'Internal server error' })
        }
    }
    return res.status(405).json({ message: "Invalid request method.." })
}