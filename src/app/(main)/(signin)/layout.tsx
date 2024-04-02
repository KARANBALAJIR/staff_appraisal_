import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LeftNavBar from "@/components/NavBar";
import axios from "axios";
import NavBar from "@/components/NavBar";
import { getCookie } from "@/services/cookie.service";


export default function SignedInLayout({children}: Readonly<{children:React.ReactNode}>){

    return(
        <div className="flex justify-center">
        <LeftNavBar/>
            <div className="w-[80rem] h-screen flex justify-center items-center">
                {
                    children
                }
            </div>
        </div>
    )
}