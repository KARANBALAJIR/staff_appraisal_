'use client';

import React, { useEffect, useState } from 'react'
import '@/components/Styles/LeftNav.css'
import Link from 'next/link';


const AdminNavBar = () => {
    const [sideBarOpen,setSideBarOpen] = useState(true);
    const [appName , setAppName ] = useState('Staff Appraisal')
    const [arrow_ios , setArrow_ios] = useState('arrow_forward_ios')

    useEffect(()=>{
        if(sideBarOpen === true){
            setAppName('Staff Appraisal')
        }else{
            setAppName('SA')
        }
        if(sideBarOpen === true){
            setArrow_ios('arrow_back_ios')
        }
        else{
            setArrow_ios('arrow_forward_ios')
        }
    },[sideBarOpen])

    return (
        <>
            <div className={`${sideBarOpen === true ? ' w-[16rem]' : 'w-[7rem]' }   transition-all duration-200 ease-in relative `}>
                <div className='h-[5rem] flex justify-center items-center text-[30px]'>
                    <span className={` duration-[500ms] ease-in-out ${sideBarOpen ? ' ml-0 ' : ' ml-[50px] '} font-semibold text-white`}>U</span>
                    <span className={` duration-[500ms] ease-in-out ${sideBarOpen ? 'opacity-100' : ' opacity-0 '}  font-semibold text-gray-100`} >p</span>
                    <span className={` duration-[500ms] ease-in-out ${sideBarOpen ? ' ml-0 ' : ' -ml-[10px] '} font-semibold text-white`}>R</span>
                    <span className={` duration-[500ms] ease-in-out ${sideBarOpen ? 'opacity-100' : ' opacity-0 '} font-semibold text-gray-100`} >ise</span>
                </div>
                <div className='flex justify-center mt-[20px]'>
                    <div className={`${sideBarOpen === true ? 'w-[13rem]' : 'w-[50px]'} flex flex-col gap-y-4 items-center duration-200 ease-in`}>
                        <Link href='/admin' onClick={()=>{}} className={`bg-secondary px-3 py-3 rounded-xl w-full shadow-md flex flex-row gap-4 items-center duration-200 ease-in`}>
                            <span className="material-icons-sharp">home</span>
                            <text className={` text-lg font-normal duration-200 ease-in ${sideBarOpen === true ? ' opacity-100 ' : ' opacity-0 '}`}>Dashboard</text>
                        </Link>
                    
                        <Link href="/admin/stats" className={`px-3 py-2 rounded-xl w-full flex flex-row gap-4 items-center duration-200 ease-in text-white`}>
                            <span className="material-icons-sharp">assignment</span>
                            <text className={` text-lg font-normal duration-200 ease-in ${sideBarOpen === true ? ' opacity-100 ' : ' opacity-0 '}`}>Form</text> 
                        </Link>
                    </div>
                    
                </div>
                <button
                    className='absolute -bottom-[8rem] -right-[2rem] duration-200 ease-in'
                    onClick={() =>  
                        setSideBarOpen(!sideBarOpen)
                    }><span className="material-icons-sharp">
                        {arrow_ios}
                    </span>
                </button>
            </div>
           
        </>
    )
}

export default AdminNavBar;