'use client'
import React from 'react'
import {useUser} from '@clerk/nextjs'
import Image from 'next/image'
import waitingForVerificaiton from '@/assets/waitingForVerificaiton.svg'

const Page = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  // console.log(user?.id) 
  return (
    <div className='flex h-[80vh] flex-col justify-center items-center'>
      <Image src={waitingForVerificaiton} alt='waiting for verificaiton'/>
      <div className='text-xl'>Waiting for Admin Verification...</div>
    </div>
  )
}

export default Page