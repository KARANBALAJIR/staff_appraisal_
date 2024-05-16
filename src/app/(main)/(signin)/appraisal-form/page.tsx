"use client"
import '@/styles/global.css'
import { Fragment, useState } from 'react';
import toast , { Toaster } from 'react-hot-toast';
import Link from "next/link";

const TempCard = ({ formId } : {formId : number}) =>{
    return(
        <Link href={'/appraisal-form/'+formId}>
            <div className='w-[300px] h-[300px] rounded-[8px] shadow-md bg-gray-100 opacity-50 hover:shadow-none duration-200 ease-in'>

            </div>
        </Link>
    )
}
 

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
        <div className='flex flex-col gap-[16px]'>
            <div className='flex justify-end p-[12px]'>
                <div className='flex flex-row gap-[20px] items-center'>
                    <span className="material-icons-sharp">
                        notifications
                    </span>
                    <div className='flex flex-row gap-[10px] items-center justify-center'>
                        <div className='w-[40px] h-[40px] rounded-full bg-gray-400'>

                        </div>
                        <h1 className='font-semibold'>Cibiyanna P</h1>
                        <button className='flex items-center'><span className="material-icons-sharp">expand_more</span></button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-[16px] p-[12px]'>
                <h1 className='font-semibold text-xl'>Forms</h1>
                <div className='flex flex-row gap-[16px] flex-wrap'>
                    {
                        [1,2,3,4,5,6,7,8,9].map((item, index) => {
                            return(
                                <>
                                    <TempCard key={index} formId={index} />
                                </>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}