"use client"
import React, { useEffect, useState } from 'react';

interface formComponentProps {
    tableData: Array<Object>;
    handleInputChange: Function;
    handleToggle: Function;
    handleAddRow: Function;
    handleRemoveRow: Function;
    field:String;
    handleValidationChange:Function;
}

const CommonComponent = (props: formComponentProps) => {
    const { tableData, handleInputChange, handleToggle, handleAddRow, handleRemoveRow , field , handleValidationChange } = props;

    const [formData, setFormData] = useState<Array<Object>>(tableData as Array<Object>);
    const [showProjectDetails, setShowProjectDetails] = useState(false);
    const [showPublicationDetails, setShowPublicationDetails] = useState(false);

    useEffect(()=>{
        setFormData(tableData)
    },[tableData])

    const renderTable = (table: any, tableIndex: number) => (
        <div className="border-1 shadow-sm p-[16px] rounded-[12px] duration-200 ease-in hover:shadow-none flex flex-col gap-[16px] bg-white">
            <div className="flex flex-row justify-between items-center">
                <div className="text-md font-normal cursor-pointer">{table.title}</div>
                <button onClick={() => {
                    handleToggle(field, tableIndex)
                    // handleResToggle(tableIndex)
                }} className="flex items-center"><span className="material-icons-sharp">{table.flag == 0 ? 'expand_more' : 'expand_less'}</span></button>
            </div>
            <div className={`${table.flag == 1 ? '' : 'hidden'}`}>
                <div key={tableIndex} className="Table pt-4">
                    <div className="overflow-x-auto">
                        <table className="items-center bg-transparent w-full border-collapse">

                            <thead>
                                <tr>
                                    {(table as { headers: any })?.headers?.map((header: any, index: number) => (
                                        <th key={index} className={`border px-2 sm:px-4 py-3 text-sm sm:text-base uppercase font-semibold text-center ${index === 0 ? 'w-12 sm:w-16' : ''} ${index === table.headers.length - 1 ? 'w-8 sm:w-16 dean-column' : ''} ${index === table.headers.length - 2 ? 'w-8 sm:w-16 hod-column' : ''} ${header === 'Total Points' ? 'w-16 sm:w-24 total-points-column' : ''}`}>
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>

                            <tbody>
                                {(table as { data: any })?.data?.map((rowData: any, rowIndex: number) => (
                                    <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-white" : "bg-slate-100"}>
                                        {Object.keys(rowData).map((key, colIndex) => (
                                            <td key={colIndex} className={`border px-2 py-2 ${rowIndex % 2 === 0 ? "bg-white" : "bg-slate-100"} ${colIndex === Object.keys(rowData).length - 1 ? 'w-8 sm:w-16 dean-column' : ''} ${colIndex === Object.keys(rowData).length - 2 ? 'w-8 sm:w-16 hod-column' : ''} ${colIndex === Object.keys(rowData).length - 3 ? 'w-16 sm:w-24 total-points-column' : ''} whitespace-normal`}>
                                                {key === 'slno' ? (rowIndex + 1) : (
                                                    <input
                                                        type="text"
                                                        value={rowData[key]}
                                                        onChange={e => {
                                                            handleInputChange(field, tableIndex, rowIndex, key, e.target.value)
                                                            // handleResInputChange(tableIndex,rowIndex,key, e.target.value)
                                                        }}
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
                        {

                                    table.fields.map((field: any, index: number) => (
                                        <div className='flex flex-row gap-[20px]' key={index}>
                                            <label>{field}</label>
                                            <input type="text" name={field} value={table['validation'][field]} onChange={(e)=>handleValidationChange("academics",tableIndex,field,e.target.value)} aria-label={field} />
                                        </div>
                                    ))
                                   
                        }
                        </div>
                    </div>
                    <div className={`${table.flag == 1 ? '' : 'hidden'}`}>
                        <div key={tableIndex} className="Table pt-4">
                            <div className="overflow-x-auto">
                                
                                {/* <div className='grid grid-cols-3 gap-[16px] p-[12px]'>
                                {

                                            table.fields.map((field: any, index: number) => (
                                                <div className='flex flex-row gap-[20px]' key={index}>
                                                    <label>{field}</label>
                                                    <input type="text" name={field} value={table['validation'][field]} onChange={(e)=>handleValidationChange("academics",tableIndex,field,e.target.value)} aria-label={field} />
                                                </div>
                                            ))
                                        
                                }
                                </div> */}
                            
                                    
                                    
                            </div>
                            <div className="relative w-full px-2 sm:px-4 max-w-full flex-grow flex-1 text-right pt-4">
                                <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs sm:text-sm font-bold uppercase px-2 sm:px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 sm:mr-2 sm:mb-2 ease-linear transition-all duration-150"
                                    onClick={() => {
                                        handleAddRow(field, tableIndex)
                                    }} type="button">Add Row</button>
                                <button className="bg-red-500 text-white active:bg-red-600 text-xs sm:text-sm font-bold uppercase px-2 sm:px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 sm:mr-2 sm:mb-2 ease-linear transition-all duration-150"
                                    onClick={() => {
                                        handleRemoveRow(field, tableIndex)
                                    }} type="button">Remove Row</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <section className="bg-blueGray-50">
            {/* <h1 className="font-semibold text-3xl text-blueGray-700 text-center">{field.toLocaleUpperCase()}</h1> */}
            <div className="w-full">
                <div className="relative flex flex-col gap-[16px] break-words" >
                    {(formData)?formData.map((table, index) => renderTable(table, index)):"Loading"}
                    {/* {showProjectDetails && renderTable(tableData[5], 5)}
                    {showPublicationDetails && renderTable(tableData[6], 6)} */}
                </div>
            </div>
        </section>
    );
};

export default CommonComponent;