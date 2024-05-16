import { useEffect, useState } from 'react';
import CommonComponent from './CommanComponent';
import Assistant_form_data from '../../../../data/Assistant_form_data.json'
import { pagination } from '@nextui-org/react';

interface Assistant_formProps {
    pagination: number;
}

const Assistant_form = (props : Assistant_formProps) => {

  const {pagination } = props;

  const [assistantData, setAssistantData] = useState<Record<string, any>>(Assistant_form_data);

    const handleInputChange = ( field: keyof typeof assistantData, tableIndex: number, rowIndex: number, name: string, value: number) => {
        const newData: typeof assistantData = { ...assistantData };
        newData[field][tableIndex].data[rowIndex][name] = value;
        setAssistantData(newData);
    };

    const handleValidationChange = (field: keyof typeof assistantData , tableIndex :number, name :  string, value : any) =>{
        const newData : typeof assistantData = { ...assistantData };
        newData[field][tableIndex]["validation"] = { 
            ...newData[field][tableIndex]["validation"],
            [name]: value
        }
        setAssistantData(newData);
        console.log(assistantData)
    }


    const handleAddRow = (field: keyof typeof assistantData,tableIndex: any) => {
        const newData : typeof assistantData = {...assistantData};
        const lastRow = (newData[field][tableIndex] as {data:any}).data[newData[field][tableIndex].data.length - 1];
        newData[field][tableIndex].data.push({ slno: lastRow.slno + 1, ...Object.keys(lastRow).reduce((acc, key) => ({ ...acc, [key]: '' }), {}) });
        setAssistantData(newData);
    };

    const handleRemoveRow = (field : keyof typeof assistantData ,tableIndex: any) => {
        const newData : typeof assistantData = {...assistantData};
        if (newData[field][tableIndex].data.length > 1) {
            newData[field][tableIndex].data.pop();
            setAssistantData(newData);
        }
    };

    const handleToggle = (field: keyof typeof assistantData, tableIndex: any) => {
        const table_Index = Number(tableIndex);
        const newData: typeof assistantData = { ...assistantData };
        const newFlag = !newData[field][table_Index].flag;
        newData[field][table_Index] = { ...newData[field][table_Index], flag: newFlag };
        setAssistantData(newData);
    };

  return (
    <>
      {
        (pagination === 1) ? <CommonComponent tableData={assistantData["academics"]} field={"academics"} handleInputChange={handleInputChange} handleToggle={handleToggle} handleAddRow={handleAddRow} handleRemoveRow={handleRemoveRow} handleValidationChange={handleValidationChange} /> : ""
      }
    </>
  )
}

export default Assistant_form