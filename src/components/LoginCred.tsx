'use client'
import React, { useEffect } from 'react'
import { useRouter } from "next/navigation";

const LoginCred = () => {
  const router = useRouter()
  // useEffect(()=>{
  //   router.push('/signin')
  // },[])
  return (
    <div className='flex w-full h-[100vh] justify-center items-center bg-[black]'>
        {/* <SignIn/> */}
    </div>
  )
}

export default LoginCred