'use client'

import React, { useEffect, useState } from "react";
import { getCookie } from "@/services/cookie.service";
import axios from "axios";
import { updateUserDetails } from "@/redux/userSlice";
import { useRouter } from "next/navigation";
import Link from "next/link";
import '@/components/Styles/index.css'
import '@/styles/global.css'
import { UserType } from "@prisma/client";
import { usePathname } from "next/navigation";

export default function SignedInLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const [sideBarOpen, setSideBarOpen] = useState(true);
    const [arrow_ios, setArrow_ios] = useState('arrow_forward_ios')
    const [role, setRole] = useState<UserType>(UserType.ANONYMOUS);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    const pathname = usePathname();
    const [defaultIndex, setDefaultIndex] = useState(0);

    const allRoles: Record<UserType, string[]> = {
        'ANONYMOUS': ['anonymous'],
        'STAFF': ['appraisal-form'],
        'HOD': ['appraisal-form', 'approval-form'],
        'MASTER': ['approval-form'],
        'ADMIN': ['user-management', 'approval-form'],

    }

    useEffect(() => {
        checkRole();
    }, [])

    useEffect(() => {
        const userAccess = allRoles[role];
        router.push(`${userAccess[0]}`)
    }, [role])

    const checkRole = async () => {
        try {
            const token = getCookie('usertoken')
            console.log(token)
            const response = await axios.get('/api/user', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Custom-Header': 'Custom-Value'
                }
            })

            const userData = response.data.user;
            setRole(userData.role)
            updateUserDetails(userData);
        }
        catch (err: any) {
            console.log(err.message);
        }
    }

    return (
        <>
            <div className="flex flex-row bg-white relative" >
                <div className='h-screen'>
                    <div className={`${sideBarOpen === true ? ' w-[12.5rem]' : 'w-[5.5rem]'}   transition-all duration-200 ease-in relative `}>
                        <div className='h-[60px] flex  items-center'>
                            <div className="flex pl-[10px] items-center w-full h-[50px]">
                                <button
                                    className='flex items-center w-[50px] h-[50px] justify-center rounded-full duration-200 ease-in'
                                    onClick={() =>
                                        setSideBarOpen(!sideBarOpen)
                                    }><span className="material-icons-sharp rounded-full ">
                                        menu
                                    </span>
                                </button>
                            </div>

                        </div>
                        <div className='flex mt-[20px]'>
                            <div className={`${sideBarOpen === true ? 'w-[180px]' : 'w-[65px]'} flex flex-col gap-y-4 items-center duration-200 ease-in`}>
                                {
                                    allRoles[role].map((item, index) => {
                                        return (
                                            <>
                                                {(item === 'user-management') ?
                                                    <Link title="user-management" key={index} href='/user-management' onClick={() => { }} className={`px-[16px] py-[8px] ${pathname === '/user-management' ? 'bg-primary-default hover:bg-impButton-hover text-white duration-0' : 'bg-gray-100 text-gray-700'} rounded-tr-xl rounded-br-xl w-full flex flex-row gap-4 items-center duration-200 ease-in`}>
                                                        <span className={`${sideBarOpen === false ? '' : ''} material-icons-sharp `}>manage_accounts</span>
                                                        <text className={` text-lg font-normal duration-200 ease-in ${sideBarOpen === true ? ' opacity-100' : ' opacity-0'}`}>manage</text>
                                                    </Link>
                                                    : <></>
                                                }
                                                {(item === 'approval-form') ?
                                                    <Link title="form-approval" key={index} href='/approval-form' onClick={() => { }} className={` px-[16px] py-[8px]  ${pathname === '/approval-form' ? 'bg-primary-default hover:bg-impButton-hover text-white' : 'bg-gray-100 text-gray-700'}  rounded-tr-xl rounded-br-xl w-full  flex flex-row gap-4 items-center duration-200 ease-in`}>
                                                        <span className={`${sideBarOpen === false ? '' : ''} material-icons-sharp `}>approval</span>
                                                        <text className={`  text-lg font-normal duration-200 ease-in ${sideBarOpen === true ? ' opacity-100' : ' opacity-0'}`}>Approval</text>
                                                    </Link>
                                                    : <></>
                                                }
                                                {(item === 'appraisal-form') ?
                                                    <Link title="appraisal form" key={index} href="/appraisal-form" className={`px-[16px] py-[8px] 3 rounded-tr-xl rounded-br-xl  ${pathname === '/appraisal-form' ? 'bg-primary-default hover:bg-impButton-hover text-white' : 'bg-gray-100 text-gray-700'}   w-full flex flex-row gap-4 items-center duration-200 ease-in text-black`}>
                                                        <span className="material-icons-sharp">insert_drive_file</span>
                                                        <text className={` text-lg font-normal duration-200 ease-in ${sideBarOpen === true ? ' opacity-100 ' : ' opacity-0 '}`}>Form</text>
                                                    </Link> : <></>
                                                }
                                                {(item === 'anonymous') ?
                                                    <Link title="anonymous" key={index} href="/anonymous" className={`px-[16px] py-[8px] 3 rounded-tr-xl rounded-br-xl  ${pathname === '/anonymous' ? 'bg-primary-default hover:bg-impButton-hover text-white' : 'bg-gray-100 text-gray-700'}   w-full flex flex-row gap-4 items-center duration-200 ease-in text-black`}>
                                                        <span className="material-icons-sharp">no_accounts</span>
                                                        <text className={` text-lg font-normal duration-200 ease-in ${sideBarOpen === true ? ' opacity-100 ' : ' opacity-0 '}`}>Anonymous</text>
                                                    </Link> : <></>
                                                }
                                            </>
                                        )
                                    })
                                }

                            </div>

                        </div>
                    </div>
                </div>
                <div className="h-screen flex-1">
                    <div className=' h-[calc(100vh)] overflow-hidden home no-scrollbar duration-200 ease-in scroll-smooth'>
                        <div className="h-full overflow-y-auto no-scrollbar">
                            <div className='flex flex-col bg-ghostWhite'>
                                <div className='flex justify-between p-[12px] bg-white'>
                                    <div className="flex gap-[12px] items-center">
                                        {/* <div className='w-[40px] h-[40px] rounded-full bg-gray-400'>

                                        </div> */}
                                        <h1 className='font-bold text-3xl username-gradient'>Cibiyanna P</h1>
                                    </div>
                                    <div className='flex flex-row gap-[30px] items-center'>
                                        <div className='flex flex-row gap-[8px] items-center justify-center'>
                                            <button className='flex items-center' title="notifications">
                                                <span className="material-icons-sharp">
                                                    notifications
                                                </span>
                                            </button>
                                        </div>
                                        <div className='flex flex-row gap-[8px] items-center justify-center'>
                                            <button className='flex items-center' title="logout">
                                                <span className="material-icons-sharp">
                                                    logout
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-tl-[16px]">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

