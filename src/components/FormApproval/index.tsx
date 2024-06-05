import React , {useEffect, useState} from "react"
import { useSelector } from "react-redux";
import { FormStatus } from "@prisma/client";
import axios from "axios";
import Link from "next/link";
import { getCookie } from "@/services/cookie.service";

interface FormApprovalProps{
    form:any;
}

const FormApproval : React.FC<FormApprovalProps> = (props) =>{
    const { form } = props;

    const [ApprovalData, setApprovalData] = useState<FormStatus>(FormStatus.PENDING);
    const token = getCookie('usertoken')
    const userDetails = useSelector((store: any) => store.userDetails.userDetails);

    console.log(`api/user/${userDetails.role.toLowerCase()}/approval?form_id=${form.id}`)

    const handleReject = async () => {
        setApprovalData(FormStatus.REJECTED);
        try {
            const response = await axios.post(`api/user/${userDetails.role.toLowerCase()}/approval?form_id=${form.id}`, {
                approval_status: "REJECTED",
            },{
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log("hod submissoin approval", response)
        } catch (err: any) {
            console.log(err)
        }
    }

    const handleAccecpt = async () => {
        setApprovalData(FormStatus.APPROVED);

        try {
            const response = await axios.post(`api/user/${userDetails.role.toLowerCase()}/approval?form_id=${form.id}`,{
                approval_status:"APPROVED",
            },{
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            });
            console.log("hod submissoin approval",response)
        } catch (err: any) {
            console.log(err)
        }
    }


    return(
        <>
            <div className="p-[16px] rounded-[8px] bg-white shadow-md flex flex-row justify-between">
                <div className="flex flex-col gap-[8px]">
                    <h1 className="text-[1.3rem] text-black">{form.form_title}</h1>
                    <p className="text-[1.1rem] text-gray-600">{form.createdBy}</p>
                    <Link href={`/appraisal-form/${form.id}`} className="underline text-blue-500">
                        View Form
                    </Link>
                </div>
                <div className="flex flex-row gap-[16px] items-center"> 
                    <button className="bg-green-500 text-white p-[8px] rounded-[8px]" onClick={handleAccecpt}>Approve</button>
                    <button className="bg-red-500 text-white p-[8px] rounded-[8px]" onClick={handleReject}>Reject</button>

                </div>

            </div>
        </>
    )
}

export default FormApproval;