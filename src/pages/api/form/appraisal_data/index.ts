import { NextApiRequest, NextApiResponse } from "next";
import { checkAuthentication } from "@/pages/api/user";
import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    await checkAuthentication(req, res, async function () {
        if (req.method === 'POST') {
            try {
                console.log(req.body, req.user)
                const { form_title, start_year, current_position, expecting_appraisal, end_year } = req.body;
                const newForm = await prisma.userCreationFormData.create({
                    data: {
                        formId:"",
                       appraisal_form_data:{},
                    }
                });
                console.log(newForm)
                return res.status(200).json({ status: "success", message: "Successfully created form", data: newForm })
            }
            catch (error: any) {
                return res.status(500).json({ status: "error", message: error.message })
            }
        }

        // if (req.method === 'GET') {
        //     const email = req.user?.email;
        //     try {
        //         const forms = await prisma.userCreationForm.findMany({
        //             where: {
        //                 createdBy: email,
        //             }
        //         });
        //         if (forms.length === 0) {
        //             return res.status(404).json({ status: "error", message: "No forms found" })
        //         }
        //         return res.status(200).json({ status: "success", message: "Successfully fetched forms", data: forms })
        //     }
        //     catch (error: any) {
        //         return res.status(500).json({ status: "error", message: error.message })
        //     }
        // }

        // if (req.method === 'DELETE') {
        //     console.log('inccoming')
        //     try {
        //         const { formId } = req.query;
        //         await prisma.userCreationForm.delete({
        //             where: {
        //                 id: formId as string
        //             }
        //         }).then((data: any) => {
        //             return res.status(200).json({ status: "success", message: "Successfully deleted form", data });
        //         }).catch((error: any) => {
        //             return res.status(404).json({ status: "error", message: error.message });
        //         })
        //     } catch (error: any) {
        //         return res.status(500).json({ status: "error", message: error.message });
        //     }
        // }

        // if (req.method === 'PATCH') {
        //     try {
        //         const { formId } = req.query;
        //         const { form_title, start_year, current_position, expecting_appraisal, end_year } = req.body;
        //         await prisma.userCreationForm.update({
        //             where: {
        //                 id: formId as string
        //             },
        //             data: {
        //                 form_title,
        //                 start_year,
        //                 current_position,
        //                 expecting_appraisal,
        //                 end_year
        //             }
        //         }).then((data: any) => {
        //             return res.status(200).json({ status: "success", message: "Successfully updated form", data })

        //         }).catch((error: any) => {
        //             return res.status(404).json({ status: "error", message: error.message });
        //         })
        //     } catch (error: any) {
        //         return res.status(500).json({ status: "error", message: error.message });
        //     }
        // }
    })


}   