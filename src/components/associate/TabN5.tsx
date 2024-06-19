"use client"
import React, { useState } from 'react';

const TabN5 = () => {
  const initialTableData = [
    { 
      title: "1. Incharges for Accreditation Activities - NAAC,NBA, UGC, NIRF, AU etc., Department Coordinator – 3 Points File In charges – 2 Point",
      headers: [ "SL. NO", "INCHARGE OF THE ACTIVITY / FILE", "POINTS"],
      data: [
        { slno: 1, actfile1: '',   points1: '' },
        { slno: 2, actfile1: '',   points1: '' },
        { slno: 3, actfile1: '',   points1: '' }
      ]
    },
    { 
      title: "   2. Branding of Institution    1)	Publication in Newspaper	- 3	|| 2)	Social Service activity -2 || 3)	YouTube/Facebook/Instagram activities	-2",
      headers: ["SL. NO", "Name of the Activity/Achievement", "POINTS"],
      data: [
        { slno: 1, name2: '', point2:''},
        { slno: 2, name2: '', point2:''},
        { slno: 3, name2: '', point2:''}
      ]
    },
    { 
      title: "3. Membership in Professional Bodies – 2 Points IEEE/IET/ACM – 2 Points Others – 1 Points",
      headers: ["SL. NO",	"NAME OF THE PROFESSIONAL BODy"	,"VALIDITY STATUS",	"POINTS"],
      data: [
        { slno: 1, bdname3: '', validity3: '',  point3:'' },
        { slno: 2, bdname3: '', validity3: '',  point3:'' },
        { slno: 3, bdname3: '', validity3: '',  point3:'' }
      ]
    },
    { 
      title: "4. Co-curricular and Outreach Programme Acted as Resource Person in External Programmes – 2 Points Participated in External Events – 1 Points",
      headers: ["SL. NO", "DATE", "NAME OF THE PROGRAM", "ORGANIZED BY", "ACTED AS RESOURCE PERSON/ PARTICIPANT", "POINTS"],
      data: [
        { slno: 1,  date4: '', pgname4: '', orgby4: '', act4:'', point4:'' },
        { slno: 2,  date4: '', pgname4: '', orgby4: '', act4:'', point4:'' },
        { slno: 3,  date4: '', pgname4: '', orgby4: '', act4:'', point4:'' }
      ]
    },
    { 
      title: "5. Assistance in General Administration (Assessed by HOD/Principal)",
      headers: ["SL. NO", "Name of task", "POINTS"],
      data: [
        { slno: 1, task5: '', points5: '' },
        { slno: 2, task5: '', points5: '' },
        { slno: 3, task5: '', points5: '' }
      ]
    },

    { 
      title: "6",
      headers: ["SL. NO", "Name of task", "POINTS"],
      data: [
        { slno: 1, task5: '', points5: '' },
        { slno: 2, task5: '', points5: '' },
        { slno: 3, task5: '', points5: '' }
      ]
    },
    
      
    
   
  ];

  const [tableData, setTableData] = useState(initialTableData);
 

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
          {/* Render table headers */}
          <thead>
            <tr>
              {table.headers.map((header, index) => (
                <th key={index} className={`border px-2 sm:px-4 py-3 text-xs sm:text-sm uppercase font-semibold text-center ${index === 0 ? 'w-12 sm:w-16' : ''} ${index === table.headers.length - 1 ? 'w-16 sm:w-40' : ''}`}>
                  {header}
                </th>
              ))}
              {/* Add three more columns */}
              <th className="border px-2 sm:px-4 py-3 w-10 sm:w-14" colSpan="3">Total Points</th>
            </tr>
          </thead>
          {/* Render table body */}
          <tbody>
            {table.data.map((rowData, rowIndex) => (
              <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-white" : "bg-slate-100"}>
                {Object.keys(rowData).map((key, colIndex) => (
                  <td key={colIndex} className={`border px-2 sm:px-4 py-2 ${rowIndex % 2 === 0 ? "bg-white" : "bg-slate-100"}`}>
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
                {/* Add three more cells for the extra columns */}
                <td className="border px-2 sm:px-4 py-2 w-8 sm:w-12  ">
                  <input
                    type="text"
                    value={rowData['extraColumn1']}
                    onChange={e => handleInputChange(tableIndex, rowIndex, 'extraColumn1', e.target.value)}
                    className="bg-transparent w-full"
                  />
                </td>
                <td className="border px-2 sm:px-4 py-2 w-8 sm:w-12">
                  <input
                    type="text"
                    value={rowData['extraColumn2']}
                    onChange={e => handleInputChange(tableIndex, rowIndex, 'extraColumn2', e.target.value)}
                    className="bg-transparent w-full"
                  />
                </td>
                <td className="border px-2 sm:px-4 py-2 w-8 sm:w-12">
                  <input
                    type="text"
                    value={rowData['extraColumn3']}
                    onChange={e => handleInputChange(tableIndex, rowIndex, 'extraColumn3', e.target.value)}
                    className="bg-transparent w-full"
                  />
                </td>
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
    <section className="py-1 bg-blueGray-50 " style={{ width: '97%' }}>
      <h1 className="font-semibold text-3xl text-blueGray-700 text-center">RESEARCH-1</h1>
  
      <div className="w-full px-4 mt-24 rounded-lg border border-gray-200 shadow-md" style={{ width: '100%', boxShadow: '0px 12px 32px rgba(149, 157, 165, 0.3)' }}>
        <div className="relative flex flex-col min-w-0 break-words bg-white rounded-lg" style={{ width: '100%', borderRadius: '8rem' }}>
          {tableData.slice(0, 5).map((table, index) => renderTable(table, index))}
        </div>
      </div>
    </section>
  );
}
export default TabN5;
