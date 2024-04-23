"use client"
import Associate_form from "@/components/associate/Associate_form"


export default function Appraisal_Page() {
    return (
        <div className="flex flex-col justify-between h-full p-[10px]">
            <div className="">
                <div className="p-[10px] text-center border-b-1 border-b-gray-400 text-xl font-semibold">Assistant Professor Form</div>
                <div className="p-[10px]">
                    <text>Helloworld</text>
                </div>
            </div>
           
            <div className="border-t-1 border-t-gray-400">
                <div className="flex justify-between items-center p-[10px] ">
                    <button className="rounded-xl border-2 border-blue-400  px-[15px] py-[10px]">back</button>
                    <button className="bg-blue-400 text-white px-[15px] py-[10px] rounded-xl">next</button>
                </div>
           </div>
        </div>
    )
}