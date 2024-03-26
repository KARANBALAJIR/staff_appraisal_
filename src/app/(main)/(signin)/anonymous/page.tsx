'use client'
import React from 'react'
import Image from 'next/image'
import waitingForVerificaiton from '@/assets/waitingForVerificaiton.svg'

const Page = () => {
  return (
    <div className='flex h-[80vh] flex-col justify-center items-center'>
      <Image src={waitingForVerificaiton} alt='waiting for verificaiton'/>
      <div className='text-xl'>Waiting for Admin Verification...</div>
    </div>
  )
}

export default Page