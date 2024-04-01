'use client'
import Loading from "@/components/Loading";
import { useEffect } from "react";

export default function Page(){

    useEffect(()=>{
        console.log("need to write code to check user type")
    },[])

    return(
        <div className="w-[80rem] h-[90vh] flex justify-center items-center">
            <Loading/>
        </div>
    )
}