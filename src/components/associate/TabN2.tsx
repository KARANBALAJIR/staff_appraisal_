"use client"
import React, { useState } from 'react';

const TabN2 = () => {
  const initialTableData = [
    { 
      title: "7. Faculty Development Programme/Seminar/Workshop/Conference organized  With Grant received from Govt/Private funding agencies (&lt;1 lakh -1 Points || 1-2 Lakhs -2 Points || &lt;2 -3 Points)",
      headers: ["SL. NO", "CATEGORY OF EVENT", "TITLE OF THE EVENT", "DATE OF SANCTION", "FUND RECEIVED", "GRANT SANCTIONED", "POINTS "],
      data: [
        { slno: 1, event7: '', title7: '', date7: '', funds7: '', grant7:'', points7: '' },
        { slno: 2, event7: '', title7: '', date7: '', funds7: '', grant7:'', points7: '' },
        { slno: 3, event7: '', title7: '', date7: '', funds7: '', grant7:'', points7: '' }
      ]
    },
    { 
      title: " 8. Involvement in High Level Competition/Innovative Project",
      headers: ["SL. NO", "COMPETITION NAME", "NAME OF THE PROJECT", "DATE OF PARTICIPATION", "PRIZE WON", "CASH AWARD (IF ANY)", "POINTS"],
      data: [
        { slno: 1, cname8: '', pname8: '', date8: '', prize8: '' , cash8:'' , point8:''},
        { slno: 2, cname8: '', pname8: '', date8: '', prize8: '' , cash8:'' , point8:''},
        { slno: 3, cname8: '', pname8: '', date8: '', prize8: '' , cash8:'' , point8:''}
      ]
    },
    { 
      title: "9. Faculty Development Programme attended (in Reputed institutions) Online Course completed (in AICTE/SWAYAM/UDEMY/COURSERA/Other reputed Organizations) FDP - Min 5 days and above with certificate – 2       Points   Online Courses (Min 12 hours with certificate) – 1 Points / Course",
      headers: ["SL. NO", "FROM", "TO", "FDP/ONLINE COURSE TITLE", "PROGRAM DATE", "ORGANIZED BY", "POINTS"],
      data: [
        { slno: 1, from9: '', to9: '', ftitle9: '', pdate9:'', org9:'',point9:'' },
        { slno: 2, from9: '', to9: '', ftitle9: '', pdate9:'', org9:'',point9:'' },
        { slno: 3, from9: '', to9: '', ftitle9: '', pdate9:'', org9:'',point9:'' }
      ]
    },
    { 
      title: "10. MoU Signed and Activity conducted with Industries - 2 Points",
      headers: ["SL. NO", "MOU SIGNED / ACTIVITY CONDUCTED", "NAME OF COMPANY", "DATE", "POINTS"],
      data: [
        { slno: 1, acdyear4: '', subname4: '', resource4: '', points4: '' },
        { slno: 2, acdyear4: '', subname4: '', resource4: '', points4: '' },
        { slno: 3, acdyear4: '', subname4: '', resource4: '', points4: '' }
      ]
    },
    { 
      title: "11. Tutor Ward Meeting: Min 6 meetings with all mentees collectively –1 Point Value addition brought about in students life – proof to be given – 2 Points",
      headers: ["SL. NO", "ACADEMIC YEAR", "EVENT NAME-SUBJECT", "RESOURCE PERSON/ ORGANIZATION", "POINTS"],
      data: [
        { slno: 1, acdyear11: '', event11: '', resorg11:'', points11: '' },
        { slno: 2, acdyear11: '', event11: '', resorg11:'', points11: '' },
        { slno: 3, acdyear11: '', event11: '', resorg11:'', points11: '' }
      ]
    },
    { 
        title: "12 .Responsibilities Held Academic coordinator/ Class advisor - 1 Points Coordinator for Department level functions – Each 1 Point",
        headers: ["SL. NO", "NAME OF THE RESPONSIBILITY HELD", "POINTS"],
        data: [
          { slno: 1, resname12: '',points12: '' },
          { slno: 2, resname12: '',points12: '' },
          { slno: 3, resname12: '',points12: '' }
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
      <h1 className="font-semibold text-3xl text-blueGray-700 text-center">ACADEMICS-2</h1>
  
      <div className="w-full px-4 mt-24 rounded-lg border border-gray-200 shadow-md" style={{ width: '100%', boxShadow: '0px 12px 32px rgba(149, 157, 165, 0.3)' }}>
        <div className="relative flex flex-col min-w-0 break-words bg-white rounded-lg" style={{ width: '100%', borderRadius: '8rem' }}>
          {tableData.slice(0, 6).map((table, index) => renderTable(table, index))}
        </div>
      </div>
    </section>
  );
}
export default TabN2;
