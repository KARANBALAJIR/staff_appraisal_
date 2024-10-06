"use client"

import axios from "axios"
import React, { useEffect, useState  } from "react"
import { getCookie } from "@/services/cookie.service";
import { useSelector } from "react-redux";
import { UserType } from "@prisma/client";
import HodApproval from "@/components/HodApproval";
import MasterApproval from "@/components/MasterApproval";

export default function Page() {
    // const  
    const userDetails = useSelector((store: any) => store.userDetails.userDetails)
    const [role, setRole] = useState<UserType | null>(null)
    const [filterApproval, setFilterApproval] = useState('ALL');
    useEffect(()=>{
        setRole(userDetails.role)
    },[userDetails])

    return(
        <>  
            <div className="flex justify-between px-[16px] pt-[16px]">
                <div>
                    <h1 className="text-[1.5rem] text-black font-medium">Approval</h1>
                </div>
                <div className="h-full">
                    <select className=" p-[8px]" onChange={(e)=>setFilterApproval(e.target.value)}> 
                        <option value="ALL">----------</option>
                        <option value="PENDING">PENDING</option>
                        <option value="APPROVED">APPROVED</option>
                        <option value="REJECTED">REJECTED</option>
                    </select>
                </div>
            </div>
            <div className="p-[16px]">
                {
                    (role === UserType.HOD) ? <HodApproval filterApproval = {filterApproval} setFilterApproval={setFilterApproval} /> :
                        (role === UserType.MASTER) ? <MasterApproval /> :
                            <h1>Not Authorized</h1>

                }
            </div>
            
        </>
    )
}