import { NextApiRequest, NextApiResponse } from "next";
import { clerkClient } from "@clerk/nextjs";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log("check backend")
    if(req.method === 'GET'){
        const { userId } = req.query;
        if(userId === undefined){
            return res.status(400).json({message: "Invalid userId.."})
        }
        try{
            const user = await clerkClient.users.getUser(userId as string)
            return res.status(200).json(user.publicMetadata);
        }
        catch(err:any){
            return res.status(500).json({error:true, message: err.message})
        }
    }
    return res.status(405).json({message: "Invalid request method.."})
}