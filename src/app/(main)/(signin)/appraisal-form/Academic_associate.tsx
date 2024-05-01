"use client"
import '@/styles/global.css'
import { useState, useRef } from 'react';
import { Table } from './page';

const Academic_associate = () =>{
    const [academicSubopen, setAcademicSubopen] = useState(0)
    const [isVisible, setIsVisible] = useState(false); // Add this line
    const teachingAssignment = useRef<HTMLDivElement>(null); // Create a reference
    const passPercenatge = useRef<HTMLDivElement>(null); // Create a reference
    const studentFeedback = useRef<HTMLDivElement>(null); // Create a reference
    const teachingResourceCreation = useRef<HTMLDivElement>(null); // Create a reference
    const organizationGuestLectures = useRef<HTMLDivElement>(null); // Create a reference
    const studentProjectsGuided = useRef<HTMLDivElement>(null); // Create a reference
    const facultyDevelopmentProgram = useRef<HTMLDivElement>(null); // Create a reference
    const involvementInHighLevelCompetition = useRef<HTMLDivElement>(null); // Create a reference
    const facultyDevelopmentProgramAttended = useRef<HTMLDivElement>(null); // Create a reference
    const mouSigned = useRef<HTMLDivElement>(null); // Create a reference
    const tutorWardMeeting = useRef<HTMLDivElement>(null); // Create a reference
    const responsibilityHeld = useRef<HTMLDivElement>(null); // Create a reference

    const handleClick = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            ref.current.classList.toggle('hidden')
        }
    }
    return(
        <>
            <div className="text-xl font-semibold mb-[16px] px-[12px] text-center">Academic</div>
            <div className="flex flex-col gap-[16px] scroll-smooth">
                <div className="border-1 shadow-md p-[16px] rounded-[12px] flex flex-col gap-[16px]">
                    <div className="flex flex-row justify-between items-center pb-[5px] border-b-2 border-zinc-300">
                        <div className="text-md font-normal hover:underline cursor-pointer">Teaching Assignment</div>
                        <button onClick={() => handleClick(teachingAssignment)} className="flex items-center"><span className="material-icons-sharp">expand_more</span></button>
                        {/* <span className="material-icons-sharp hidden">expand_less</span> */}
                    </div>
                    <div ref={teachingAssignment} className={"hidden"}>
                        <Table />
                    </div>
                </div>
                <div className="border-1 shadow-md p-[16px] rounded-[12px] flex flex-col gap-[16px]">
                    <div className="flex flex-row justify-between items-center pb-[5px] border-b-2 border-zinc-300">
                        <div className="text-md font-normal hover:underline cursor-pointer">Pass Percentage</div>
                        <button onClick={() => handleClick(passPercenatge)} className="flex items-center"><span className="material-icons-sharp">expand_more</span></button>
                        {/* <span className="material-icons-sharp hidden">expand_less</span> */}
                    </div>
                    <div ref={passPercenatge} className={"hidden duration-200 ease-in"}>
                        <Table />
                    </div>
                </div>
                <div className="border-1 shadow-md p-[16px] rounded-[12px] flex flex-col gap-[16px]">
                    <div className="flex flex-row justify-between items-center pb-[5px] border-b-2 border-zinc-300">
                        <div className="text-md font-normal hover:underline cursor-pointer">Student feedback average</div>
                        <button onClick={() => handleClick(studentFeedback)} className="flex items-center"><span className="material-icons-sharp">expand_more</span></button>
                        {/* <span className="material-icons-sharp hidden">expand_less</span> */}
                    </div>
                    <div ref={studentFeedback} className={"hidden"}>
                        <Table />
                    </div>
                </div>
                <div className="border-1 shadow-md p-[16px] rounded-[12px] flex flex-col gap-[16px]">
                    <div className="flex flex-row justify-between items-center pb-[5px] border-b-2 border-zinc-300">
                        <div className="text-md font-normal hover:underline cursor-pointer">Teaching Resource Creation</div>
                        <button onClick={() => handleClick(teachingResourceCreation)} className="flex items-center"><span className="material-icons-sharp">expand_more</span></button>
                        {/* <span className="material-icons-sharp hidden">expand_less</span> */}
                    </div>
                    <div ref={teachingResourceCreation} className={"hidden"}>
                        <Table />
                    </div>
                </div>
                <div className="border-1 shadow-md p-[16px] rounded-[12px] flex flex-col gap-[16px]">
                    <div className="flex flex-row justify-between items-center pb-[5px] border-b-2 border-zinc-300">
                        <div className="text-md font-normal hover:underline cursor-pointer">Organizing Guest Lectures</div>
                        <button onClick={() => handleClick(organizationGuestLectures)} className="flex items-center"><span className="material-icons-sharp">expand_more</span></button>
                        {/* <span className="material-icons-sharp hidden">expand_less</span> */}
                    </div>
                    <div ref={organizationGuestLectures} className={"hidden"}>
                        <Table />
                    </div>
                </div>
                <div className="border-1 shadow-md p-[16px] rounded-[12px] flex flex-col gap-[16px]">
                    <div className="flex flex-row justify-between items-center pb-[5px] border-b-2 border-zinc-300">
                        <div className="text-md font-normal hover:underline cursor-pointer">Student Projects Guided</div>
                        <button onClick={() => handleClick(studentProjectsGuided)} className="flex items-center"><span className="material-icons-sharp">expand_more</span></button>
                        {/* <span className="material-icons-sharp hidden">expand_less</span> */}
                    </div>
                    <div ref={studentProjectsGuided} className={"hidden"}>
                        <Table />
                    </div>
                </div>
                <div className="border-1 shadow-md p-[16px] rounded-[12px] flex flex-col gap-[16px]">
                    <div className="flex flex-row justify-between items-center pb-[5px] border-b-2 border-zinc-300">
                        <div className="text-md font-normal hover:underline cursor-pointer">Faculty Development Programme/Seminar/Workshop/Conference organized</div>
                        <button onClick={() => handleClick(facultyDevelopmentProgram)} className="flex items-center"><span className="material-icons-sharp">expand_more</span></button>
                        {/* <span className="material-icons-sharp hidden">expand_less</span> */}
                    </div>
                    <div ref={facultyDevelopmentProgram} className={"hidden"}>
                        <Table />
                    </div>
                </div>
                <div className="border-1 shadow-md p-[16px] rounded-[12px] flex flex-col gap-[16px]">
                    <div className="flex flex-row justify-between items-center pb-[5px] border-b-2 border-zinc-300">
                        <div className="text-md font-normal hover:underline cursor-pointer">involvement in High Level Competition/Innovative Projects</div>
                        <button onClick={() => handleClick(involvementInHighLevelCompetition)} className="flex items-center"><span className="material-icons-sharp">expand_more</span></button>
                        {/* <span className="material-icons-sharp hidden">expand_less</span> */}
                    </div>
                    <div ref={involvementInHighLevelCompetition} className={"hidden"}>
                        <Table />
                    </div>
                </div>
                <div className="border-1 shadow-md p-[16px] rounded-[12px] flex flex-col gap-[16px]">
                    <div className="flex flex-row justify-between items-center pb-[5px] border-b-2 border-zinc-300">
                        <div className="text-md font-normal hover:underline cursor-pointer">Faculty Development Programme attended (in Reputed institutions)</div>
                        <button onClick={() => handleClick(facultyDevelopmentProgramAttended)} className="flex items-center"><span className="material-icons-sharp">expand_more</span></button>
                        {/* <span className="material-icons-sharp hidden">expand_less</span> */}
                    </div>
                    <div ref={facultyDevelopmentProgramAttended} className={"hidden"}>
                        <Table />
                    </div>
                </div>
                <div className="border-1 shadow-md p-[16px] rounded-[12px] flex flex-col gap-[16px]">
                    <div className="flex flex-row justify-between items-center pb-[5px] border-b-2 border-zinc-300">
                        <div className="text-md font-normal hover:underline cursor-pointer">MoU Signed and Activity conducted with Industries</div>
                        <button onClick={() => handleClick(mouSigned)} className="flex items-center"><span className="material-icons-sharp">expand_more</span></button>
                        {/* <span className="material-icons-sharp hidden">expand_less</span> */}
                    </div>
                    <div ref={mouSigned} className={"hidden"}>
                        <Table />
                    </div>
                </div>
                <div className="border-1 shadow-md p-[16px] rounded-[12px] flex flex-col gap-[16px]">
                    <div className="flex flex-row justify-between items-center pb-[5px] border-b-2 border-zinc-300">
                        <div className="text-md font-normal hover:underline cursor-pointer">Tutor Ward Meeting</div>
                        <button onClick={() => handleClick(tutorWardMeeting)} className="flex items-center"><span className="material-icons-sharp">expand_more</span></button>
                        {/* <span className="material-icons-sharp hidden">expand_less</span> */}
                    </div>
                    <div ref={tutorWardMeeting} className={"hidden"}>
                        <Table />
                    </div>
                </div>
                <div className="border-1 shadow-md p-[16px] rounded-[12px] flex flex-col gap-[16px]">
                    <div className="flex flex-row justify-between items-center pb-[5px] border-b-2 border-zinc-300">
                        <div className="text-md font-normal hover:underline cursor-pointer">Responsibilities Held</div>
                        <button onClick={() => handleClick(responsibilityHeld)} className="flex items-center"><span className="material-icons-sharp">expand_more</span></button>
                        {/* <span className="material-icons-sharp hidden">expand_less</span> */}
                    </div>
                    <div ref={responsibilityHeld} className={"hidden"}>
                        <Table />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Academic_associate;