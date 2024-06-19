"use client"
import React, { useState } from 'react';

const TabN1 = () => {
  const associateAcademics = [
    { 
      title: "1. Teaching Assignment (No of credits per subject taught) 3 Credit-1 Point, 4 Credit-2 Point || Max 4 Points (Subject Handled in Even Sem 2021 -2022)",
      headers: ["Sl. No", "Semester", "Course Title", "Number of Credit",  "Points", "Feedback%" ],
      data: [
        { slno: 1, semester: '', courseTitle: '', numOfCredit: '', points: '', feedback: '' },
        { slno: 2, semester: '', courseTitle: '', numOfCredit: '', points: '', feedback: '' },
        { slno: 3, semester: '', courseTitle: '', numOfCredit: '', points: '', feedback: '' }
      ],
      proofRequired:'',
      erpProof:'',
      maxPoint:4,
      selfEvaluation:'',
      hrEvaluation:'',
      hrComment:'',
      totalScore:0,
      flag:false,
    },
    { 
      title: "2. Pass Percentage (Average) 100% - Points || 90-99% - 2 Points || 75-89% - 1 Point",
      headers: ["Sl. No", "Academic Year", "Name of the Subject", "Pass %"],
      data: [
        { slno: 1, acdyear: '', subname: '', passpercentage: '',},
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
      flag:false,
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
      headers: ["Sl. No", "Academic Year", "Event name-Subject", "Resource person/organization", "Points","Total Points","hod","Dean"],
      data: [
        { slno: 1, acdyear51: '', event51: '', date51: '', points51: '', totalpoints6:'', h5:'',d6:'' },
        { slno: 2, acdyear51: '', event51: '', date51: '', points51: '', totalpoints6:'', h5:'',d6:'' },
        { slno: 3, acdyear51: '', event51: '', date51: '', points51: '', totalpoints6:'', h5:'',d6:'' }
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
        { slno: 1, catofevent: '', titleofeve: '', dateofsanc: '', fundreceived: '' , grantsanc: ''},
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
        { slno: 1, mousigned: '', nameofcom: '', date: ''},
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
    // Add more tables as needed
  ];

  

  const [tableData, setTableData] = useState(associateAcademics);
  const [showProjectDetails, setShowProjectDetails] = useState(false);
  const [showPublicationDetails, setShowPublicationDetails] = useState(false);

  const handleInputChange = (tableIndex :any, rowIndex : any, name : any, value : any) => {
    const newData = [...tableData];
    newData[tableIndex].data[rowIndex][name] = value;
    setTableData(newData);
  };

  const handleAddRow = (tableIndex : any) => {
    const newData = [...tableData];
    const lastRow = newData[tableIndex].data[newData[tableIndex].data.length - 1];
    newData[tableIndex].data.push({ slno: lastRow.slno + 1, ...Object.keys(lastRow).reduce((acc, key) => ({ ...acc, [key]: '' }), {}) });
    setTableData(newData);
  };

  const handleRemoveRow = (tableIndex : any) => {
    const newData = [...tableData];
    if (newData[tableIndex].data.length > 1) {
      newData[tableIndex].data.pop();
      setTableData(newData);
    }
  };

  const handleToggle = (tableIndex : any) => {
    const newData = [...tableData];
    newData[tableIndex].flag = !newData[tableIndex].flag;
    setTableData(newData);
  }

  const renderTable = (table : any, tableIndex : any) => (
    <div className="border-1 shadow-md p-[16px] rounded-[12px] flex flex-col gap-[16px]">
      <div className="flex flex-row justify-between items-center pb-[5px] border-b-2 border-zinc-300">
        <div className="text-md font-normal hover:underline cursor-pointer">{table.title}</div>
        <button onClick={()=>handleToggle(tableIndex)} className="flex items-center"><span className="material-icons-sharp">{table.flag == 0 ? 'expand_more' : 'expand_less'}</span></button>

      </div>
      <div className={`${table.flag == 1 ? '' : 'hidden'}`}>
        <div key={tableIndex} className="Table pt-4">
          <div className="overflow-x-auto">
            <table className="items-center bg-transparent w-full border-collapse">

              <thead>
                <tr>
                  {table?.headers?.map((header, index) => (
                    <th key={index} className={`border px-2 sm:px-4 py-3 text-sm sm:text-base uppercase font-semibold text-center ${index === 0 ? 'w-12 sm:w-16' : ''} ${index === table.headers.length - 1 ? 'w-8 sm:w-16 dean-column' : ''} ${index === table.headers.length - 2 ? 'w-8 sm:w-16 hod-column' : ''} ${header === 'Total Points' ? 'w-16 sm:w-24 total-points-column' : ''}`}>
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {table?.data?.map((rowData, rowIndex) => (
                  <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-white" : "bg-slate-100"}>
                    {Object.keys(rowData).map((key, colIndex) => (
                      <td key={colIndex} className={`border px-2 py-2 ${rowIndex % 2 === 0 ? "bg-white" : "bg-slate-100"} ${colIndex === Object.keys(rowData).length - 1 ? 'w-8 sm:w-16 dean-column' : ''} ${colIndex === Object.keys(rowData).length - 2 ? 'w-8 sm:w-16 hod-column' : ''} ${colIndex === Object.keys(rowData).length - 3 ? 'w-16 sm:w-24 total-points-column' : ''} whitespace-normal`}>
                        {key === 'slno' ? (rowIndex + 1) : (
                          <input
                            type="text"
                            value={rowData[key]}
                            onChange={e => handleInputChange(tableIndex, rowIndex, key, e.target.value)}
                            className="bg-transparent w-full"
                          />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="relative w-full px-2 sm:px-4 max-w-full flex-grow flex-1 text-right pt-4">
            <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs sm:text-sm font-bold uppercase px-2 sm:px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 sm:mr-2 sm:mb-2 ease-linear transition-all duration-150" onClick={() => handleAddRow(tableIndex)} type="button">Add Row</button>
            <button className="bg-red-500 text-white active:bg-red-600 text-xs sm:text-sm font-bold uppercase px-2 sm:px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 sm:mr-2 sm:mb-2 ease-linear transition-all duration-150" onClick={() => handleRemoveRow(tableIndex)} type="button">Remove Row</button>
          </div>
        </div>
      </div>
    </div>
    
  );

  return (
    <section className="py-[10px] bg-blueGray-50">
      <h1 className="font-semibold text-3xl text-blueGray-700 text-center">ACADEMICS</h1>
      <div className="w-full px-4 mt-[20px] rounded-lg border border-gray-200  py-[20px]">
        <div className="relative flex flex-col gap-[16px] min-w-0 break-words rounded-lg" style={{ borderRadius: '8rem' }}>
          {tableData.map((table, index) => renderTable(table, index))}
          {/* <div className="AdditionalTables pt-4">
            <h3 className="font-semibold text-base text-blueGray-700 pb-4">6. Student Projects Guided PG Project / UG Project Guidance - 2 Points Projects converted to Scopus Publication - 3 Points (Minimum 1 No. expected) Mini Project Guidance - 1 Point</h3>
            <label className='text-sm uppercase font-semibold pl-4'>
              <input
                type="checkbox"
                onChange={(e) => {
                  setShowProjectDetails(e.target.checked);
                }}
                checked={showProjectDetails}
              />
              &nbsp;&nbsp;Project Details
            </label>
            <label className='text-sm uppercase font-semibold pl-4'>
              <input
                type="checkbox"
                onChange={(e) => {
                  setShowPublicationDetails(e.target.checked);
                }}
                checked={showPublicationDetails}
              />
              &nbsp;&nbsp;Publication Details
            </label>
          </div> */}
          {showProjectDetails && renderTable(tableData[5], 5)}
          {showPublicationDetails && renderTable(tableData[6], 6)}
        </div>
      </div>
    </section>
  );
};

export default TabN1;