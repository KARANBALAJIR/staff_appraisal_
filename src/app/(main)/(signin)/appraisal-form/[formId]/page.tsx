"use client"
import '@/styles/global.css'
import { useEffect, useState } from 'react';
import Associate_from from '@/app/(main)/(signin)/appraisal-form/[formId]/AssociateForm'
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import assoStru from '@/lib/data/associateStructure.json'
import { getCookie } from '@/services/cookie.service';


export default function Page( { params } : { params: { formId : string } } ) {
    const [pagination, setPagination] = useState(1);
    const [associateData, setAssociateData] = useState<Record<string, any> | null>(null);

    useEffect(()=>{
        const fetchData = async () => {
            const token = getCookie('usertoken')
            try {
                const response = await axios.get(`/api/form/appraisal_data?form_id=${params.formId}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization':`Bearer ${token}`
                    }
                });
                console.log(response.data)
                setAssociateData(response.data.data)
            } catch (error : any) {
                // Handle the error here
                console.log(error)
            }
        }
        fetchData()
    },[])


    function handleBack() {
        if (pagination > 1) {
            setPagination(pagination - 1)
        } else {
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

    function handleNext() {
        if (pagination < 3) {
            setPagination(pagination + 1)
        } else {
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

    const handleFormSubmit = async () => {
        const token = getCookie('usertoken')
        try {
            const response = await axios.patch('/api/form/appraisal_data', {
                form_id:params.formId,
                appraisal_form_data: associateData
            },{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${token}`
                }
            
            });
            console.log(response.data)
            // Handle the response here
        } catch (error : any) {
            // Handle the error here
            console.log(error)
        }
    }

    return (
        <div className="h-full p-[12px]">
            <Toaster />
            <div className="">
                <div className="p-[12px] text-2xl font-semibold">
                    Assistant Professor Form
                    </div>
                <div className="p-[12px] h-[calc(100vh-125px)] overflow-y-auto no-scrollbar">
                {
                    associateData === null ? <div>Loading...</div> 
                        : 
                        <Associate_from associateData={associateData} setAssociateData={setAssociateData} pagination={pagination} />

                }
                </div>
            </div>

            <div className="border-t-1 border-t-gray-400 bottom-0 sticky z-30 bg-white">
                <div className="flex justify-between items-center p-[10px]">
                    <button className="rounded-xl border-2 hover:bg-gray-100 border-primary-default text-primary-default  px-[15px] py-[10px]" onClick={handleBack}>back</button>
                    {                    
                        pagination !== 3 ?   
                            <button className="bg-impButton-default hover:bg-impButton-hover text-white bg-primary-default px-[15px] py-[10px] rounded-xl" onClick={handleNext}>next</button>
                        :
                            <button className="bg-impButton-default hover:bg-impButton-hover text-white bg-primary-default px-[15px] py-[10px] rounded-xl" onClick={handleFormSubmit}>Submit</button>

                    }                
                </div>
            </div>
        </div>
    )
}