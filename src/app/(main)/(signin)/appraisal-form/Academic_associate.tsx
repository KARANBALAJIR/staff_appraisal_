"use client"
import React, { useEffect, useState } from 'react';

interface associateAcademicsProps {
    tableData:Array<Object>;
    handleInputChange:Function;
    handleToggle:Function;
    handleAddRow:Function;
    handleRemoveRow:Function;
}

const TabN1 = (props : associateAcademicsProps) => {
    const { tableData, handleInputChange, handleToggle, handleAddRow, handleRemoveRow } = props;

    const [showProjectDetails, setShowProjectDetails] = useState(false);
    const [showPublicationDetails, setShowPublicationDetails] = useState(false);

    const [academicsData, setAcademicsData] = useState<Array<Object>>(tableData as Array<Object>);

    // const handleInputChangeAcademics = (tableIndex: number, rowIndex: number, name: string, value: any) => {
    //     const newData = [...academicsData];
    //     (newData[tableIndex] as {data:any}).data[rowIndex][name] = value;
    //     setAcademicsData(newData);
    // };

    // const handleAssoAddRow = (tableIndex: any) => {
    //     const newData = [...academicsData];
    //     const lastRow = (newData[tableIndex] as {data :any}).data[(newData[tableIndex] as {data:any}).data.length - 1];
    //     (newData[tableIndex] as {data:any}).data.push({ slno: lastRow.slno + 1, ...Object.keys(lastRow).reduce((acc, key) => ({ ...acc, [key]: '' }), {}) });
    //     setAcademicsData(newData);
    // };

    // const handleAssoRemoveRow = (tableIndex: any) => {
    //     const newData = [...academicsData];
    //     if ((newData[tableIndex] as {data:any}).data.length > 1) {
    //         (newData[tableIndex] as {data:any}).data.pop();
    //         setAcademicsData(newData);
    //     }
    // };

    // const handleToggleAcademics = (tableIndex: number) => {
    //     const newData = [...academicsData];
    //     const newFlag = !(newData[tableIndex] as {flag:number}).flag
    //     newData[tableIndex] = {...newData[tableIndex], flag: newFlag}
    //     setAcademicsData(newData);
    // }



    const renderTable = (table: object, tableIndex: number) => (
        <div className="border-1 shadow-md p-[16px] rounded-[12px] flex flex-col gap-[16px]">
            <div className="flex flex-row justify-between items-center pb-[5px] border-b-2 border-zinc-300">
                <div className="text-md font-normal hover:underline cursor-pointer">{(table as {title:string}).title}</div>
                <button onClick={() => {
                    handleToggle("academics",tableIndex)
                }} className="flex items-center"><span className="material-icons-sharp">{(table as {flag:number}).flag == 0 ? 'expand_more' : 'expand_less'}</span></button>

            </div>
            <div className={`${(table as { flag: number }).flag == 1 ? '' : 'hidden'}`}>
                <div key={tableIndex} className="Table pt-4">
                    <div className="overflow-x-auto">
                        <table className="items-center bg-transparent w-full border-collapse">

                            <thead>
                                <tr>
                                    {(table as {headers:any})?.headers?.map((header : string, index : number) => (
                                        <th key={index} className={`border px-2 sm:px-4 py-3 text-sm sm:text-base uppercase font-semibold text-center ${index === 0 ? 'w-12 sm:w-16' : ''} ${index === (table as {headers:any}).headers.length - 1 ? 'w-8 sm:w-16 dean-column' : ''} ${index === (table as {headers:any}).headers.length - 2 ? 'w-8 sm:w-16 hod-column' : ''} ${header === 'Total Points' ? 'w-16 sm:w-24 total-points-column' : ''}`}>
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>

                            <tbody>
                                {(table as {data:any})?.data?.map((rowData : any, rowIndex : number) => (
                                    <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-white" : "bg-slate-100"}>
                                        {Object.keys(rowData).map((key, colIndex) => (
                                            <td key={colIndex} className={`border px-2 py-2 ${rowIndex % 2 === 0 ? "bg-white" : "bg-slate-100"} ${colIndex === Object.keys(rowData).length - 1 ? 'w-8 sm:w-16 dean-column' : ''} ${colIndex === Object.keys(rowData).length - 2 ? 'w-8 sm:w-16 hod-column' : ''} ${colIndex === Object.keys(rowData).length - 3 ? 'w-16 sm:w-24 total-points-column' : ''} whitespace-normal`}>
                                                {key === 'slno' ? (rowIndex + 1) : (
                                                    <input
                                                        type="text"
                                                        value={rowData[key]}
                                                        onChange={e => {
                                                                handleInputChange("academics",tableIndex, rowIndex, key, e.target.value)
                                                            }
                                                        }
                                                        className="bg-transparent w-full"
                                                    />
                                                )}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className='grid grid-cols-3 gap-[16px] p-[12px]'>
                            <div className='flex flex-row gap-[20px]'>
                                <label className=''>Proof Required</label>
                                <input type="text" aria-label="Proof Required"  />
                            </div>
                            <div className='flex flex-row gap-[20px]'>
                                <label>ERP Proof</label>
                                <input type="text" aria-label="ERP Proof" />
                           </div>
                            <div className='flex flex-row gap-[20px]'>            
                                <label>Max Point</label>
                                <input type="text" aria-label="Max Point" />
                           </div>
                            <div className='flex flex-row gap-[20px]'>        
                                <label>Self Evaluation</label>
                                <input type="text" aria-label="Self Evaluation" />
                           </div>
                            <div className='flex flex-row gap-[20px]'>
                                <label>HR Evaluation</label>
                                <input type="text" aria-label="HR Evaluation" />
                           </div>
                            <div className='flex flex-row gap-[20px]'>           
                                <label>HR Comment</label>
                                <input type="text" aria-label="HR Comment" />
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full px-2 sm:px-4 max-w-full flex-grow flex-1 text-right pt-4">
                        <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs sm:text-sm font-bold uppercase px-2 sm:px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 sm:mr-2 sm:mb-2 ease-linear transition-all duration-150" 
                        onClick={() => {
                                handleAddRow("academics",tableIndex)
                            }} type="button">Add Row</button>
                        <button className="bg-red-500 text-white active:bg-red-600 text-xs sm:text-sm font-bold uppercase px-2 sm:px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 sm:mr-2 sm:mb-2 ease-linear transition-all duration-150" 
                        onClick={() => {
                            handleRemoveRow("academics", tableIndex)
                            }} type="button">Remove Row</button>
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
                    {academicsData.map((table, index) => renderTable(table, index))}
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