"use client"
import React, { useState } from 'react';

const TabN4 = () => {
  const initialTableData = [
    { 
      title: "8. Increase in Citations – 2 Points (Less than 50 – 1 Point | Above 50 - 2 Points)",
      headers: [ "SL. NO", "DATE", "INCREASE IN CITATION", "POINTS"],
      data: [
        { slno: 1, date8: '', icitation8: '',  points8: '' },
        { slno: 2, date8: '', icitation8: '',  points8: '' },
        { slno: 3, date8: '', icitation8: '',  points8: '' }
      ]
    },
    { 
      title: "9. Funded Research Projects – 5 Points (Projects Sanctioned during appraisal period will only be considered) Minimum 5Lakhs (for PI – 5 Points | for Co-PI–2 Points) (Project sanctioned under seed money: 1 Point. Project Completed: 2 Points)",
      headers: ["SL. NO", "TITLE OF THE RESEARCH PROJECT", "FUNDING AGENCY", "DATE OF SANCTION", "GRANT SANCTIONED (RS.)", "POINTS"],
      data: [
        { slno: 1, rptitle9: '', fagency9: '', date9: '', grant:'' ,point9:''},
        { slno: 2, rptitle9: '', fagency9: '', date9: '', grant:'' ,point9:''},
        { slno: 3, rptitle9: '', fagency9: '', date9: '', grant:'' ,point9:''}
      ]
    },
    { 
      title: "10. Consultancy work - 4 Points (upto Rs.50000- 1 Point | between Rs. 50000 and 1 Lakh – 2 Points | >Rs. 1 Lakh - 4 Points)",
      headers: ["SL. NO", "TITLE OF THE CONSULTANCY WORK", "INDUSTRY NAME", "DATE OF COMPLETION", "FUND GENERATED (RS.)", "POINTS"],
      data: [
        { slno: 1, ctitle10: '', iname10: '', cdate10: '', fg10:'', point10:'' },
        { slno: 2, ctitle10: '', iname10: '', cdate10: '', fg10:'', point10:'' },
        { slno: 3, ctitle10: '', iname10: '', cdate10: '', fg10:'', point10:'' }
      ]
    },
    // { 
    //   title: "11. Number of Research Scholars Guiding/Completed during appraisal period (Guiding – 1 Point | New Scholar Registered - 2 point | Completed - 3 Points) per Scholar",
    //   headers: ["SL. NO", "RESEARCH SCHOLAR NAME", "REGISTRATION NO", "DATE OF REGISTRATION", "DATE OF COMPLETION", "POINTS"],
    //   data: [
    //     { slno: 1,  rsname11: '', regno11: '', regdate11: '', cdate11:'', point11:'' },
    //     { slno: 2,  rsname11: '', regno11: '', regdate11: '', cdate11:'', point11:'' },
    //     { slno: 3,  rsname11: '', regno11: '', regdate11: '', cdate11:'', point11:'' }
    //   ]
    // },
    { 
      title: "11. Collaboration with foreign Universities (Applying for joint funded project/ Joint Publication - 2 Points)",
      headers: ["SL. NO", "JOINT PROJECT / PUBLICATION", "NAME OF THE PROFESSOR & FOREIGN UNIVERSITY", "DATE OF PUBLICATION / PROJECT", "POINTS"],
      data: [
        { slno: 1, jpname12: '', pfuname12: '', date12:'', points12: '' },
        { slno: 2, jpname12: '', pfuname12: '', date12:'', points12: '' },
        { slno: 3, jpname12: '', pfuname12: '', date12:'', points12: '' }
      ]
    },
    { 
        title: "12. Establishment of a Laboratory in collaboration with an Industry / Funding agency – 2 Points",
        headers: ["SL. NO", "NAME OF THE LAB ESTABLISHED", "FUNDING AGENCY / INDUSTRY", "DATE OF SANCTION", "AMOUNT SANCTIONED", "POINTS"],
        data: [
          { slno: 1, labname13: '',fangeny12: '', date13:'', samount:'' , point6:'' },
          { slno: 2, labname13: '',fangeny12: '', date13:'', samount:'' , point6:'' },
          { slno: 3, labname13: '',fangeny12: '', date13:'', samount:'' , point6: ''}
        ]
      },
      
    
    // Add more tables as needed
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
      <h1 className="font-semibold text-3xl text-blueGray-700 text-center">assistant RESEARCH-2</h1>
  
      <div className="w-full px-4 mt-24 rounded-lg border border-gray-200 shadow-md" style={{ width: '100%', boxShadow: '0px 12px 32px rgba(149, 157, 165, 0.3)' }}>
        <div className="relative flex flex-col min-w-0 break-words bg-white rounded-lg" style={{ width: '100%', borderRadius: '8rem' }}>
          {tableData.slice(0, 7).map((table, index) => renderTable(table, index))}
        </div>
      </div>
    </section>
  );
}
export default TabN4;
