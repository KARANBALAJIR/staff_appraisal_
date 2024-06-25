import { FormStatus, PrismaClient, UserFormStatus } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { checkAuthentication } from "@/pages/api/user";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient();
    await checkAuthentication(req, res, async function (){
        if(req.method === "GET"){
            try{
                const applied_forms = await prisma.userCreationForm.findMany({
                    where:{
                        user_form_status:UserFormStatus.SUBMITTED,
                        master_status: FormStatus.PENDING,
                        OR: [
                            { hod_status: FormStatus.APPROVED },
                            { hod_status: FormStatus.NOT_VALID }
                        ]
                    }
                })
                if(!applied_forms.length){
                    return res.status(404).json({status:"failed", message:"no form found"})
                }
                return res.status(200).json({status:"success", message:"form applied for master to verify", data: applied_forms})
            }
            catch(err: any){
                return res.status(500).json({status:"error", message:err.message})
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
                        master_status:approval_status,
                    }
                });
                return res.status(200).json({ status: "success", message: "User Status Updated" , newFormData })

            }
            catch (error: any) {
                return res.status(500).json({ status: "error", message: error.message })
            }
        }
    })
}