import { verifyToken , findUserByEmail } from "@/services/user.service";
import { PrismaClient , User } from '@prisma/client';
import jwt from 'jsonwebtoken'
const prisma = new PrismaClient();
import { NextApiRequest, NextApiResponse } from "next";
import { checkAuthentication } from "..";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    await checkAuthentication(req, res, async function () {
        if(req?.user?.role !== 'ADMIN'){
            return res.status(401).json({success:false, message:"Invalid user role"});
        }

        if(req.method === 'GET'){
            try{
                const users = await prisma.user.findMany();
                return res.status(200).json(users)
            }
            catch(err : any){
                console.log(err.message)
            }
        }
    })
}