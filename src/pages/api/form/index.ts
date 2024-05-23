import { NextApiRequest, NextApiResponse } from "next";
import { checkAuthentication } from "../user";
import { PrismaClient, User } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req:NextApiRequest, res:NextApiResponse){

    await checkAuthentication(req,res , async function (){
        if (req.method === 'POST') {
            try{
                const { form_title, start_year, current_position, expecting_appraisal, end_year } = req.body;
                const newForm = await prisma.form.create({
                    data: {
                        form_title,
                        start_year,
                        end_year,
                        current_position,
                        expecting_appraisal,
                        createdBy: (req.user as { username: string }).username,
                        appraisal_form: {} // Add the missing 'appraisal_form' property
                    }
                })
                console.log(newForm)
                return res.status(200).json({ status: "success", message: "Successfully created form", data: newForm })
            }
            catch(error : any){
                return res.status(500).json({ status: "error", message:error.message})
            }
        }
    })
    
}   