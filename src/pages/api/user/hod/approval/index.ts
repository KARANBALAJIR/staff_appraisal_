import { NextApiRequest, NextApiResponse } from "next";
import { checkAuthentication } from "../..";
import { PrismaClient, FormStatus } from '@prisma/client';
const { ObjectId } = require('mongoose');
const prisma = new PrismaClient();

import assoForm from '@/lib/data/associateStructure.json'
import assiForm from '@/lib/data/Assistant_form_data.json'
import professorForm from '@/lib/data/Professor_form_data.json'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    await checkAuthentication(req, res, async function () {

        if(req.method === 'GET'){
            try{
                const hod_mapped_applied_form = await prisma.userCreationForm.findMany({
                    where:{
                        hod_id : req.user.id,
                    }
                })
                console.log(hod_mapped_applied_form)
            }catch(err : any){
                return res.status(500).json({status:"error",message:err.message})
            }
        }

        if (req.method === 'POST') {
            try {
                const { form_id } = req.query;
                const { approval_status } = req.body;

                const newFormData = await prisma.userCreationForm.update({
                    where: {
                        id: form_id as string,
                    },
                    data: {
                        hod_status:approval_status,
                    }
                });
                return res.status(200).json({ status: "success", message: "Successfully created form", data: newForm })

            }
            catch (error: any) {
                return res.status(500).json({ status: "error", message: error.message })
            }
        }

    })


}   