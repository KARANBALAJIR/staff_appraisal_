'use client'
import Loading from "@/components/Loading";
import { useEffect } from "react";
import { getCookie } from "@/services/cookie.service";
import axios from "axios";
import { updateUserDetails } from "@/redux/userSlice";
import { useRouter } from "next/navigation";

export default function Page(){

    const router = useRouter();
    
    useEffect(()=>{
        helper();
    },[])

    const helper = async() =>{
        try{
            const token = getCookie('usertoken')
            const response = await axios.get('/api/user',{
                headers : {
                    'Authorization': `Bearer ${token}`,
                    'Custom-Header': 'Custom-Value'
                }
            })

            const userData = response.data.user;

            console.log(userData);

            updateUserDetails(userData);

            router.push(userData.role.toLowerCase())

        }
        catch(err: any){
            console.log(err.message);
        }

    }

    return(
        <Loading/>
    )
}