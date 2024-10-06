import { PrismaClient, UserFormStatus } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { checkAuthentication } from "@/pages/api/user";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const prisma = new PrismaClient();

    await checkAuthentication(req, res, async function () {
        if (req.method === 'GET') {
            
        }
    
        if (req.method === "POST") {
            
        }
    
    
        if (req.method === 'PATCH') {
            try {
                
    
            } catch (error) {
                console.error("An error occurred:", error);
                return res.json({ message: "An error occurred while processing the request." });
            }
        }
    
    
        if (req.method === 'DELETE') {
            const { userId } = req.body;
            try {
               
            } catch (err: any) {
                return res.status(500).json({ success: false, message: err.message })
            }
        }
    });

}