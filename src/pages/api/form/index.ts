import { NextApiRequest, NextApiResponse } from "next";
import { checkAuthentication } from "../user";
import { PrismaClient, User } from '@prisma/client';
const {ObjectId} = require('mongoose');
const prisma = new PrismaClient();
import assoForm from '@/lib/data/associateStructure.json'
import assiForm from '@/lib/data/Assistant_form_data.json'
import professorForm from '@/lib/data/Professor_form_data.json'

export default async function handler(req:NextApiRequest, res:NextApiResponse){

    await checkAuthentication(req,res , async function (){
        if (req.method === 'POST') {
            try {
                const { form_title, start_year, current_position, expecting_appraisal, end_year } = req.body;
                const newForm = await prisma.userCreationForm.create({
                    data: {
                        form_title,
                        start_year,
                        end_year,
                        current_position,
                        expecting_appraisal,
                        createdBy: (req.user as { email: string }).email,
                    }
                })
                
                const designaiton = req.user?.designation;

                if (designaiton === 'ASSISTANT_PROFESSOR'){
                    const newFormData = await prisma.userCreationFormData.create({
                        data: {
                            formId: newForm.id,
                            appraisal_form_data: assiForm,
                        }
                    });
                    return res.status(200).json({ status: "success", message: "Successfully created form", data: newForm })
                }

                if (designaiton === 'ASSOCIATE_PROFESSOR') {
                    const newFormData = await prisma.userCreationFormData.create({
                        data: {
                            formId: newForm.id,
                            appraisal_form_data: assoForm,
                        }
                    });
                    return res.status(200).json({ status: "success", message: "Successfully created form", data: newForm })
                }

                if (designaiton === 'PROFESSOR') {
                    const newFormData = await prisma.userCreationFormData.create({
                        data: {
                            formId: newForm.id,
                            appraisal_form_data: professorForm,
                        }
                    });
                    return res.status(200).json({ status: "success", message: "Successfully created form", data: newForm })
                }

            }
            catch (error: any) {
                return res.status(500).json({ status: "error", message: error.message })
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
                    return res.status(404).json({ status: "failed", message: "No forms found" })
                }
                return res.status(200).json({ status: "success", message: "Successfully fetched forms", data: forms })
            }
            catch (error: any) {
                return res.status(500).json({ status: "failed", message: error.message })
            }
        }

        if (req.method === 'DELETE') {
            try {
                const { formId } = req.query;
                await prisma.userCreationForm.delete({
                    where: {
                        id: formId as string
                    }
                }).then((data:any)=>{
                    return res.status(200).json({ status: "failed", message: "Successfully deleted form",data });
                }).catch((error:any)=>{
                    return res.status(404).json({ status: "failed", message: error.message });
                })
            } catch (error: any) {
                return res.status(500).json({ status: "failed", message: error.message });
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
                    return res.status(404).json({ status: "failed", message: error.message });
                })
            } catch (error: any) {
                return res.status(500).json({ status: "failed", message: error.message });
            }
        }
    })

    
}   