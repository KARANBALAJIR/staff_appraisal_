import { useEffect, useState } from 'react';
import CommonComponent from '@/app/(main)/(signin)/appraisal-form/CommanComponent';
import assoStru from '@/lib/associateStructure.json'

interface Associate_formProps {
    pagination: number;
}

const Associate_form = (props: Associate_formProps) => {
    const { pagination } = props;

    const [associateData, setAssociateData] = useState<Record<string, any>>(assoStru);
    useEffect(() => {
        console.log(associateData)
    }, [associateData])
    const handleInputChange = (field: keyof typeof associateData, tableIndex: number, rowIndex: number, name: string, value: number) => {
        const newData: typeof associateData = { ...associateData };
        newData[field][tableIndex].data[rowIndex][name] = value;
        setAssociateData(newData);
    };

    const handleValidationChange = (field: keyof typeof associateData, tableIndex: number, name: string, value: any) => {
        const newData: typeof associateData = { ...associateData };
        newData[field][tableIndex]["validation"] = {
            ...newData[field][tableIndex]["validation"],
            [name]: value
        }
        setAssociateData(newData);
        console.log(associateData)
    }

    const handleAddRow = (field: keyof typeof associateData, tableIndex: any) => {
        const newData: typeof associateData = { ...associateData };
        const lastRow = (newData[field][tableIndex] as { data: any }).data[newData[field][tableIndex].data.length - 1];
        newData[field][tableIndex].data.push({ slno: lastRow.slno + 1, ...Object.keys(lastRow).reduce((acc, key) => ({ ...acc, [key]: '' }), {}) });
        setAssociateData(newData);
    };

    const handleRemoveRow = (field: keyof typeof associateData, tableIndex: any) => {
        const newData: typeof associateData = { ...associateData };
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

    return (
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
