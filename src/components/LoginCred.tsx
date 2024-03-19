import { SignIn } from '@clerk/nextjs'
import React from 'react'

const LoginCred = () => {
  return (
    <div className='flex w-full h-[100vh] justify-center items-center'>
        <SignIn/>
    </div>
  )
}

export default LoginCred