import { NextApiRequest, NextApiResponse } from "next";
import { checkAuthentication } from "../..";
import { PrismaClient, FormStatus , UserFormStatus} from '@prisma/client';
const { ObjectId } = require('mongoose');
const prisma = new PrismaClient();

export const config = {
    api: {
        externalResolver: true,
    },
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    await checkAuthentication(req, res, async function () {

        if(req.method === 'GET'){
            try{

                const hod_mapped_applied_form = await prisma.userCreationForm.findMany({
                    where:{
                        hod_id : req.user?.id,
                        user_form_status:UserFormStatus.SUBMITTED,
                    }
                })

                if(!hod_mapped_applied_form.length){
                    return res.status(404).json({status:"failed",message:"no form found"})
                }
                
                return res.status(200).json({status:"success",message:"form applied for hod to verify", data: hod_mapped_applied_form})

            }catch(err : any){
                return res.status(500).json({status:"error",message:err.message})
            }
        }

        if (req.method === 'POST') {
            try {
                const { form_id } = req.query;
                const { approval_status } = req.body;
                console.log('incoming')
                const newFormData = await prisma.userCreationForm.update({
                    where: {
                        id: form_id as string,
                    },
                    data: {
                        hod_status:approval_status,
                    }
                });
                console.log(newFormData)
                // await prisma.userCreationFormData.update({
                //     where:{
                //         formId:form_id as string,
                //     },
                //     data:{
                //         appraisal_form_data:appraisal_data
                //     }
                // })

                return res.status(200).json({ status: "success", message: "User Status Updated" , newFormData })

            }
            catch (error: any) {
                return res.status(500).json({ status: "error", message: error.message })
            }
        }
    })


}   