'use client'

import Link from 'next/link'
import React, { useState } from 'react'

const Page = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e: Event) =>{
        e.preventDefault();
        console.log(email, password, confirmPassword)
    }

  return (
    <div className='h-screen w-screen flex justify-center items-center bg-[#f3f3f3]'>
        <div className="max-w-md relative flex flex-col p-4 rounded-md text-black bg-white shadow-md">
            <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">Register <span className="text-[#7747ff]"> Now</span></div>
            <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">create your account</div>
        <form className="flex flex-col gap-3">
            <div className="block relative"> 
            <label for="email" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Email</label>
            <input 
                type="text" 
                id="email" 
                className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
                onChange={(e)=>{setEmail(e.target.value)}}
            />
            
            </div>
            <div className="block relative"> 
            <label for="password" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Password</label>
            <input 
                type="password" 
                id="password" 
                className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
                onChange={(e)=>{setPassword(e.target.value)}}
            />
            </div>
            <div className="block relative"> 
            <label for="password" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Confirm Password</label>
            <input 
                type="password" 
                id="password" 
                className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
                onChange={(e)=>{setConfirmPassword(e.target.value)}}
            />
            
            </div>
            <button 
                type="submit" 
                className="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
                onClick={(e)=>{handleSubmit(e)}}
            >
                Submit
            </button>

        </form>
          <div className="text-sm text-center mt-[1.6rem]">Don’t have an account yet? 
            <Link className="text-sm text-[#7747ff]" href={'/login'} >Sign up for free!</Link>
          </div>
        </div>
    </div>
  )
}

export default Page