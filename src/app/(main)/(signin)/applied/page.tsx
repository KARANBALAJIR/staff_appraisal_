"use client"

import FormFlow from "@/components/FormFlow"
import { getCookie } from "@/services/cookie.service";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";


export default function Page(){
    const [userForms, setUserForms] = useState<any>([])
    useEffect(()=>{
        getStaffForm();
    },[])

    const router = useRouter()
 
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  
    const token = getCookie('usertoken');

    

    const getStaffForm = async () => {
        try {
            const response = await axios.get('/api/form', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            const data = response.data;
            console.log(data)
            setUserForms(data.data)
        } catch (err: any) {
            console.log(err)
        }
    }

    return(
        <div className="p-[16px]"> 
            {/* <div></div> */}
            {
                userForms.map((form: any) => {
                    return (
                        <div key={form.id}>
                            <FormFlow form={form} />
                        </div>
                    )
                })
            } 
        </div>
    )
}