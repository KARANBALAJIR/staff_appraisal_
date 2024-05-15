"use client"
import '@/styles/global.css'
import { useState , useRef, useEffect } from 'react';
import Associate_from from '@/app/(main)/(signin)/appraisal-form/Associate_form'
import toast , { Toaster } from 'react-hot-toast';
import Associate_form from '@/components/associate/Associate_form';


export default function Appraisal_Page() {

    const [pagination, setPagination] = useState(1);

    function handleBack() {
        if(pagination > 1){
            setPagination(pagination - 1)
        }else{
            toast.error('You are already on the first page', {
                duration: 2000,
                position: 'top-right',
                style: {
                    minWidth: '250px',
                    minHeight: '50px',
                    padding: '10px',
                }
            })
        }
    }

    function handleNext(){
        if(pagination < 3 ){
            setPagination(pagination + 1 )
        }else{
            toast.error('You are already on the last page', {
                duration: 2000,
                position: 'top-right',
                style: {
                    minWidth: '250px',
                    minHeight: '50px',
                    padding: '10px',
                }
            })
        }
    }
    return (
        <div className="flex flex-col justify-between h-full">
            <Toaster/>
            <div className="">
                <div className="p-[12px] text-center border-b-1 border-b-gray-400 text-2xl font-semibold">Assistant Professor Form</div>
                <div className="p-[12px] h-[calc(100vh-125px)] overflow-y-auto no-scrollbar">

                    <Associate_from pagination={pagination}/>
                    {/* <Associate_form/> */}

                </div>
            </div>
           
            <div className="border-t-1 border-t-gray-400">
                <div className="flex justify-between items-center p-[10px]">
                    <button className="rounded-xl border-2 hover:bg-gray-100 border-blue-400  px-[15px] py-[10px]" onClick={handleBack}>back</button>
                    <button className="bg-blue-400 hover:bg-blue-500 text-white px-[15px] py-[10px] rounded-xl" onClick={handleNext}>next</button>
                </div>
           </div>
        </div>
    )
}