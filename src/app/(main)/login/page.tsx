'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import '../../../components/Styles/LoginCredStyles.css'
import axios from 'axios'
import { useRouter } from 'next/navigation'


const Page = () => {
  
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
    e.preventDefault();
    try{
      console.log(email,password)
      const response = await axios.post(
        `api/user/login`,
        {email, password},
        {
          headers:{
            "Content-Type": "application/json"
          }
        }
      )
      if(response.status === 200){
        console.log(`userToken=${response.data.token}`)
        document.cookie = (`userToken=${response.data.token}`)
        router.push('/')
      }
      console.log(response);
    }
    catch(err:any){
      console.log(err.message);
    }
  }

  return (
    <div className='h-screen w-screen flex justify-center items-center bg-[#f3f3f3]'>
        <div className="max-w-md relative flex flex-col p-4 rounded-md text-black bg-white shadow-md">
            <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">Welcome back to <span className="text-[#7747ff]">App</span></div>
            <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">Log in to your account</div>
        <form className="flex flex-col gap-3">
            <div className="block relative"> 
            <label htmlFor="email" className="label">Email</label>
            <input 
              type="email" 
              id="email" 
              className="input"
              onChange={(e)=>{setEmail(e.target.value)}}
            />
            
            </div>
            <div className="block relative"> 
            <label  htmlFor="password" className="label">Password</label>
            <input 
              type="password" 
              id="password" 
              className="input"
              onChange={(e)=>{setPassword(e.target.value)}}
            />
            
            </div>

            <button 
              type="submit" 
              className="button"
              onClick={(e)=>{handleSubmit(e)}}
            >
              Submit
            </button>

        </form>
          <div className="text-sm text-center mt-[1.6rem]">Don&apos;t have an account yet?  
            <Link className="text-sm text-[#7747ff]" href={'/signup'} > Sign up for free!</Link>
          </div>
        </div>
    </div>
  )
}

export default Page