import React, { useEffect, useState } from "react";
import { validateStudentEmail } from "@/utils/emailValidate";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LeftNavBar from "@/components/NavBar";
import axios from "axios";
import NavBar from "@/components/NavBar";


export default function SignedInLayout({children}: Readonly<{children:React.ReactNode}>){

    return(
        <div className="flex">
        <LeftNavBar/>
            {
                children
            }
        </div>
    )
}