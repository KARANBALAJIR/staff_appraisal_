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
                const users = await prisma.user.findMany({
                    select:{
                        id: true,
                        email : true, 
                        username : true, 
                        department : true, 
                        designation : true, 
                        role : true, 
                        status : true,
                    }
                });
                return res.status(200).json({success: true, message:users})
            }
            catch(err : any){
                return res.status(409).json({success: false, message: err.message});
            }
        }
        else if(req.method === 'POST'){
            try{
                const {email, username, department, designation, role, status} = req.body;
                if(!email){
                    return res.status(400).json({sucess:false, message: "invalid email"});
                }
                const user = await prisma.user.findFirst({
                    where:{
                        email:email
                    }
                })
                if(user){
                    return res.status(400).json({success: false, message: "user already exists"});
                }
                const doc = await prisma.user.create({
                    data:{
                        email: email,
                        username: username,
                        department: department,
                        designation: designation,
                        role: role,
                        password: "SECE",
                        status: status
                    }
                })
                return res.status(200).json({success:true, message: "user created successfully"})
            }
            catch(err : any){
                return res.status(409).json({success: false, message: "Network error"});
            }
        }
        else if(req.method === 'PATCH'){
            try{
                const {email, username, department, designation, role, status} = req.body;
                if(!email){
                    return res.status(400).json({sucess:false, message: "invalid email"});
                }
                const user = await prisma.user.findFirst({
                    where:{
                        email:email
                    }
                })
                if(!user){
                    return res.status(400).json({success: false, message: "user not found"});
                }
                const doc = await prisma.user.update({
                    where:{
                        email: email
                    },
                    data:{
                        username: username,
                        department: department,
                        designation: designation,
                        role: role,
                        status: status
                    }
                })
                return res.status(201).json({success:true, message: "user updated successfully"})
            }
            catch(err : any){
                return res.status(409).json({success: false, message: err.message});
            }
        }
        else if(req.method === "DELETE"){
            try{
                const {email} = req.query;
                const Email = email as string; 
                if(!email){
                    return res.status(400).json({success: false, message: "invalid email"});
                }
                const user = await prisma.user.findFirst({
                    where:{
                        email: Email
                    }
                })
                if(!user){
                    return res.status(400).json({success: false, message: "user not found"});
                }
                const doc = await prisma.user.delete({
                    where:{
                        email:Email
                    }
                })
                return res.json({success: true, message:"User deleted successfully"});
            }
            catch(err : any){
                return res.status(409).json({success: false, message: "invalid credentials"});
            }
        }

    })
}