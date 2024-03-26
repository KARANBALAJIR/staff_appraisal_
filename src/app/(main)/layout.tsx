'use client'
import React, { useEffect } from 'react'
import {getCookie} from '@/utils/cookie.service.ts'
import { useRouter } from 'next/navigation'
import { redirect } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { updateUserDetails } from '@/redux/userSlice'

const layout = ({children}: Readonly<{ children: React.ReactNode;}>) => {

  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(()=>{
    const cookie = getCookie("muruga")
    console.log("this is cookie", cookie)
    if(cookie === null){
      router.push('/form')
    }
  },[])

  return (
    <>
      {children}
    </>
  )
}

export default layout