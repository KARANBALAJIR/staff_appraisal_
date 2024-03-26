import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient(); 

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === 'POST') {
        const {email , password} = req.body;
        const createNull = await prisma.user.create({
            data: {
                email,
                password,
            },
        })
        console.log(createNull)
        res.status(200).json({success:true,message:'user created successfully',data:createNull})
    }

    return res.status(405).json({ message: "Invalid request method.." })
}