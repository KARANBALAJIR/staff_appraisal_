'use client'
import React, { useEffect, useState } from "react";
import { validateStudentEmail } from "@/utils/emailValidate";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LeftNavBar from "@/components/NavBar";
import axios from "axios";


export default function SignedInLayout({children}: Readonly<{children:React.ReactNode}>){

    // useEffect(()=>{
    //     const response = axios.get
    // })

    return(
        <div className="flex justify-center">
        <LeftNavBar/>
            {
                children
            }
        </div>
    )
}