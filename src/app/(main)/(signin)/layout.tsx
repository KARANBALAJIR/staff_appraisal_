'use client'

import React, { useEffect, useState } from "react";
import { getCookie } from "@/services/cookie.service";
import axios from "axios";
import { updateUserDetails } from "@/redux/userSlice";
import { useRouter } from "next/navigation";

export default function SignedInLayout({children}: Readonly<{children:React.ReactNode}>){

    useEffect(() => {
        checkRole();
    }, [])

    const router = useRouter();

    const checkRole = async () => {
        try {
            const token = getCookie('usertoken')
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