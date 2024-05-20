import { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient  } from '@prisma/client'
const primsa = new PrismaClient()

export default async function handler(req:NextApiRequest , res:NextApiResponse){
    if(req.method === 'POST'){
        try{
            const { token } = req.body;
            if(!token){
                return res.status(400).json({ success:false , message:'Token is required' })
            }

            const blacklistedToken = await primsa.blackListToken.create({
                data:{
                    token,
                }   
            })
            if(blacklistedToken){
                return res.status(200).json({ success:true , message:'Token blacklisted successfully' })
            }else{
                return res.status(500).json({ success:false , message:'Failed to blacklist token' })
            }
        }catch(err : any){
            res.status(500).json({ status:"failed" , message:err.message })
        }
    }
}