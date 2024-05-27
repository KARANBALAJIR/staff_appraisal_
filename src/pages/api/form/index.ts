import { NextApiRequest, NextApiResponse } from "next";
import { checkAuthentication } from "../user";
import { PrismaClient, User } from '@prisma/client';
const {ObjectId} = require('mongoose');
const prisma = new PrismaClient();

export default async function handler(req:NextApiRequest, res:NextApiResponse){

    await checkAuthentication(req,res , async function (){
        if (req.method === 'POST') {
            try {
                console.log(req.body, req.user);
                const { form_id, appraisal_form_data } = req.body;
                let formId = new ObjectId(form_id); // Convert form_id to MongoDB ObjectId
                formId = formId.toString();
                const newData = await prisma.userCreationFormData.create({
                    data: {
                        formId:formId,
                        appraisal_form_data: appraisal_form_data,
                    },
                });
                console.log(newData);
                return res
                    .status(200)
                    .json({ status: "success", message: "Successfully created form", data: newData });
            } catch (error: any) {
                return res.status(500).json({ status: "error", message: error.message });
            }
        }

        if (req.method === 'GET') {
             const email = req.user?.email;
            try {
                const forms = await prisma.userCreationForm.findMany({
                    where: {
                        createdBy: email,
                    }
                });
                if (forms.length === 0) {
                    return res.status(404).json({ status: "error", message: "No forms found" })
                }
                return res.status(200).json({ status: "success", message: "Successfully fetched forms", data: forms })
            }
            catch (error: any) {
                return res.status(500).json({ status: "error", message: error.message })
            }
        }

        if (req.method === 'DELETE') {
            console.log('inccoming')
            try {
                const { formId } = req.query;
                await prisma.userCreationForm.delete({
                    where: {
                        id: formId as string
                    }
                }).then((data:any)=>{
                    return res.status(200).json({ status: "success", message: "Successfully deleted form",data });
                }).catch((error:any)=>{
                    return res.status(404).json({ status: "error", message: error.message });
                })
            } catch (error: any) {
                return res.status(500).json({ status: "error", message: error.message });
            }
        }

        if(req.method === 'PATCH'){
            try {
                const { formId } = req.query;
                const { form_title, start_year, current_position, expecting_appraisal, end_year } = req.body;
                await prisma.userCreationForm.update({
                    where: {
                        id: formId as string
                    },
                    data: {
                        form_title,
                        start_year,
                        current_position,
                        expecting_appraisal,
                        end_year
                    }
                }).then((data : any)=>{
                    return res.status(200).json({ status: "success", message: "Successfully updated form", data })

                }).catch((error : any)=>{
                    return res.status(404).json({ status: "error", message: error.message });
                })
            } catch (error: any) {
                return res.status(500).json({ status: "error", message: error.message });
            }
        }
    })

    
}   