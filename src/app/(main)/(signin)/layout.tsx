'use client'

import React, { useEffect, useState } from "react";
import { getCookie } from "@/services/cookie.service";
import axios from "axios";
import { updateUserDetails } from "@/redux/userSlice";
import { useRouter } from "next/navigation";
import LeftNavBar from "@/components/NavBar";
import Loading from "@/components/Loading";

export default function SignedInLayout({children}: Readonly<{children:React.ReactNode}>){

    useEffect(() => {
        checkRole();
        console.log('incoming')
    }, [])

    const router = useRouter();

    const checkRole = async () => {
        try {
            const token = getCookie('usertoken')
            console.log(token)
            const response = await axios.get('/api/user', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Custom-Header': 'Custom-Value'
                }
            })

            const userData = response.data.user;

            console.log(userData);

            updateUserDetails(userData);

            router.push(userData.role.toLowerCase())

        }
        catch (err: any) {
            console.log(err.message);
        }
    }
    return(
        <>
            {
                children
            }
        </>
    )
}