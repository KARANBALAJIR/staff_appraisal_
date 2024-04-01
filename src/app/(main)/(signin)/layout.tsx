import React, { useEffect, useState } from "react";
import NavBar from "@/components/NavBar";


export default function SignedInLayout({children}: Readonly<{children:React.ReactNode}>){

    return(
        <>
        <NavBar/>
        {
            children
        }
        </>
    )
}