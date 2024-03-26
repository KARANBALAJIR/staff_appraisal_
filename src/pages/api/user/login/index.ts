import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handle( req: NextApiRequest, res: NextApiResponse ) {
    if(req.method === 'POST'){
        const {email, password} = req.body
        const doc = await prisma.user.findUnique({
            where:{
                email:email,
            }
        })
        if(doc === null){
            return res.status(401).json({error: true, message:"user not found"});
        }
        // const orgPassword = 
        if(doc.password !== password){
            
        }

        return res.status(200).json({error:false, message:doc})
    }
    return res.status(400).json({error:true, message: "invalid request type"})
}