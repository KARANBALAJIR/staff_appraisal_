"use client"
import '@/styles/global.css'
import { useState, useRef } from 'react';
import { Table } from './page';

const Research_associate = () => {
    const [academicSubopen, setAcademicSubopen] = useState(0)
    const [isVisible, setIsVisible] = useState(false); // Add this line
    const paperPublishedInSci = useRef<HTMLDivElement>(null); // Create a reference
    const paperPublishedInScopus = useRef<HTMLDivElement>(null); // Create a reference
    const bookPublication = useRef<HTMLDivElement>(null); // Create a reference
    const publicationOfBookChapter = useRef<HTMLDivElement>(null); // Create a reference
    const patentsFiled = useRef<HTMLDivElement>(null); // Create a reference
    const increaseInHIndex = useRef<HTMLDivElement>(null); // Create a reference
    const increaseInITenIndex = useRef<HTMLDivElement>(null); // Create a reference
    const increaseInCitation = useRef<HTMLDivElement>(null); // Create a reference
    const fundedResearchProject = useRef<HTMLDivElement>(null); // Create a reference
    const consultancyWork = useRef<HTMLDivElement>(null); // Create a reference
    const numberOfResearchScholarsGuiding = useRef<HTMLDivElement>(null); // Create a reference
    const collaborationWithForeignUni = useRef<HTMLDivElement>(null); // Create a reference
    const establishOfLabWithIndus = useRef<HTMLDivElement>(null); // Create a reference


    const handleClick = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            ref.current.classList.toggle('hidden')
        }
    }
    return (
        <>
            <div className="text-xl font-semibold mb-[16px] px-[12px] text-center">Research</div>
            <div className="flex flex-col gap-[16px] scroll-smooth">
                <div className="border-1 shadow-md p-[16px] rounded-[12px] flex flex-col gap-[16px]">
                    <div className="flex flex-row justify-between items-center pb-[5px] border-b-2 border-zinc-300">
                        <div className="text-md font-normal hover:underline cursor-pointer">Papers Published in SCI Indexed Journals</div>
                        <button onClick={() => handleClick(paperPublishedInSci)} className="flex items-center"><span className="material-icons-sharp">expand_more</span></button>
                        {/* <span className="material-icons-sharp hidden">expand_less</span> */}
                    </div>
                    <div ref={paperPublishedInSci} className={"hidden"}>
                        <Table />
                    </div>
                </div>
                <div className="border-1 shadow-md p-[16px] rounded-[12px] flex flex-col gap-[16px]">
                    <div className="flex flex-row justify-between items-center pb-[5px] border-b-2 border-zinc-300">
                        <div className="text-md font-normal hover:underline cursor-pointer">Papers Published in SCOPUS/SCIE/WoS Indexed Journals </div>
                        <button onClick={() => handleClick(paperPublishedInScopus)} className="flex items-center"><span className="material-icons-sharp">expand_more</span></button>
                        {/* <span className="material-icons-sharp hidden">expand_less</span> */}
                    </div>
                    <div ref={paperPublishedInScopus} className={"hidden"}>
                        <Table />
                    </div>
                </div>
                <div className="border-1 shadow-md p-[16px] rounded-[12px] flex flex-col gap-[16px]">
                    <div className="flex flex-row justify-between items-center pb-[5px] border-b-2 border-zinc-300">
                        <div className="text-md font-normal hover:underline cursor-pointer">Book Publication - 2 Point </div>
                        <button onClick={() => handleClick(bookPublication)} className="flex items-center"><span className="material-icons-sharp">expand_more</span></button>
                        {/* <span className="material-icons-sharp hidden">expand_less</span> */}
                    </div>
                    <div ref={bookPublication} className={"hidden"}>
                        <Table />
                    </div>
                </div>
                <div className="border-1 shadow-md p-[16px] rounded-[12px] flex flex-col gap-[16px]">
                    <div className="flex flex-row justify-between items-center pb-[5px] border-b-2 border-zinc-300">
                        <div className="text-md font-normal hover:underline cursor-pointer">Publication of Book Chapters  - 2 Points (Scopus/Wos indexed  only) </div>
                        <button onClick={() => handleClick(publicationOfBookChapter)} className="flex items-center"><span className="material-icons-sharp">expand_more</span></button>
                        {/* <span className="material-icons-sharp hidden">expand_less</span> */}
                    </div>
                    <div ref={publicationOfBookChapter} className={"hidden"}>
                        <Table />
                    </div>
                </div>
                <div className="border-1 shadow-md p-[16px] rounded-[12px] flex flex-col gap-[16px]">
                    <div className="flex flex-row justify-between items-center pb-[5px] border-b-2 border-zinc-300">
                        <div className="text-md font-normal hover:underline cursor-pointer">Patents Filed - 1 point  | Patents published - 2 points | Patents Granted - 3 points</div>
                        <button onClick={() => handleClick(patentsFiled)} className="flex items-center"><span className="material-icons-sharp">expand_more</span></button>
                        {/* <span className="material-icons-sharp hidden">expand_less</span> */}
                    </div>
                    <div ref={patentsFiled} className={"hidden"}>
                        <Table />
                    </div>
                </div>
                <div className="border-1 shadow-md p-[16px] rounded-[12px] flex flex-col gap-[16px]">
                    <div className="flex flex-row justify-between items-center pb-[5px] border-b-2 border-zinc-300">
                        <div className="text-md font-normal hover:underline cursor-pointer">Increase in h Index - 3 Points (1 - 1 Point | 2 to 3 - 2 points | 4 & above -3 Points)</div>
                        <button onClick={() => handleClick(increaseInHIndex)} className="flex items-center"><span className="material-icons-sharp">expand_more</span></button>
                        {/* <span className="material-icons-sharp hidden">expand_less</span> */}
                    </div>
                    <div ref={increaseInHIndex} className={"hidden"}>
                        <Table />
                    </div>
                </div>
                <div className="border-1 shadow-md p-[16px] rounded-[12px] flex flex-col gap-[16px]">
                    <div className="flex flex-row justify-between items-center pb-[5px] border-b-2 border-zinc-300">
                        <div className="text-md font-normal hover:underline cursor-pointer">Increase in i10 Index - 3 Points (1 - 1 Point | 2 to 3 - 2 Points | 4 & above -3 Points)    </div>
                        <button onClick={() => handleClick(increaseInITenIndex)} className="flex items-center"><span className="material-icons-sharp">expand_more</span></button>
                        {/* <span className="material-icons-sharp hidden">expand_less</span> */}
                    </div>
                    <div ref={increaseInITenIndex} className={"hidden"}>
                        <Table />
                    </div>
                </div>
                <div className="border-1 shadow-md p-[16px] rounded-[12px] flex flex-col gap-[16px]">
                    <div className="flex flex-row justify-between items-center pb-[5px] border-b-2 border-zinc-300">
                        <div className="text-md font-normal hover:underline cursor-pointer">Increase in Citations - 2 Points (Less than 50 - 1 Point | Above 50 - 2 Points)</div>
                        <button onClick={() => handleClick(increaseInCitation)} className="flex items-center"><span className="material-icons-sharp">expand_more</span></button>
                        {/* <span className="material-icons-sharp hidden">expand_less</span> */}
                    </div>
                    <div ref={increaseInCitation} className={"hidden"}>
                        <Table />
                    </div>
                </div>
                <div className="border-1 shadow-md p-[16px] rounded-[12px] flex flex-col gap-[16px]">
                    <div className="flex flex-row justify-between items-center pb-[5px] border-b-2 border-zinc-300">
                        <div className="text-md font-normal hover:underline cursor-pointer">Funded Research Projects - 5 Points (Projects Sanctioned during appraisal period will only be considered)</div>
                        <button onClick={() => handleClick(fundedResearchProject)} className="flex items-center"><span className="material-icons-sharp">expand_more</span></button>
                        {/* <span className="material-icons-sharp hidden">expand_less</span> */}
                    </div>
                    <div ref={fundedResearchProject} className={"hidden"}>
                        <Table />
                    </div>
                </div>
                <div className="border-1 shadow-md p-[16px] rounded-[12px] flex flex-col gap-[16px]">
                    <div className="flex flex-row justify-between items-center pb-[5px] border-b-2 border-zinc-300">
                        <div className="text-md font-normal hover:underline cursor-pointer">Consultancy work  - 4 Points</div>
                        <button onClick={() => handleClick(consultancyWork)} className="flex items-center"><span className="material-icons-sharp">expand_more</span></button>
                        {/* <span className="material-icons-sharp hidden">expand_less</span> */}
                    </div>
                    <div ref={consultancyWork} className={"hidden"}>
                        <Table />
                    </div>
                </div>
                <div className="border-1 shadow-md p-[16px] rounded-[12px] flex flex-col gap-[16px]">
                    <div className="flex flex-row justify-between items-center pb-[5px] border-b-2 border-zinc-300">
                        <div className="text-md font-normal hover:underline cursor-pointer">Number of Research Scholars Guiding/Completed during appraisal period</div>
                        <button onClick={() => handleClick(numberOfResearchScholarsGuiding)} className="flex items-center"><span className="material-icons-sharp">expand_more</span></button>
                        {/* <span className="material-icons-sharp hidden">expand_less</span> */}
                    </div>
                    <div ref={numberOfResearchScholarsGuiding} className={"hidden"}>
                        <Table />
                    </div>
                </div>
                <div className="border-1 shadow-md p-[16px] rounded-[12px] flex flex-col gap-[16px]">
                    <div className="flex flex-row justify-between items-center pb-[5px] border-b-2 border-zinc-300">
                        <div className="text-md font-normal hover:underline cursor-pointer">Collaboration with foreign Universities </div>
                        <button onClick={() => handleClick(collaborationWithForeignUni)} className="flex items-center"><span className="material-icons-sharp">expand_more</span></button>
                        {/* <span className="material-icons-sharp hidden">expand_less</span> */}
                    </div>
                    <div ref={collaborationWithForeignUni} className={"hidden"}>
                        <Table />
                    </div>
                </div>
                <div className="border-1 shadow-md p-[16px] rounded-[12px] flex flex-col gap-[16px]">
                    <div className="flex flex-row justify-between items-center pb-[5px] border-b-2 border-zinc-300">
                        <div className="text-md font-normal hover:underline cursor-pointer"> Establishment of a Laboratory in collaboration with an Industry / Funding agency – 2 Points</div>
                        <button onClick={() => handleClick(establishOfLabWithIndus)} className="flex items-center"><span className="material-icons-sharp">expand_more</span></button>
                        {/* <span className="material-icons-sharp hidden">expand_less</span> */}
                    </div>
                    <div ref={establishOfLabWithIndus} className={"hidden"}>
                        <Table />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Research_associate;