import { NextApiRequest, NextApiResponse } from "next";
import { checkAuthentication } from "@/pages/api/user";
import { PrismaClient, User } from '@prisma/client';
// import mongoose, { mongo } from "mongoose";
// const ObjectId = mongoose.Schema.Types.ObjectId;


const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    await checkAuthentication(req, res, async function () {
        if (req.method === 'POST') {
            try {
        
                const { form_id, appraisal_form_data } = req.body;
                // const mongodbFormId = new ObjectId(form_id);
                const newForm = await prisma.userCreationFormData.create({
                    data: {
                        formId: form_id,
                        appraisal_form_data: appraisal_form_data,
                    }
                });
                console.log(newForm)
                return res.status(200).json({ status: "success", message: "Successfully created form", data: newForm.appraisal_form_data })
            }
            catch (error: any) {
                return res.status(500).json({ status: "failed", message: error.message })
            }
        }

        if (req.method === 'GET') {
            try {
                const { form_id } = req.query;
                const forms = await prisma.userCreationFormData.findUnique({
                    where: {
                        formId: form_id as string,
                    }
                })
                if (!forms) {
                    return res.status(404).json({ status: "failed", message: "No Form Data Found" })
                }
                return res.status(200).json({ status: "success", message: "Successfully fetched form data", data: forms.appraisal_form_data })
            } catch (err: any) {
                return res.status(500).json({ status: "failed", message: err.message })
            }
        }   

        if(req.method === 'PATCH'){
            try{
                const { form_id, appraisal_form_data } = req.body;
                const forms = await prisma.userCreationFormData.update({
                    where: {
                        formId: form_id,
                    },
                    data: {
                        appraisal_form_data,
                    }
                })
                return res.status(200).json({ status: "success", message: "Successfully updated form data", data: forms })
            }catch(err:any){
                return res.status(500).json({ status: "failed", message: err.message })
            }
        }

        
    })


}   