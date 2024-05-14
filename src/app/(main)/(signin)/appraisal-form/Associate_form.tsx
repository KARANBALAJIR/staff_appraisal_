import Academic_associate from '@/app/(main)/(signin)/appraisal-form/Academic_associate';
import Services_associate from '@/app/(main)/(signin)/appraisal-form/Services_associate';
import Research_associate from './Research_associate';
import { useEffect, useState } from 'react';
import CommonComponent from './CommanComponent';
interface Associate_formProps {
    pagination: number;
}

const Associate_form = (props : Associate_formProps) =>{
    const {pagination } = props;
    const associateDataJson = {
        academics:[
            {
                title: "1. Teaching Assignment (No of credits per subject taught) 3 Credit-1 Point, 4 Credit-2 Point || Max 4 Points (Subject Handled in Even Sem 2021 -2022)",
                headers: ["Sl. No", "Semester", "Course Title", "Number of Credit", "Points", "Feedback%"],
                data: [
                    { slno: 1, semester: '', courseTitle: '', numOfCredit: '', points: '', feedback: '' },
                    { slno: 2, semester: '', courseTitle: '', numOfCredit: '', points: '', feedback: '' },
                    { slno: 3, semester: '', courseTitle: '', numOfCredit: '', points: '', feedback: '' }
                ],
                fields : ['proofRequired', 'erpProof', 'selfEvaluation', 'hrEvaluation', 'hrComment', 'totalScore'],
                validation:{
                    proofRequired: '',
                    erpProof: '',
                    selfEvaluation: '',
                    hrEvaluation: '',
                    hrComment: '',
                    totalScore: 0,
                },
                maxPoint: 4,
                flag: false,
            },
            {
                title: "2. Pass Percentage (Average) 100% - Points || 90-99% - 2 Points || 75-89% - 1 Point",
                headers: ["Sl. No", "Academic Year", "Name of the Subject", "Pass %"],
                data: [
                    { slno: 1, acdyear: '', subname: '', passpercentage: '', },
                    { slno: 2, acdyear: '', subname: '', passpercentage: '', },
                    { slno: 3, acdyear: '', subname: '', passpercentage: '', }
                ],
                proofRequired: '',
                erpProof: '',
                maxPoint: 3,
                selfEvaluation: '',
                hrEvaluation: '',
                hrComment: '',
                averagePass: 0,
                flag: false,
            },
            {
                title: "3. Student Feedback (Average) 100% - Points || 90-99% - 2 Points || 75-89% - 1 Point",
                proofRequired: '',
                erpProof: '',
                maxPoint: 4,
                selfEvaluation: '',
                hrEvaluation: '',
                hrComment: '',
                totalScore: 0,
                flag: false,
            },
            {
                title: "4. Teaching Resource Creation Innovation in Classroom Teaching / Lab with proof - 2 Points",
                proofRequired: '',
                erpProof: '',
                maxPoint: 4,
                selfEvaluation: '',
                hrEvaluation: '',
                hrComment: '',
                totalScore: 0,
                flag: false,

            },
            {
                title: "5. Organizing Guest Lectures/Visiting Faculty for respective subjects with National and International Level Experts – 2 Points",
                proofRequired: '',
                erpProof: '',
                maxPoint: 4,
                selfEvaluation: '',
                hrEvaluation: '',
                hrComment: '',
                totalScore: 0,
                flag: false,

            },
            {
                title: "6. Project Details",
                headers: ["Sl. No", "Academic Year", "Event name-Subject", "Resource person/organization", "Points", "Total Points", "hod", "Dean"],
                data: [
                    { slno: 1, acdyear51: '', event51: '', date51: '', points51: '', totalpoints6: '', h5: '', d6: '' },
                    { slno: 2, acdyear51: '', event51: '', date51: '', points51: '', totalpoints6: '', h5: '', d6: '' },
                    { slno: 3, acdyear51: '', event51: '', date51: '', points51: '', totalpoints6: '', h5: '', d6: '' }
                ],
                proofRequired: '',
                erpProof: '',
                maxPoint: 4,
                selfEvaluation: '',
                hrEvaluation: '',
                hrComment: '',
                totalScore: 0,
                flag: false,

            },
            {
                title: "7. Publication Details",
                headers: ["Sl. No", "Name of Programme", "Year Of Study", "Date of Completion", "Points"],
                data: [
                    { slno: 1, nameofpro: '', yearofstudy: '', dateofcom: '', points: '' },
                    { slno: 2, nameofpro: '', yearofstudy: '', dateofcom: '', points: '' },
                    { slno: 3, nameofpro: '', yearofstudy: '', dateofcom: '', points: '' }
                ],
                proofRequired: '',
                erpProof: '',
                maxPoint: 4,
                selfEvaluation: '',
                hrEvaluation: '',
                hrComment: '',
                flag: false,

            },
            {
                title: "8. Faculty Development Programme/Seminar/Workshop/Conference organized",
                headers: ["Sl. No", "Category Of Event", "Title Of Event", "Date of Sanction", "Fund received from agency", "Grant sanctioned"],
                data: [
                    { slno: 1, catofevent: '', titleofeve: '', dateofsanc: '', fundreceived: '', grantsanc: '' },
                    { slno: 2, catofevent: '', titleofeve: '', dateofsanc: '', fundreceived: '', grantsanc: '' },
                    { slno: 3, catofevent: '', titleofeve: '', dateofsanc: '', fundreceived: '', grantsanc: '' }
                ],
                proofRequired: '',
                erpProof: '',
                maxPoint: 4,
                selfEvaluation: '',
                hrEvaluation: '',
                hrComment: '',
                flag: false,

            },
            {
                title: "9. Involvement in High Level Competition/Innovative Projects",
                headers: ["Sl. No", "Competition Name", "Name of the Project mentored", "Date of participation", "Prize won", "Cash award (if any)"],
                data: [
                    { slno: 1, competitionname: '', nameofpromentored: '', dateofpart: '', prizewon: '', cashaward: '' },
                    { slno: 2, competitionname: '', nameofpromentored: '', dateofpart: '', prizewon: '', cashaward: '' },
                    { slno: 3, competitionname: '', nameofpromentored: '', dateofpart: '', prizewon: '', cashaward: '' }
                ],
                proofRequired: '',
                erpProof: '',
                maxPoint: 4,
                selfEvaluation: '',
                hrEvaluation: '',
                hrComment: '',
                flag: false,

            },
            {
                title: "10. Faculty Development Programme attended (in Reputed institutions) Online Course completed",
                headers: ["Sl. No", "FDP/Online Course Title", "startofprog", "endofprog", "organizedby", "score"],
                data: [
                    { slno: 1, onlinecoursetitle: '', startofprog: '', endofprog: '', organizedby: '', score: '' },
                    { slno: 2, onlinecoursetitle: '', startofprog: '', endofprog: '', organizedby: '', score: '' },
                    { slno: 3, onlinecoursetitle: '', startofprog: '', endofprog: '', organizedby: '', score: '' },
                ],
                proofRequired: '',
                erpProof: '',
                maxPoint: 4,
                selfEvaluation: '',
                hrEvaluation: '',
                hrComment: '',
                flag: false,

            },
            {
                title: "11. MoU Signed and Activity conducted with Industries - 2 Points",
                headers: ["Sl. No", "Mou Signed/Activity Conducted", "Name Of Company", "date"],
                data: [
                    { slno: 1, mousigned: '', nameofcom: '', date: '' },
                    { slno: 2, mousigned: '', nameofcom: '', date: '' },
                    { slno: 3, mousigned: '', nameofcom: '', date: '' },
                ],
                proofRequired: '',
                erpProof: '',
                maxPoint: 4,
                selfEvaluation: '',
                hrEvaluation: '',
                hrComment: '',
                flag: false,
            },
            {
                title: "12. Tutor Ward Meeting",
                headers: ["Sl. No", " startdatemeet", "enddatemeet", "valuebrought"],
                data: [
                    { slno: 1, startdatemeet: '', enddatemeet: '', valuebrought: '' },
                    { slno: 2, startdatemeet: '', enddatemeet: '', valuebrought: '' },
                    { slno: 3, startdatemeet: '', enddatemeet: '', valuebrought: '' },
                ],
                proofRequired: '',
                erpProof: '',
                maxPoint: 4,
                selfEvaluation: '',
                hrEvaluation: '',
                hrComment: '',
                flag: false,
            },

            {
                title: "13. Responsibilities Held",
                headers: ["Sl. No", " nameofreshold", "points"],
                data: [
                    { slno: 1, nameofreshold: '', points: '' },
                    { slno: 2, nameofreshold: '', points: '' },
                    { slno: 3, nameofreshold: '', points: '' },
                ],
                proofRequired: '',
                erpProof: '',
                maxPoint: 4,
                selfEvaluation: '',
                hrEvaluation: '',
                hrComment: '',
                flag: false,
            },
        ],
        research:[
            {
                title: "1. Papers Published in SCI Indexed Journals ",
                headers: ["Sl. No", "Journal Name", "Title of the paper", "Author Position", "Month & Year of Publication", "Points"],
                data: [
                    { slno: 1, journalname: '', titleofpaper: '', authorposition: '',monthyearpub:'', points: '' },
                    { slno: 2, journalname: '', titleofpaper: '', authorposition: '',monthyearpub:'', points: '' },
                    { slno: 3, journalname: '', titleofpaper: '', authorposition: '',monthyearpub:'', points: '' }
                ],
                proofRequired: '',
                erpProof: '',
                maxPoint: 4,
                selfEvaluation: '',
                hrEvaluation: '',
                hrComment: '',
                totalScore: 0,
                flag: false,
            },
            {
                title: " 2. Papers Published in SCOPUS/SCIE/WoS Indexed Journals",
                headers: ["Sl. No", "Journal Name", "Title of the paper", "Author Position", "Month & Year of Publication", "Points"],
                data: [
                    { slno: 1, journalname: '', titleofpaper: '', authorposition: '', points: '' },
                    { slno: 2, journalname: '', titleofpaper: '', authorposition: '', points: '' },
                    { slno: 3, journalname: '', titleofpaper: '', authorposition: '', points: '' }
                ],
                proofRequired: '',
                erpProof: '',
                maxPoint: 3,
                selfEvaluation: '',
                hrEvaluation: '',
                hrComment: '',
                averagePass: 0,
                flag: false,
            },
            {
                title: "3. Book Publication - 2 Point ",
                headers: ["Sl. No", "Title of the book", "Publisher Name & ISBN No.", "Month & Year of Publication"],
                data: [
                    { slno: 1, titleofbook: '', publishername: '', monthyearofpub: '' },
                    { slno: 2, titleofbook: '', publishername: '', monthyearofpub: '' },
                    { slno: 3, titleofbook: '', publishername: '', monthyearofpub: '' },
                ],
                proofRequired: '',
                erpProof: '',
                maxPoint: 4,
                selfEvaluation: '',
                hrEvaluation: '',
                hrComment: '',
                totalScore: 0,
                flag: false,
            },
            {
                title: " 4. Publication of Book Chapters  - 2 Points (Scopus/Wos indexed  only)",
                headers: ["Sl. No", "Title of the book chapter", "Scopus / WoS Journal nam", "Month & Year of Publication"],
                data: [
                    { slno: 1, titleofbook: '', scopuswos: '', monthyearofpub: '' },
                    { slno: 2, titleofbook: '', scopuswos: '', monthyearofpub: '' },
                    { slno: 3, titleofbook: '', scopuswos: '', monthyearofpub: '' },
                ],
                proofRequired: '',
                erpProof: '',
                maxPoint: 4,
                selfEvaluation: '',
                hrEvaluation: '',
                hrComment: '',
                totalScore: 0,
                flag: false,

            },
            {
                title: " 5. Patents Filed - 1 point  | Patents published - 2 points | Patents Granted - 3 points",
                headers: ["Sl. No", "Title of the patent", "Filed/Published/Granted", "Date","Points"],
                data: [
                    { slno: 1, titleofpatent: '', filedpublishedgranted: '', date: '',points:'' },
                    { slno: 2, titleofpatent: '', filedpublishedgranted: '', date: '', points: '' },
                    { slno: 3, titleofpatent: '', filedpublishedgranted: '', date: '', points: '' },
                ],
                proofRequired: '',
                erpProof: '',
                maxPoint: 4,
                selfEvaluation: '',
                hrEvaluation: '',
                hrComment: '',
                totalScore: 0,
                flag: false,

            },
            {
                title: " 6. Increase in h Index - 3 Points (1 - 1 Point | 2 to 3 - 2 points | 4 & above -3 Points)",
                proofRequired: '',
                erpProof: '',
                maxPoint: 4,
                selfEvaluation: '',
                hrEvaluation: '',
                hrComment: '',
                hindex: 0,
                flag: false,

            },
            {
                title: "7. Increase in i10 Index - 3 Points (1 - 1 Point | 2 to 3 - 2 Points | 4 & above -3 Points)",
                proofRequired: '',
                erpProof: '',
                maxPoint: 4,
                selfEvaluation: '',
                hrEvaluation: '',
                hrComment: '',
                i10index: 0,
                flag: false,

            },
            {
                title: "8. Increase in Citations - 2 Points (Less than 50 - 1 Point | Above 50 - 2 Points)",
                proofRequired: '',
                erpProof: '',
                maxPoint: 4,
                selfEvaluation: '',
                hrEvaluation: '',
                hrComment: '',
                citationcount:'',
                flag: false,

            },
            {
                title: "9. Funded Research Projects - 5 Points (Projects Sanctioned during appraisal period will only be considered)",
                headers: ["Sl. No", "Title of the Research Project", "Funding Agency", "Date of Sanction", "Grant Sanctioned (Rs.)"],
                data: [
                    { slno: 1, titleofresearchproj: '', fundingagency: '', dateoofsanc: '', grantsanc: '' },
                    { slno: 2, titleofresearchproj: '', fundingagency: '', dateoofsanc: '', grantsanc: '' },
                    { slno: 3, titleofresearchproj: '', fundingagency: '', dateoofsanc: '', grantsanc: '' }
                ],
                proofRequired: '',
                erpProof: '',
                maxPoint: 4,
                selfEvaluation: '',
                hrEvaluation: '',
                hrComment: '',
                flag: false,
            },
            {
                title: "10. Consultancy work  - 4 Points",
                headers: ["Sl. No", "Title of the Consultancy Work", "Industry Name", "Date of Completion", "Fund Generated (Rs.)"],
                data: [
                    { slno: 1, titleofconsultancywork: '', industryname: '', dateofcompletion: '', fundgenerated: '' },
                    { slno: 2, titleofconsultancywork: '', industryname: '', dateofcompletion: '', fundgenerated: '' },
                    { slno: 3, titleofconsultancywork: '', industryname: '', dateofcompletion: '', fundgenerated: '' },
                ],
                proofRequired: '',
                erpProof: '',
                maxPoint: 4,
                selfEvaluation: '',
                hrEvaluation: '',
                hrComment: '',
                flag: false,

            },
            {
                title: "11. Number of Research Scholars Guiding/Completed during appraisal period",
                headers: ["Sl. No", "Research Scholar Name", "Registration No.", "Date of Registration", "Date of Completion","Points"],
                data: [
                    { slno: 2, resscholarname: '', regisno: '', dateofreg: '' , dateofcom:'',points:''},
                    { slno: 3, resscholarname: '', regisno: '', dateofreg: '' , dateofcom:'',points:''},
                    { slno: 1, resscholarname: '', regisno: '', dateofreg: '' , dateofcom:'',points:''},
                ],
                proofRequired: '',
                erpProof: '',
                maxPoint: 4,
                selfEvaluation: '',
                hrEvaluation: '',
                hrComment: '',
                flag: false,
            },
            {
                title: "12. Collaboration with foreign Universities ",
                headers: ["Sl. No", "Joint Project / Publication", "Name of the Professor and Foreign university", "Date of Publication / project"],
                data: [
                    { slno: 1, jointproject: '', nameofprofandforeuni: '', dateofpub: '' },
                    { slno: 2, jointproject: '', nameofprofandforeuni: '', dateofpub: '' },
                    { slno: 3, jointproject: '', nameofprofandforeuni: '', dateofpub: '' },
                ],
                proofRequired: '',
                erpProof: '',
                maxPoint: 4,
                selfEvaluation: '',
                hrEvaluation: '',
                hrComment: '',
                flag: false,
            },

            {
                title: "13. Establishment of a Laboratory in collaboration with an Industry / Funding agency - 2 Points",
                headers: ["Sl. No", " Name of the Lab Established", "Funding Agency / Industry", "Date of Sanction","Amount Sanctioned","points"],
                data: [
                    { slno: 1, nameoflabestablished: '', fundingagency: '' , dateofsanc:'' , amountsanctioned:'' , points:''},
                    { slno: 2, nameoflabestablished: '', fundingagency: '' , dateofsanc:'' , amountsanctioned:'' , points:''},
                    { slno: 3, nameoflabestablished: '', fundingagency: '' , dateofsanc:'' , amountsanctioned:'' , points:''},
                ],
                proofRequired: '',
                erpProof: '',
                maxPoint: 4,
                selfEvaluation: '',
                hrEvaluation: '',
                hrComment: '',
                flag: false,
            },
        ],
        services:[
            {
                title: "1. Incharges for Accreditation Activities - NAAC,NBA, UGC, NIRF, AU etc.,   ",
                headers: ["Sl. No", "Incharge Of The Activity / File", "Points"],
                data: [
                    { slno: 1, inchargeofactivity: '', points: ''},
                    { slno: 2, inchargeofactivity: '', points: '' },
                    { slno: 3, inchargeofactivity: '', points: '' },
                ],
                proofRequired: '',
                erpProof: '',
                maxPoint: 4,
                selfEvaluation: '',
                hrEvaluation: '',
                hrComment: '',
                totalScore: 0,
                flag: false,
            },
            {
                title: " 2. Branding of Institution",
                headers: ["Sl. No", "Name of the Activity/Achievement", "Max. Marks", "Points"],
                data: [
                    { slno: 1, activity: 'Publication in Newspaper', maxmarks: '3', points: '', },
                    { slno: 2, activity: 'Social Service activity (Website for Society/ Projects implemented for Agri and Society/Mobile app/etc.)', maxmarks: '2', points: '', },
                    { slno: 3, activity: 'YouTube/Facebook/Instagram activities', maxmarks: '2', points: '', }
                ],
                proofRequired: '',
                erpProof: '',
                maxPoint: 3,
                selfEvaluation: '',
                hrEvaluation: '',
                hrComment: '',
                averagePass: 0,
                flag: false,
            },
            {
                title: "Membership in Professional Bodies - 2 Points",
                headers: ["Sl. No", "Name of the Professional Body", "Validity Status", "Points"],
                data: [
                    { slno: 1, nameofprobody: '', validitystatus: '', points: '' },
                    { slno: 2, nameofprobody: '', validitystatus: '', points: '' },
                    { slno: 3, nameofprobody: '', validitystatus: '', points: '' },
                ],
                proofRequired: '',
                erpProof: '',
                maxPoint: 4,
                selfEvaluation: '',
                hrEvaluation: '',
                hrComment: '',
                totalScore: 0,
                flag: false,
            },
            {
                title: "4. Co-curricular and Outreach Programme",
                headers: ["Sl. No", "Date", "Name of the Program", "Organized By","Acted as Resource person/Participant"],
                data: [
                    { slno: 1, date: '', nameofprogram: '', organizedby: '', actedasresourceperson:''},
                    { slno: 2, date: '', nameofprogram: '', organizedby: '' ,actedasresourceperson:''},
                    { slno: 3, date: '', nameofprogram: '', organizedby: '' ,actedasresourceperson:''},
                ],
                proofRequired: '',
                erpProof: '',
                maxPoint: 4,
                selfEvaluation: '',
                hrEvaluation: '',
                hrComment: '',
                totalScore: 0,
                flag: false,

            },
            {
                title: "5. Assistance in General Administration (Assessed by HOD/Principal)",
                headers: ["Sl. No", "Name of Task"],
                data: [
                    { slno: 1, nameoftask: '' },
                    { slno: 2, nameoftask: '' },
                    { slno: 3, nameoftask: '' },
                ],
                proofRequired: '',
                erpProof: '',
                maxPoint: 4,
                selfEvaluation: '',
                hrEvaluation: '',
                hrComment: '',
                totalScore: 0,
                flag: false,

            },
        ]
    };

    useEffect(()=>{
        setAssociateData(associateDataJson)
    },[])

    const [associateData, setAssociateData] = useState<Record<string, any>>(associateDataJson);

    const handleInputChange = (field: keyof typeof associateData, tableIndex: number, rowIndex: number, name: string, value: number) => {
        const newData: typeof associateData = { ...associateData };
        newData[field][tableIndex].data[rowIndex][name] = value;
        setAssociateData(newData);
    };

    const handleValidationChange = (field: keyof typeof associateData , tableIndex :number, name :  string, value : any) =>{
        const newData : typeof associateData = { ...associateData };
        newData[field][tableIndex]["validation"] = { 
            ...newData[field][tableIndex]["validation"],
            [name]: value
        }
        setAssociateData(newData);
    }


    const handleAddRow = (field: keyof typeof associateData,tableIndex: any) => {
        const newData : typeof associateData = {...associateData};
        const lastRow = (newData[field][tableIndex] as {data:any}).data[newData[field][tableIndex].data.length - 1];
        newData[field][tableIndex].data.push({ slno: lastRow.slno + 1, ...Object.keys(lastRow).reduce((acc, key) => ({ ...acc, [key]: '' }), {}) });
        setAssociateData(newData);
    };

    const handleRemoveRow = (field : keyof typeof associateData ,tableIndex: any) => {
        const newData : typeof associateData = {...associateData};
        if (newData[field][tableIndex].data.length > 1) {
            newData[field][tableIndex].data.pop();
            setAssociateData(newData);
        }
    };

    const handleToggle = (field: keyof typeof associateData, tableIndex: any) => {
        const newData: typeof associateData = { ...associateData };
        const newFlag = !newData[field][tableIndex].flag;
        newData[field][tableIndex] = { ...newData[field][tableIndex], flag: newFlag };
        console.log(newFlag)
        setAssociateData(newData);
    };

    return(
        <>
            {
                (pagination === 1) ? <CommonComponent tableData={associateData["academics"]} field={"academics"} handleInputChange={handleInputChange} handleToggle={handleToggle} handleAddRow={handleAddRow} handleRemoveRow={handleRemoveRow} handleValidationChange={handleValidationChange} /> :
                    (pagination === 2) ? <CommonComponent tableData={associateData["research"]} field={"research"} handleInputChange={handleInputChange} handleToggle={handleToggle} handleAddRow={handleAddRow} handleRemoveRow={handleRemoveRow} handleValidationChange={handleValidationChange} /> :
                        (pagination === 3) ? <CommonComponent tableData={associateData["services"]} field={"services"} handleInputChange={handleInputChange} handleToggle={handleToggle} handleAddRow={handleAddRow} handleRemoveRow={handleRemoveRow} handleValidationChange={handleValidationChange} /> :
                         <></>
            }
        </>
    )
}

export default Associate_form;
