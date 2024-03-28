'use client'
import React, { useEffect } from 'react'
import { getCookie } from '@/services/cookie.service'
import { useRouter } from 'next/navigation'
import { redirect } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { updateUserDetails } from '@/redux/userSlice'
import { Provider } from 'react-redux'
import store from "@/redux/store";  

const SignupLayout = ({children}: Readonly<{ children: React.ReactNode;}>) => {

  const router = useRouter();
  // const dispatch = useDispatch();

  useEffect(()=>{
    const cookie = getCookie("userToken")
    console.log("this is cookie", cookie)
    if(cookie === null){
      router.push('/login')
    }
  },[])

  return (
    <>
    <Provider store={store}>
      {children}
    </Provider>
    </>
    
  )
}

export default SignupLayout