import { NextApiRequest, NextApiResponse } from "next";
import { clerkClient } from "@clerk/nextjs";
import '@/components/Styles/LeftNav.css'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if(req.method === 'POST'){
        const { userId } = req.query;
    }

    return res.status(405).json({message: "Invalid request method.."})
}
