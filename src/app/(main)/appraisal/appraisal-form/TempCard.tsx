import { getCookie } from "@/services/cookie.service";
import axios from "axios";
import  img1 from '@/assets/1.png'
import  img2 from '@/assets/2.png'
import  img3 from '@/assets/3.png'
import img4 from '@/assets/4.png'
import Link from "next/link";

export const TempCard = ({ formId, details } : {formId : number , details: any}) =>{
    const colorArray = ["bg-blue-500","bg-[#f7d2ae]","bg-[#8faad9]","bg-[#333b45]"]
    const textColor = ["text-white","text-black","text-white","text-white"]
    const imageArray =  [img1 ,img3,img2,img4]
    const token = getCookie('usertoken');
    const handleFormDelete =async () =>{
        try {
            const response = await axios.delete(`/api/form?formId=${details.id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':'Bearer '+getCookie('usertoken')
                }
            })
            alert('form deleted')
        } catch (err) {
            console.log(err)
        }
    }


    return(
        
            <div className={`h-[200px] flex flex-col gap-[16px] rounded-[8px] shadow-lg  ${colorArray[formId%4]} border border-[#c0c0c0] hover:shadow-none duration-200 ease-in p-[16px] overflow-hidden`}>
                <div className='flex flex-row justify-between h-full relative'>
                    <div className='w-full '>
                        <Link href={'/appraisal-form/' + details.id}>
                            <div className='flex justify-between '>
                                <h1 className={`text-2xl ${textColor[formId%4]}`}>{details.form_title}</h1>
                                <p className= {`${textColor[formId%4]} text-right`}>{details.start_year} - {details.end_year}</p>
                            </div>
                        </Link>
                        <div className='flex justify-between'>
                            <p className= {`${textColor[formId%4]} text-[15px]`}>{details.current_position}</p>
                        </div>
                        <div className={`w-full flex ${formId%2 == 0 ?"justify-end" : "justify-start"}`}>
                            <img src={imageArray[formId%4].src} alt="image" className='h-full w-[150px] overflow-hidden ml-[100px] mr-[150px]'/>
                        </div>
                    </div>
                    <button className='absolute bottom-0 right-0 z-10 bg-white px-[16px] py-[8px] rounded-[8px] outline-0 border-0 hover:bg-gray-100 duration-200 ease-in' onClick={handleFormDelete}>Delete</button>
                    
                </div>
            </div>
    )
}