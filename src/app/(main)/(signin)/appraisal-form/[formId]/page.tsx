"use client"
import '@/styles/global.css'
import { useEffect, useState } from 'react';
import Associate_from from '@/app/(main)/(signin)/appraisal-form/[formId]/AssociateForm'
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import assoStru from '@/lib/data/associateStructure.json'
import { getCookie } from '@/services/cookie.service';
import { IoIosSave } from "react-icons/io";
import { IoCloudDone } from "react-icons/io5";
import { GrCycle } from "react-icons/gr";
import { TbFaceIdError } from "react-icons/tb";


enum SaveStateEnum {
    SAVE,
    FAILED,
    SAVING,
    SAVED,
}

enum SubmitStateEnum {
    SUBMIT,
    FAILED,
    SUBMITTING,
    SUBMITTED,
}

export default function Page( { params } : { params: { formId : string } } ) {
    const [pagination, setPagination] = useState(1);
    const [associateData, setAssociateData] = useState<Record<string, any> | null>(null);
    const [saveState, setSaveState] = useState<SaveStateEnum>(SaveStateEnum.SAVE);
    const [formState,setFormState] = useState<SubmitStateEnum>(SubmitStateEnum.SUBMIT);

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
            setFormState(SubmitStateEnum.SUBMITTING)
            const response = await axios.patch('/api/form/appraisal_data', {
                form_id:params.formId,
                appraisal_form_data: associateData
            },{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${token}`
                }
            
            });
            setFormState(SubmitStateEnum.SUBMITTED)
            toast.success('Submit Successful', {
                duration: 2000,
                position: 'top-right',
                style: {
                    minWidth: '250px',
                    minHeight: '50px',
                    padding: '10px',
                }
            })
            setTimeout(() => {
                //
            }, 2000);
            console.log(response.data)
            // Handle the response here
        } catch (error : any) {
            // Handle the error here
            setFormState(SubmitStateEnum.FAILED)
            
            toast.error('Submit Failed', {
                duration: 2000,
                position: 'top-right',
                style: {
                    minWidth: '250px',
                    minHeight: '50px',
                    padding: '10px',
                }
            })

             setTimeout(() => {
                setSaveState(SaveStateEnum.SAVE);
            }, 2000);
            
            console.log(error)
        }
    }

    const handleSave = async () =>{
        const token = getCookie('usertoken')
        try {

            setSaveState(SaveStateEnum.SAVING)

            const response = await axios.patch('/api/form/appraisal_data', {
                form_id: params.formId,
                appraisal_form_data: associateData
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }

            });

            setSaveState(SaveStateEnum.SAVED)
            toast.success('Form saved', {
                duration: 2000,
                position: 'top-right',
                style: {
                    minWidth: '250px',
                    minHeight: '50px',
                    padding: '10px',
                }
            })

            setTimeout(() => {
                setSaveState(SaveStateEnum.SAVE);
            }, 3000);

            // Handle the response here
        } catch (error: any) {
            // Handle the error here
            setSaveState(SaveStateEnum.FAILED)
            toast.error('Save Failed', {
                duration: 2000,
                position: 'top-right',
                style: {
                    minWidth: '250px',
                    minHeight: '50px',
                    padding: '10px',
                }
            })
            setTimeout(() => {
                setSaveState(SaveStateEnum.SAVE);
            }, 3000);
            console.log(error)
        }
    }

    return (
        <div className="h-full p-[12px]">
            <Toaster />
            <div className="">
                <div className="p-[12px] flex flex-row justify-between">

                    <h1 className='text-2xl font-semibold'>Assistant Professor Form</h1>

                    {
                        (saveState === 0) ? 
                            <button
                                className='p-[8px] rounded-xl  shadow-md bg-white flex flex-row gap-[8px] items-center'
                                onClick={() => { handleSave() }} title='save'
                            >
                                <IoIosSave className='text-primary-default text-[24px]' />
                            </button>
                        :
                        (saveState === 1) ? 
                            <>
                                <div className='p-[8px] rounded-xl  shadow-md bg-white flex flex-row gap-[8px] items-center' title=''>
                                    <TbFaceIdError className='text-primary-default text-[24px]' />
                                </div>
                            </>
                        :
                        (saveState === 2) ? 
                            <>
                                <div className='p-[8px] rounded-xl  shadow-md bg-white flex flex-row gap-[8px] items-center' title=''>
                                        <GrCycle className='text-primary-default text-[24px]' />
                                </div>
                            </>
                        :
                        (saveState === 3) ? 
                                <div className='p-[8px] rounded-xl  shadow-md bg-white flex flex-row gap-[8px] items-center' title=''>
                                    <IoCloudDone className='text-primary-default text-[24px]' />
                                </div>
                        : <></>

                    }


                    
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
                        (pagination !== 3) ?   
                            <button className="bg-impButton-default hover:bg-impButton-hover text-white bg-primary-default px-[15px] py-[10px] rounded-xl" onClick={handleNext}>next</button>
                            : <>

                                {
                                    (formState === 0) ?
                                    <button className="bg-impButton-default hover:bg-impButton-hover text-white bg-primary-default px-[15px] py-[10px] rounded-xl" onClick={handleFormSubmit}>Submit</button>
                                    :
                                    (formState === 1) ?
                                    <div className="bg-impButton-default hover:bg-impButton-hover text-white bg-primary-default px-[15px] py-[10px] rounded-xl">
                                        <TbFaceIdError className='text-[24px] text-white'/>
                                    </div>
                                    :         
                                    (formState === 2) ?
                                    <div className="bg-impButton-default hover:bg-impButton-hover text-white bg-primary-default px-[15px] py-[10px] rounded-xl">
                                        <GrCycle className='text-[24px] text-white' />
                                    </div>
                                    :
                                    (formState === 3) ?
                                    <div className="bg-impButton-default hover:bg-impButton-hover text-white bg-primary-default px-[15px] py-[10px] rounded-xl">
                                        <IoCloudDone className='text-[24px] text-white' />
                                    </div>
                                    :
                                    <></>
                                }
                            </>
                    }                
                </div>
            </div>
        </div>
    )
}