"use client"

import FormFlow from "@/components/FormFlow"
import { getCookie } from "@/services/cookie.service";
import { useEffect, useState } from "react";
import axios from "axios";


export default function Page(){

    const [userForms, setUserForms] = useState<any>([])

    const token = getCookie('usertoken');

    useEffect(()=>{
        getStaffForm();
    },[])



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