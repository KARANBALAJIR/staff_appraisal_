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
                    <option value="Assistant Professor">Assistant Professor</option>
                    <option value="Associate Professor">Associate Professor</option>
                    <option value="Professor">Professor</option>
                </select>
            </div>
        </>
    )
}

export default DesignationFilter;



