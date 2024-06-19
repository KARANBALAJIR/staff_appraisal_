'use client'
import UserProfilePopUp from "@/app/(main)/(signin)/user-management/userPopup";
import { useState } from "react";
import '@/components/Styles/index.css'
const TopNavbar = () =>{

    const [usericonClick , setUserIconClick] = useState(false);

    return(
        <>
            <div className="h-[80px]">
                <div className="flex h-full items-center justify-end z-10">
                        <div className='flex gap-[20px] items-center p-[16px] h-full relative'>
                            <button>
                                <span className="material-icons-sharp text-white">notifications</span>
                            </button>
                            <button className='' onClick={()=>setUserIconClick(!usericonClick)}>
                                <span className="material-icons-sharp text-white">account_circle</span>
                            </button>
                            
                        <div className={`${usericonClick === false ? 'opacity-0  -right-[400px]' : 'opacity-100   right-[15px]'} overflow-hidden top-[90px] shadow-md absolute  bg-white z-20 rounded-2xl duration-[0.3s] ease-in` }>
                                <UserProfilePopUp />
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}


export default TopNavbar;
