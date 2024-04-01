import { NextApiRequest, NextApiResponse } from "next";
<<<<<<< HEAD
import { clerkClient } from "@clerk/nextjs";
import '@/components/Styles/LeftNav.css'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if(req.method === 'POST'){
        const { userId } = req.query;
    }

    return res.status(405).json({message: "Invalid request method.."})
=======
import { verifyToken , findUserByEmail } from "@/services/user.service";
import { PrismaClient , User } from '@prisma/client';
import jwt from 'jsonwebtoken'
const prisma = new PrismaClient();


export async function checkAuthentication(req: NextApiRequest, res: NextApiResponse, next: Function) {
    if (!req.headers.authorization || req.headers.authorization === undefined || !req.headers.authorization?.startsWith('Bearer')) {
        return res.status(401).json({ success:false, message: 'Unauthorized' });
    }
    const token = req.headers.authorization.split(' ')[1];
    const verification = await verifyToken(token);
    if(!verification){
        return res.status(401).json({success:false,message:'Provide a valid jwt token'})
    }
    const email : string = (verification as jwt.JwtPayload).email;
    const user = await findUserByEmail(email);
    req.user = user as User;
    next();
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await checkAuthentication(req, res, async function () {
        if (req.method === 'GET') {
            try {
                if (!req.user) {
                    return res.status(401).json({success:false,message:'User not found'})
                }
                const {id, password, createdAt, updatedAt, ...filteredUser } = req.user;
                return res.status(200).json({success:true,message:'user details',user:filteredUser})
            } catch (err : any) {
                return res.status(500).json({success:false,message:err.message})
            }
        }
    });
>>>>>>> 63c8fcf173b3c7f6ea10aa44dab397c5b84ee7b2
}
