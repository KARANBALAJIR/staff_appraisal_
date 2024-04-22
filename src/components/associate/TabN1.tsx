"use client"
import React, { useState } from 'react';

const TabN1 = () => {
  const initialTableData = [
    { 
      title: "1. Teaching Assignment (No of credits per subject taught) 3 Credit-1 Point, 4 Credit-2 Point || Max 4 Points (Subject Handled in Even Sem 2021 -2022)",
      headers: ["Sl. No", "Semester", "Course Title", "Number of Credit", "Feedback%", "Points","Total Points","hod","Dean"],
      data: [
        { slno: 1, semester: '', courseTitle: '', numOfCredit: '', feedback: '', points: '', totalpoints1:'', h1:'',d1:'' },
        { slno: 2, semester: '', courseTitle: '', numOfCredit: '', feedback: '', points: '', totalpoints1:'', h1:'',d1:'' },
        { slno: 3, semester: '', courseTitle: '', numOfCredit: '', feedback: '', points: '', totalpoints1:'', h1:'',d1:'' }
      ]
    },
    { 
      title: "2. Pass Percentage (Average) 100% - Points || 90-99% - 2 Points || 75-89% - 1 Point",
      headers: ["Sl. No", "Academic Year", "Name of the Subject", "Pass %", "Points","Total Points","hod","Dean"],
      data: [
        { slno: 1, acdyear: '', subname: '', passpercentage: '', points: '' , totalpoints2:'', h2:'',d2:''},
        { slno: 2, acdyear: '', subname: '', passpercentage: '', points: '',  totalpoints2:'' , h2:'',d2:''},
        { slno: 3, acdyear: '', subname: '', passpercentage: '', points: '',  totalpoints2:'' , h2:'',d2:''}
      ]
    },
    { 
      title: "3. Student Feedback (Average) 100% - Points || 90-99% - 2 Points || 75-89% - 1 Point",
      headers: [" Sl. No", " Academic Year", "Name of the Subject" , "Pass %" , "Points","Total Points","hod","Dean"],
      data: [
        { slno: 1, acdyear2: '', subname2: '', passpercentage2: '', points2:'', totalpoints3:'', h3:'',d3:'' },
        { slno: 2, acdyear2: '', subname2: '', passpercentage2: '', points2:'', totalpoints3:'', h3:'',d3:'' },
        { slno: 3, acdyear2: '', subname2: '', passpercentage2: '', points2:'', totalpoints3:'', h3:'',d3:'' }
      ]
    },
    { 
      title: "4. Teaching Resource Creation Innovation in Classroom Teaching / Lab with proof – 2 Points",
      headers: [" Sl. No", " Academic Year", "point" , "ressource %" , "Points","Total Points","hod","Dean"],
      data: [
        { slno: 1, acdyear4: '', subname4: '', resource4: '', points4: '', totalpoints4:'', h4:'',d4:''},
        { slno: 2, acdyear4: '', subname4: '', resource4: '', points4: '', totalpoints4:'', h4:'',d4:'' },
        { slno: 3, acdyear4: '', subname4: '', resource4: '', points4: '', totalpoints4:'', h4:'',d4:'' }
      ]
    },
    { 
      title: "5. Organizing Guest Lectures/Visiting Faculty for respective subjects with National and International Level Experts – 2 Points",
      headers: [" Sl. No", " Academic Year", "point" , "ressource %" , "Points","Total Points","hod","Dean"],
      data: [
        { slno: 1, acdyear5: '', event5: '', date5: '', points5: '', totalpoints5:'', h5:'',d5:'' },
        { slno: 2, acdyear5: '', event5: '', date5: '', points5: '', totalpoints5:'', h5:'',d5:'' },
        { slno: 3, acdyear5: '', event5: '', date5: '', points5: '', totalpoints5:'', h5:'',d5:'' }
      ]
    },
    { 
      title: "Project Details",
      headers: ["Sl. No", "Academic Year", "Event name-Subject", "Resource person/organization", "Points","Total Points","hod","Dean"],
      data: [
        { slno: 1, acdyear51: '', event51: '', date51: '', points51: '', totalpoints6:'', h5:'',d6:'' },
        { slno: 2, acdyear51: '', event51: '', date51: '', points51: '', totalpoints6:'', h5:'',d6:'' },
        { slno: 3, acdyear51: '', event51: '', date51: '', points51: '', totalpoints6:'', h5:'',d6:'' }
      ]
    },
    { 
      title: "Publication Details",
      headers: ["Sl. No", "Academic Year", "Event name-Subject", "Resource person/organization", "Points","Total Points","hod","Dean"],
      data: [
        { slno: 1, acdyear52: '', event52: '', res52: '', points52: '', totalpoints7:'', h7:'',d7:'' },
        { slno: 2, acdyear52: '', event52: '', res52: '', points52: '', totalpoints7:'', h7:'',d7:'' },
        { slno: 3, acdyear52: '', event52: '', res52: '', points52: '', totalpoints7:'', h7:'',d7:'' }
      ]
    },
    // Add more tables as needed
  ];

  const [tableData, setTableData] = useState(initialTableData);
  const [showProjectDetails, setShowProjectDetails] = useState(false);
  const [showPublicationDetails, setShowPublicationDetails] = useState(false);

  const handleInputChange = (tableIndex, rowIndex, name, value) => {
    const newData = [...tableData];
    newData[tableIndex].data[rowIndex][name] = value;
    setTableData(newData);
  };

  const handleAddRow = (tableIndex) => {
    const newData = [...tableData];
    const lastRow = newData[tableIndex].data[newData[tableIndex].data.length - 1];
    newData[tableIndex].data.push({ slno: lastRow.slno + 1, ...Object.keys(lastRow).reduce((acc, key) => ({ ...acc, [key]: '' }), {}) });
    setTableData(newData);
  };

  const handleRemoveRow = (tableIndex) => {
    const newData = [...tableData];
    if (newData[tableIndex].data.length > 1) {
      newData[tableIndex].data.pop();
      setTableData(newData);
    }
  };

  const renderTable = (table, tableIndex) => (
    <div key={tableIndex} className="Table pt-4">
      <h3 className="font-semibold text-base text-blueGray-700">{table.title}</h3>
      <div className="overflow-x-auto">
        <table className="items-center bg-transparent w-full border-collapse">
          
          <thead>
            <tr>
              {table.headers.map((header, index) => (
                <th key={index} className={`border px-2 sm:px-4 py-3 text-sm sm:text-base uppercase font-semibold text-center ${index === 0 ? 'w-12 sm:w-16' : ''} ${index === table.headers.length - 1 ? 'w-8 sm:w-16 dean-column' : ''} ${index === table.headers.length - 2 ? 'w-8 sm:w-16 hod-column' : ''} ${header === 'Total Points' ? 'w-16 sm:w-24 total-points-column' : ''}`}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          
          <tbody>
            {table.data.map((rowData, rowIndex) => (
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
  );

  return (
    <section className="py-1 bg-blueGray-50">
      <h1 className="font-semibold text-3xl text-blueGray-700 text-center">ACADEMICS-1</h1>

      <div className="w-full px-4 mt-24 rounded-lg border border-gray-200 shadow-md" style={{ width: '100%', boxShadow: '0px 12px 32px rgba(149, 157, 165, 0.3)' }}>
        <div className="relative flex flex-col min-w-0 break-words bg-white rounded-lg" style={{ borderRadius: '8rem' }}>
          {tableData.slice(0, 5).map((table, index) => renderTable(table, index))}
          <div className="AdditionalTables pt-4">
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
          </div>
          {showProjectDetails && renderTable(tableData[5], 5)}
          {showPublicationDetails && renderTable(tableData[6], 6)}
        </div>
      </div>
    </section>
  );
};

export default TabN1;