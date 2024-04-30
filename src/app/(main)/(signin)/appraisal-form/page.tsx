"use client"
import '@/styles/global.css'

interface AccordianProps {
    title: string;
    children: React.ReactNode;
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
}

const Accordian = (props : AccordianProps) => {
    return(
        <>
            <div className="p-[12px] bg-zinc-200 flex flex-row justify-between rounded-[12px] items-center">
                <div className="text-md font-normal hover:underline cursor-pointer">Teaching Assignment</div>
                <button className="flex items-center"><span className="material-icons-sharp">expand_more</span></button>
                {/* <span className="material-icons-sharp hidden">expand_less</span> */}
            </div>
        </>
    )
}

const Table = () => {
    return(
        <>
            <form>
                <table className="table-auto  mx-auto">
                    <thead className="table-head">  
                        <tr className="border-seperate table-auto w-full">
                            <th>S.no</th>
                            <th>Sememter & Branch Section</th>
                            <th>Course Title</th>
                            <th>Number Of Credit</th>
                            <th>Points</th>
                            <th>Student Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td className=''><input className='' placeholder='Semester, Branch section' type='text'></input></td>
                            <td><input className='' placeholder='Course Title' type='text'></input></td>
                            <td><input className='' placeholder='Number Of Credit' type='text'></input></td>
                            <td><input className='' placeholder='Points' type='text'></input></td>
                            <td><input className='' placeholder='Student Feedback' type='text'></input></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td className=''><input className='' placeholder='Semester, Branch section' type='text'></input></td>
                            <td><input className='' placeholder='Course Title' type='text'></input></td>
                            <td><input className='' placeholder='Number Of Credit' type='text'></input></td>
                            <td><input className='' placeholder='Points' type='text'></input></td>
                            <td><input className='' placeholder='Student Feedback' type='text'></input></td>
                        </tr>
                    </tbody>
                </table>
            </form>
            
        </>
    )
}

export default function Appraisal_Page() {
    return (
        <div className="flex flex-col justify-between h-full">
            <div className="">
                <div className="p-[12px] text-center border-b-1 border-b-gray-400 text-2xl font-semibold">Assistant Professor Form</div>
                <div className="p-[12px] h-[calc(100vh-125px)] overflow-y-auto">
                    <div className="text-xl font-semibold mb-[16px] px-[12px]">Academic</div>
                    <div className="flex flex-col gap-[16px]">
                        <div className="border-1 shadow-md p-[16px] rounded-[12px] flex flex-col gap-[16px]">
                            <div className="flex flex-row justify-between items-center pb-[5px] border-b-2 border-zinc-300">
                                <div className="text-md font-normal hover:underline cursor-pointer">Teaching Assignment</div>
                                <button className="flex items-center"><span className="material-icons-sharp">expand_more</span></button>
                                {/* <span className="material-icons-sharp hidden">expand_less</span> */}
                            </div>
                            {/* <div className="">
                                <Table/>
                            </div> */}
                        </div> 
                        <div className="border-1 shadow-md p-[16px] rounded-[12px] flex flex-col gap-[16px]">
                            <div className="flex flex-row justify-between items-center pb-[5px] border-b-2 border-zinc-300">
                                <div className="text-md font-normal hover:underline cursor-pointer">Teaching Assignment</div>
                                <button className="flex items-center"><span className="material-icons-sharp">expand_more</span></button>
                                {/* <span className="material-icons-sharp hidden">expand_less</span> */}
                            </div>
                            {/* <div className="">
                                <Table/>
                            </div> */}
                        </div> 

                    </div>
                    
                </div>
            </div>
           
            <div className="border-t-1 border-t-gray-400">
                <div className="flex justify-between items-center p-[10px]">
                    <button className="rounded-xl border-2 border-blue-400  px-[15px] py-[10px]">back</button>
                    <button className="bg-blue-400 text-white px-[15px] py-[10px] rounded-xl">next</button>
                </div>
           </div>
        </div>
    )
}