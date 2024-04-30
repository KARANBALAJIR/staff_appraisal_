"use client"
import '@/styles/global.css'
import { useState, useRef } from 'react';
import { Table } from './page';

const Services_associate = () => {
    const [academicSubopen, setAcademicSubopen] = useState(0)
    const [isVisible, setIsVisible] = useState(false); // Add this line
    const inchargeAccreditationActivities = useRef<HTMLDivElement>(null); // Create a reference
    const brandingOfInstitution = useRef<HTMLDivElement>(null); // Create a reference
    const membershipProfessionalBodies = useRef<HTMLDivElement>(null); // Create a reference
    const cocurricularProgramme = useRef<HTMLDivElement>(null); // Create a reference
    const AssisInGeneralAdmin = useRef<HTMLDivElement>(null); // Create a reference

    const handleClick = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            ref.current.classList.toggle('hidden')
        }
    }
    return (
        <>
            <div className="text-xl font-semibold mb-[16px] px-[12px] text-center">Services</div>
            <div className="flex flex-col gap-[16px] scroll-smooth">
                <div className="border-1 shadow-md p-[16px] rounded-[12px] flex flex-col gap-[16px]">
                    <div className="flex flex-row justify-between items-center pb-[5px] border-b-2 border-zinc-300">
                        <div className="text-md font-normal hover:underline cursor-pointer">Incharges for Accreditation Activities - NAAC,NBA, UGC, NIRF, AU etc.,   </div>
                        <button onClick={() => handleClick(inchargeAccreditationActivities)} className="flex items-center"><span className="material-icons-sharp">expand_more</span></button>
                        {/* <span className="material-icons-sharp hidden">expand_less</span> */}
                    </div>
                    <div ref={inchargeAccreditationActivities} className={"hidden"}>
                        <Table />
                    </div>
                </div>
                <div className="border-1 shadow-md p-[16px] rounded-[12px] flex flex-col gap-[16px]">
                    <div className="flex flex-row justify-between items-center pb-[5px] border-b-2 border-zinc-300">
                        <div className="text-md font-normal hover:underline cursor-pointer">Branding of Institution</div>
                        <button onClick={() => handleClick(brandingOfInstitution)} className="flex items-center"><span className="material-icons-sharp">expand_more</span></button>
                        {/* <span className="material-icons-sharp hidden">expand_less</span> */}
                    </div>
                    <div ref={brandingOfInstitution} className={"hidden"}>
                        <Table />
                    </div>
                </div>
                <div className="border-1 shadow-md p-[16px] rounded-[12px] flex flex-col gap-[16px]">
                    <div className="flex flex-row justify-between items-center pb-[5px] border-b-2 border-zinc-300">
                        <div className="text-md font-normal hover:underline cursor-pointer">Membership in Professional Bodies - 2 Points</div>
                        <button onClick={() => handleClick(membershipProfessionalBodies)} className="flex items-center"><span className="material-icons-sharp">expand_more</span></button>
                        {/* <span className="material-icons-sharp hidden">expand_less</span> */}
                    </div>
                    <div ref={membershipProfessionalBodies} className={"hidden"}>
                        <Table />
                    </div>
                </div>
                <div className="border-1 shadow-md p-[16px] rounded-[12px] flex flex-col gap-[16px]">
                    <div className="flex flex-row justify-between items-center pb-[5px] border-b-2 border-zinc-300">
                        <div className="text-md font-normal hover:underline cursor-pointer">Co-curricular and Outreach Programme</div>
                        <button onClick={() => handleClick(cocurricularProgramme)} className="flex items-center"><span className="material-icons-sharp">expand_more</span></button>
                        {/* <span className="material-icons-sharp hidden">expand_less</span> */}
                    </div>
                    <div ref={cocurricularProgramme} className={"hidden"}>
                        <Table />
                    </div>
                </div>
                <div className="border-1 shadow-md p-[16px] rounded-[12px] flex flex-col gap-[16px]">
                    <div className="flex flex-row justify-between items-center pb-[5px] border-b-2 border-zinc-300">
                        <div className="text-md font-normal hover:underline cursor-pointer">Assistance in General Administration (Assessed by HOD/Principal)</div>
                        <button onClick={() => handleClick(AssisInGeneralAdmin)} className="flex items-center"><span className="material-icons-sharp">expand_more</span></button>
                        {/* <span className="material-icons-sharp hidden">expand_less</span> */}
                    </div>
                    <div ref={AssisInGeneralAdmin} className={"hidden"}>
                        <Table />
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Services_associate;