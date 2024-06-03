"use client"
import '@/styles/global.css'
import { useEffect, useState } from 'react';
import toast , { Toaster } from 'react-hot-toast';
import Link from "next/link";
import axios from 'axios';
import { getCookie } from '@/services/cookie.service';

export const TempCard = ({ formId, details } : {formId : number , details: any}) =>{
    const colorArray = ["bg-blue-500","bg-green-500","bg-purple-500","bg-yellow-500"]
    console.log(details)
    return(
        <Link href={'/appraisal-form/'+details.id}>
            <div className={`h-[200px] flex flex-col gap-[16px] rounded-[8px] shadow-lg  ${colorArray[formId%4]} hover:shadow-none duration-200 ease-in p-[16px]`}>
                <div className='flex justify-between'>
                    <h1 className="text-2xl text-white">{details.form_title}</h1>
                    <p className="text-white">{details.start_year} - {details.end_year}</p>
                </div>
                <div className='flex justify-between'>
                    <p className="text-white">{details.current_position}</p>
                </div>
            </div>
        </Link>
    )
}

const CreateForm = ({ openCreateForm, setOpenCreateForm, setuserForms }: { openCreateForm: boolean, setOpenCreateForm: Function, setuserForms :Function}) => {
    
    const [createFormData, setCreateFormData] = useState({
        form_title:"",
        start_year:"",
        end_year:"",
        current_position: "",
        expecting_appraisal:"",
    })

    const token = getCookie('usertoken');

    const handleClickOutside = () => {
        setOpenCreateForm(false);
    };

    const handleClickInside = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };



    async function handleFormChange(e:React.ChangeEvent<HTMLInputElement>){
        const name = e.target.name;
        const value = e.target.value;        
        const newData = {
            ...createFormData,
            [name]: value // Update the createFormData object with the input values
        }
        setCreateFormData(newData)
    }
    async function handleCreateForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        try{
            const response = await axios.post('/api/form', createFormData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            const data = response.data;
            
            setuserForms((prev: Array<any>) => {
                return [...prev, data.data];
            })

            if(data.status === 'success'){
                toast.success(data.message,{
                    duration: 2000,
                    position: 'top-right',
                    style: {
                        minWidth: '250px',
                        minHeight: '50px',
                        padding: '10px',
                    }
                })
            }else{
                toast.error(data.message, {
                    duration: 2000,
                    position: 'top-right',
                    style: {
                        minWidth: '250px',
                        minHeight: '50px',
                        padding: '10px',
                    }
                })
            }
        }catch(err: any){
            console.log(err)
        }

        setOpenCreateForm(false);
    }

    return(
        <>
            <div onClick={handleClickOutside}  className={`${openCreateForm === false ? 'hidden' : 'fixed inset-0 w-full h-full bg-gray-800 bg-opacity-50 flex flex-col justify-center items-center'}`}>
                    <div onClick={handleClickInside} className='relative w-[400px] h-[400px] bg-white rounded-xl p-[20px]'>
                        <div className='h-full flex flex-col gap-[20px]'>
                            <h1 className='text-2xl font-semibold'>Appraisal Form</h1>
                            
                            <form className='flex flex-col gap-[16px] flex-1 relative' onSubmit={handleCreateForm}>
                                <div>
                                    <input className='p-[12px] bg-gray-100 w-full rounded-xl' value={createFormData["form_title"]} name="form_title" onChange={handleFormChange} placeholder='Form title'></input>
                                </div>
                                <div className='flex flex-row justify-between'>
                                <input className='p-[12px] w-[45%] bg-gray-100 rounded-xl' value={createFormData["start_year"]} name="start_year" onChange={handleFormChange} placeholder='Start Year'></input>
                                <input className='p-[12px] w-[45%] bg-gray-100 rounded-xl' value={createFormData["end_year"]} name="end_year" onChange={handleFormChange} placeholder='End Year'></input>
                                </div>
                                <div>
                                <input className='p-[12px] bg-gray-100 w-full rounded-xl ' value={createFormData["current_position"]} name="current_position" onChange={handleFormChange} placeholder='Current Position'></input>
                                </div>
                                <div>
                                <input className='p-[12px] bg-gray-100 w-full rounded-xl' value={createFormData["expecting_appraisal"]} name="expecting_appraisal" onChange={handleFormChange} placeholder='Expecting Appraisal'></input>
                                </div>
                                <button className='p-[12px] bg-primary-default text-white rounded-xl hover:bg-primary-hover'>Create</button>
                            </form>
                        </div>
                        <button className='absolute top-[20px] right-[20px]' onClick={()=>setOpenCreateForm(false)}>
                            <span className="material-icons-sharp">
                                highlight_off
                            </span>
                        </button>
                    </div>
            </div>      
        </>
    )
}
 
const PlusIcon = ({ openCreateForm, setOpenCreateForm }: { openCreateForm: boolean, setOpenCreateForm: Function }) =>{
    return(
        <>
            <button
                title="Add New"
                className="group cursor-pointer outline-none  duration-300 px-[12px] py-[8px] bg-white rounded-[8px] flex gap-[8px] items-center shadow-sm hover:shadow-none"
                onClick={()=>setOpenCreateForm(!openCreateForm)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30px"
                    height="30px"
                    viewBox="0 0 24 24"
                    className="stroke-blue-400 group-hover:rotate-90 fill-none group-hover:fill-blue-800 group-active:stroke-blue-200 group-active:fill-blue-600 group-active:duration-0 duration-300"
                >
                    <path
                        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                        stroke-width="1.5"
                    ></path>
                    <path d="M8 12H16" stroke-width="1.5"></path>
                    <path d="M12 16V8" stroke-width="1.5"></path>
                </svg>
                <p className='group-active:rotate-0 font-medium'>Create</p>
            </button>
        </> 
    )


}


export default function Appraisal_Page() {

    const [pagination, setPagination] = useState(1);
    const [openCreateForm , setOpenCreateForm] = useState<boolean>(false);
    const token = getCookie('usertoken')
    const [userForms, setuserForms] = useState([]);

    useEffect(() => {
        getStaffForm();
    }, [])

    const getStaffForm = async () => {
        try {
            const response = await axios.get('/api/form', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            const data = response.data;
            console.log(data)
            setuserForms(data.data)
        } catch (err: any) {
            console.log(err)
        }
    }

    useEffect(()=>{
        console.log(openCreateForm);
    },[openCreateForm])

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
        
            <div className='flex flex-col gap-[16px] p-[12px]'>
                <CreateForm openCreateForm={openCreateForm} setOpenCreateForm={setOpenCreateForm} setuserForms={setuserForms} />
                <div className='flex justify-between'>   
                    <h1 className='font-semibold text-3xl'>Forms</h1>
                    <PlusIcon openCreateForm={openCreateForm} setOpenCreateForm={setOpenCreateForm}/>
                </div>
                <div className='flex flex-col gap-[16px] flex-wrap justify-between'>
                    {

                        userForms.length === 0 ? <>Loading ...</>
                        :
                        userForms.map((item, index) => {
                            return(
                                <>
                                    <TempCard key={index} formId={index} details={item} />
                                </>
                            )
                        })
                    }
                </div>
            </div>
    )
}