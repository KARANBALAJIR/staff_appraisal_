"use client"
import React, { useState } from 'react';

const TabN3 = () => {
  const initialTableData = [
    { 
      title: "1. Papers Published in SCI Indexed Journals 4 Point Per Paper (Max of 8 points) First author 100 % | 2nd author-50% | 3rd and above author - 25% of points for each publication",
      headers: [ "SL. NO", "JOURNAL NAME", "TITLE OF THE PAPER", "AUTHOR POSITION", "MONTH & YEAR OF PUBLICATION", "POINTS"],
      data: [
        { slno: 1, jname1: '', ptitle1: '', authorpos1: '', pubyear1: '',  points1: '' },
        { slno: 2, jname1: '', ptitle1: '', authorpos1: '', pubyear1: '',  points1: '' },
        { slno: 3, jname1: '', ptitle1: '', authorpos1: '', pubyear1: '',  points1: '' }
      ]
    },
    { 
      title: "2. Papers Published in SCOPUS/SCIE/WoS Indexed Journals 2 Point Per Paper (Max of 6 points) First author 100 % | 2nd author-50% | 3rd and above author - 25% of points for each publication",
      headers: ["SL. NO", "JOURNAL NAME", "TITLE OF THE PAPER", "AUTHOR POSITION", "MONTH & YEAR OF PUBLICATION", "POINTS"],
      data: [
        { slno: 1, jname2: '', ptitle2: '', authorpos2: '', pubyearr3: '' ,point2:''},
        { slno: 2, jname2: '', ptitle2: '', authorpos2: '', pubyearr3: '' ,point2:''},
        { slno: 3, jname2: '', ptitle2: '', authorpos2: '', pubyearr3: '' ,point2:''}
      ]
    },
    { 
      title: "3. Book Publication - 2 Point",
      headers: ["SL. NO", "TITLE OF THE BOOK", "PUBLISHER NAME & ISBN NO", "MONTH & YEAR OF PUBLICATION", "POINTS"],
      data: [
        { slno: 1, btitle3: '', pubinfo3: '', pubyear3: '',point9:'' },
        { slno: 2, btitle3: '', pubinfo3: '', pubyear3: '',point9:'' },
        { slno: 3, btitle3: '', pubinfo3: '', pubyear3: '',point9:'' }
      ]
    },
    { 
      title: " 4. Publication of Book Chapters  - 2 Points (Scopus/Wos indexed  only) ",
      headers: ["S.No.", "Title of the book chapter", "Scopus / WoS Journal name", "Month & Year of Publication" , "POINTS"],
      data: [
        { slno: 1, btitle4: '', scopusname4: '', pubyear4: '',point9:'' },
        { slno: 2, btitle4: '', scopusname4: '', pubyear4: '',point9:'' },
        { slno: 3, btitle4: '', scopusname4: '', pubyear4: '',point9:'' }
      ]
    },
    { 
      title: "5. Patents Filed - 1 point  | Patents published - 2 points | Patents Granted – 3 points",
      headers: ["S.No.", "Title of the patent", "Filed/Published/Granted", "Date", "Points"],
      data: [
        { slno: 1, pattitle5: '', fpg5: '', date5:'', points5: '' },
        { slno: 2, pattitle5: '', fpg5: '', date5:'', points5: '' },
        { slno: 3, pattitle5: '', fpg5: '', date5:'', points5: '' }
      ]
    },
    { 
        title: " 6. Increase in h Index – 3 Points (1 – 1 Point | 2 to 3 – 2 points | 4 & above -3 Points)",
        headers: ["SL. NO", "DATE", "H-INDEX", "POINTS"],
        data: [
          { slno: 1, date6: '',hindex6: '', point6:'' },
          { slno: 2, date6: '',hindex6: '', point6:'' },
          { slno: 3, date6: '',hindex6: '', point6: ''}
        ]
      },
      { 
        title: " 7. Increase in i10 Index – 3 Points (1 – 1 Point | 2 to 3 – 2 points | 4 & above -3 Points)",
        headers: ["SL. NO", "DATE", "I10-INDEX", "POINTS"],
        data: [
            { slno: 1, date7: '',hindex6: '', point7:'' },
            { slno: 2, date7: '',hindex6: '', point7:'' },
            { slno: 3, date7: '',hindex6: '', point7: ''}  
                        
          
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
      <h1 className="font-semibold text-3xl text-blueGray-700 text-center">RESEARCH-1</h1>
  
      <div className="w-full px-4 mt-24 rounded-lg border border-gray-200 shadow-md" style={{ width: '100%', boxShadow: '0px 12px 32px rgba(149, 157, 165, 0.3)' }}>
        <div className="relative flex flex-col min-w-0 break-words bg-white rounded-lg" style={{ width: '100%', borderRadius: '8rem' }}>
          {tableData.slice(0, 7).map((table, index) => renderTable(table, index))}
        </div>
      </div>
    </section>
  );
}
export default TabN3;
