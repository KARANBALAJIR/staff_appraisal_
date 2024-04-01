'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import toast, { Toaster, ToastBar } from 'react-hot-toast';
import axios from 'axios';
import { setCookie } from '@/services/cookie.service';
import { useRouter } from 'next/navigation';
const Page = () => {    
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading,setLoading] = useState(false);
    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
        e.preventDefault();
        setLoading(true)
        try {
            const response = await axios.post(
                `api/user/register`,
                { email, password },
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )
            toast.success('Welcome to the family!', {
                duration: 2000,
                position: 'top-right',
                icon: '✅',
                iconTheme: {
                    primary: '#000',
                    secondary: '#fff',
                },
                ariaProps: {
                    role: 'status',
                    'aria-live': 'polite',
                },
            });
            setLoading(false)
            setCookie('usertoken', response.data.accesstoken, 168);
            router.push('/')
        }
        catch (err: any) {
            setLoading(false)
            toast.error(err.response.data.message, {
                duration: 2000,
                position: 'top-right',
                style: {
                    minWidth: '250px',
                    minHeight: '60px',
                },
            });
        }
    }

  return (
    <div className='h-screen w-screen flex justify-center items-center bg-[#f3f3f3]'>
          <Toaster reverseOrder={false} gutter={8} />
        <div className="w-[25rem] relative flex flex-col p-8 rounded-xl text-black bg-white shadow-lg hover:shadow-md duration-200 ease-in">
            <div className="text-3xl font-bold mb-4  text-[#1e0e4b] text-left">Create an <span className="text-blue-500"> account</span></div>
            {/* <div className="text-lg font-medium mb-4 text-center text-[#1e0e4b] "></div> */}
        <form className="flex flex-col gap-4">
            <div className="block relative"> 
                      <label htmlFor="email" className="block text-gray-600 cursor-text text-sm leading-[140%] font-medium mb-2">Email  <span className="text-red-500 text-bold">*</span></label>
            <input 
                type="text" 
                id="email" 
                className="rounded border border-gray-200 text-md w-full 
                    font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 
                    p-[11px] outline-0 "
                onChange={(e)=>{setEmail(e.target.value)}}
            />
            
            </div>
            <div className="block relative"> 
                      <label htmlFor="password" className="block text-gray-600 cursor-text text-sm leading-[140%] font-medium mb-2">Password <span className="text-red-500 text-bold">*</span></label>
            <input 
                type="password" 
                id="password" 
                className="rounded border border-gray-200 text-md w-full font-normal leading-[18px] text-black 
                        tracking-[0px] appearance-none block h-11 m-0 p-[11px]
                        outline-0"
                onChange={(e)=>{setPassword(e.target.value)}}
            />
            </div>
            <div className="block relative"> 
                      <label htmlFor="password" className="block text-gray-600 cursor-text text-sm leading-[140%] font-medium mb-2">Confirm Password  <span className="text-red-500 text-bold">*</span></label>
            <input 
                type="password" 
                id="password" 
                className="rounded border border-gray-200 text-md w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] outline-0"
                onChange={(e)=>{setConfirmPassword(e.target.value)}}
            />         
            </div>
            {
                (loading === false) ? 
                    <button
                        type="submit"
                              className="buttonload bg-blue-500 p-2 rounded-xl text-white shadow-md hover:opacity-90 duration-200 ease-in-out"
                        onClick={(e) => { handleSubmit(e) }}
                    >
                        Submit
                    </button>
                :
                    <button className="buttonload bg-blue-500 p-2 rounded-xl text-white shadow-md hover:opacity-90 duration-200 ease-in-out">
                        <i className="fa fa-circle-o-notch fa-spin"></i>
                    </button>
            }
            
          
        </form>
          <div className="text-sm text-center mt-[1.6rem] flex flex-row gap-x-4 justify-around">
                  <label className='text-md font-semibold'>Don’t have an account yet? </label>
            <Link className="text-md font-semibold text-blue-500" href={'/login'} >Sign up for free!</Link>
          </div>
        </div>
    </div>
  )
}

export default Page