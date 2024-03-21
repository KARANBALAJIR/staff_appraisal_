"use client";
import React, { useEffect, useState } from "react";
import { UserButton, useAuth, useUser, clerkClient } from '@clerk/nextjs';
import { validateStudentEmail } from "@/utils/emailValidate";
import Link from "next/link";
import { useRouter } from "next/navigation";
import NavBar from "@/components/NavBar";
import axios from "axios";


export default function SignedInLayout({children}: Readonly<{children:React.ReactNode}>){
    const { isSignedIn, user, isLoaded } = useUser();
    const [userId, setUserId] = useState(user?.id);   
    const router = useRouter();

    useEffect(()=>{
        console.log("check")
        const checkUser = async() =>{
            const response = await axios.get(`/api/user?userId=${userId}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            )
            if(response.data.role === undefined){
                router.push('/anonymous')
            }
            else{
                router.push(`/${response.data.role}`)
            }
        }
        checkUser();
    })

    const [isFirst, setIsFirst] = useState(true);

    async function checkStudentEmail (){
        // console.log(userId)
        // if(userId !== undefined){
        //     console.log("check")
        //     let user : any= await clerkClient.users.getUser("user_2d2izFNPuJAUdKnBHuoRv4xIHVy")
        //     console.log('user',user)
        // }
        // if(isFirst){
        //     router.push('/form')
        // }
        // router.push('/anonymous')
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
        <NavBar/>
        {
            children
        }
        </>
    )
}