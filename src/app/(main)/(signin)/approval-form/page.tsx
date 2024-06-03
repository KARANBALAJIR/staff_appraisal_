"use client"

import axios from "axios"
import { useEffect, useState  } from "react"
import { getCookie } from "@/services/cookie.service";
import { TempCard } from "@/app/(main)/(signin)/appraisal-form/page";
export default function ApprovalPage() {

    const [hodApprovalData , setHodApprovalData] = useState([]);
        
    useEffect(()=>{
        fetchHodApprovalData();
    },[])    

    const fetchHodApprovalData = async() =>{
        const token = getCookie('usertoken')
        try{
            const response = await axios.get('http://localhost:3000/api/user/hod/approval',{
                headers:{
                    'Authorization': `Bearer ${token}`,
                }
            })
            setHodApprovalData(response.data.data)
        } catch(err : any){
            console.log(err.response)
        }
    }

    return (
        <>
            <section id="approval forms for hod" className=" p-[16px]">
                <div className="flex flex-col gap-[16px]">
                    {
                        hodApprovalData && hodApprovalData.map((data, index) => {
                            return (
                                <>
                                    <TempCard formId={index} details={data} />
                                </>
                            )
                        })
                    }
                </div>
        </section>
           
        </>
    )
}