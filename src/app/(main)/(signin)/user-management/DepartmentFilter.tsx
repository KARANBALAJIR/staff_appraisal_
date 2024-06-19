interface DepartmentFilterType{
    departmentFilter:string;
    setDepartmentFilter: React.Dispatch<React.SetStateAction<string>>;
}

const DepartmentFilter = (props : DepartmentFilterType) =>{
    const {departmentFilter,setDepartmentFilter} = props;
    return(
        <>
            <div className="">
                <select
                    value={departmentFilter}
                    onChange={(e) => setDepartmentFilter(e.target.value)}
                    className="block w-full h-full border border-gray-300 rounded px-2 py-1"
                >
                    <option value="">All Departments</option>
                    <option value="NONE">None</option>
                    <option value="CSE">CSE</option>
                    <option value="ECE">ECE</option>
                    <option value="EEE">EEE</option>
                    <option value="IT">IT</option>
                    <option value="MECH">MECH</option>
                    <option value="CCE">CCE</option>
                    <option value="AIML">AIML</option>
                    <option value="AIDS">AIDS</option>
                </select>
            </div>
        </>
    )
}

export default DepartmentFilter;