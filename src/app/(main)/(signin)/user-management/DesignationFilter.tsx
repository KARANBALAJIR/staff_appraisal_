interface DesignationFilterType {
    designationFilter: string;
    setDesignationFilter: React.Dispatch<React.SetStateAction<string>>;
}

const DesignationFilter = (props: DesignationFilterType) => {
    const { designationFilter, setDesignationFilter } = props;
    return (
        <>
            <div className="">
                <select
                    value={designationFilter}   
                    onChange={(e) => setDesignationFilter(e.target.value)}
                    className="block w-full h-full border border-gray-300 rounded px-2 py-1"
                >
                    <option value="">All Designations</option>
                    <option value="NONE">None</option>
                    <option value="ASSISTANT_PROFESSOR">Assistant Professor</option>
                    <option value="ASSOCIATE_PROFESSOR">Associate Professor</option>
                    <option value="PROFESSOR">Professor</option>
                </select>
            </div>
        </>
    )
}

export default DesignationFilter;



