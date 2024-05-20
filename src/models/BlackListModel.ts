import mongoose from "mongoose";

interface BlackListDocument extends Document {
    token:string;
}


const BlackListSchema = new mongoose.Schema(
    {
        token:{
            type:String,
            required:true,
        }
    },
    { timestamps: true }
)


export default mongoose.models.blacklist || mongoose.model<BlackListDocument>("blacklist",BlackListSchema)