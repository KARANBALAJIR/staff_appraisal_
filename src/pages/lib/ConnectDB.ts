import { NextApiRequest, NextApiResponse } from "next/types";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

const URI = process.env.DATABASE_URL;

const connectDB = async (req:NextApiRequest , res:NextApiResponse ) => {
    if (!URI) {
        return res.status(500).json({ status: 'failed', message: 'DATABASE_URL is not defined' });
    }
    console.log(URI)
    try {
        await mongoose.connect(URI);
        console.log('MongoDB connected');
        NextResponse.next();
    } catch (err : any) {
        console.log(err.message);
        return res.status(500).json({status:"failed",message:err.message})
    }
}

export default connectDB;