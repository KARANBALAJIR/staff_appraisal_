import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client'
import { emailTest, findUserByEmail, isCorrectPassword } from "@/services/user.service";
const prisma = new PrismaClient()
import jwt from 'jsonwebtoken'

export default async function handle( req: NextApiRequest, res: NextApiResponse ) {
    if(req.method === 'POST'){
        try{
            const {email, password} = req.body
            console.log(email, password)
            if(email === undefined || email === null){
                return res.status(401).json({error:true, message: "invalid email"})
            }
            if(password === undefined || password === null){
                return res.status(401).json({error:true, message: "invalid password"})
            }

            const emailFormat = await emailTest(email);
            
            if(!emailFormat){
                return res.status(401).json({error: true, message: 'Invalid email format. Email should end with @sece.ac.in'})
            }

            const user = await findUserByEmail(email);
            console.log("user : ",user)

            if(user === null){
                return res.status(401).json({error: true, message:"user not found"});
            }

            const checkedPassword = await isCorrectPassword(password, user.password)
            console.log(checkedPassword)

            if(!checkedPassword){
                return res.status(401).json({error:true, message:"Invalid Password"})
            }

            const token = jwt.sign({email: user.email, role: user.role, designaiton: user.designation},process.env.SECRET_KEY)

            return res.status(200).json({error:false, message:user})
        }
        catch(err: any){
            return res.status(400).json({error: true, message: err.message})
        }
    }
    return res.status(400).json({error:true, message: "invalid request type"})
}