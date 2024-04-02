import { verifyToken , findUserByEmail } from "@/services/user.service";
import { PrismaClient , User } from '@prisma/client';
import jwt from 'jsonwebtoken'
const prisma = new PrismaClient();
import { NextApiRequest, NextApiResponse } from "next";
import { checkAuthentication } from "..";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    await checkAuthentication(req, res, async function () {
        if(req.method === 'GET'){
            try{
                res.status(200).json(req.user)
            }
            catch(err : any){
                console.log(err.message)
            }
        }
    })
}