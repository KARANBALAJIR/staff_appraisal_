"use client";
import React, { useEffect } from "react";
import { UserButton, useAuth, useUser } from '@clerk/nextjs';
import { validateStudentEmail } from "@/utils/emailValidate";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function SignedInLayout({children}: Readonly<{children:React.ReactNode}>){
    const { isSignedIn, user, isLoaded } = useUser();   
    const router = useRouter();
    useEffect(()=>{
        checkStudentEmail()
    },[])

    function checkStudentEmail (){
        // const {emailAddress} :{emailAddress : string}= user['emailAddresses'][0]
        // const email:string = emailAddress;
        // if(validateStudentEmail(email)){
        //     router.push('/admin');
        // }else{
        //     router.push('/staff');
        // }    
    }


    return(
        <>
        {
            children
        }
        </>
    )
}