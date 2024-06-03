import { FormStatus, PrismaClient, UserFormStatus } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { checkAuthentication } from "@/pages/api/user";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient();
    await checkAuthentication(req, res, async function () {
        if (req.method === "POST") {
            try {
                const {form_id} = req.query;
                const {appraisal_form_data} = req.body;
    
                const form = await prisma.userCreationFormData.update({
                    where:{
                        formId: form_id as string,
                    },
                    data:{
                        appraisal_form_data,
                    }
                })

                const hodModel = await prisma.user.findFirst({
                    where:{
                        role: 'HOD',
                        department: req.user?.department
                    }  
                })

                if(!hodModel){
                    return res.status(404).json({ status: "failed", message: "HOD not found" })
                }
    
                const updatedStatus = await prisma.userCreationForm.update({
                    where:{
                        id: form_id as string,
                    },
                    data:{
                        user_form_status: UserFormStatus.SUBMITTED,
                        hod_id: hodModel?.id
                    }
                })
                return res.status(200).json({ status: "success", message: "Successfully submitted form", data: updatedStatus })
            }
            catch (error) {
                console.error("An error occurred:", error);
                return res.status(500).json({ success: "failed", message: "An error occurred while processing the request." });
            }
        }
    });
}