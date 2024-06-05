"use client"

import axios from "axios"
import React, { useEffect, useState  } from "react"
import { getCookie } from "@/services/cookie.service";
import { TempCard } from "@/app/(main)/(signin)/appraisal-form/page";
import { useSelector } from "react-redux";
import { UserType } from "@prisma/client";
import HodApproval from "@/components/HodApproval";
import MasterApproval from "@/components/MasterApproval";

export default function Page() {
    // const  
    const userDetails = useSelector((store: any) => store.userDetails.userDetails)
    const [role, setRole] = useState<UserType | null>(null)
    useEffect(()=>{
        setRole(userDetails.role)
    },[userDetails])

    return(
        <>  
            <div className="p-[16px]">
                {
                    (role === UserType.HOD) ? <HodApproval /> :
                        (role === UserType.MASTER) ? <MasterApproval /> :
                            <h1>Not Authorized</h1>

                }
            </div>
            
        </>
    )
}