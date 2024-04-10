interface RoleFilterType {
    roleFilter: string;
    setRoleFilter: React.Dispatch<React.SetStateAction<string>>;
}

const RoleFilter = (props: RoleFilterType) => {
    const { roleFilter, setRoleFilter } = props;
    return (
        <>
            <div className="">
                <select
                    value={roleFilter}
                    onChange={(e) => setRoleFilter(e.target.value)}
                    className="block w-full h-full border border-gray-300 rounded px-2 py-1"
                >
                    <option value="">All Roles</option>
                    <option value="ANONYMOUS">Anonymous</option>
                    <option value="ADMIN">Admin</option>
                    <option value="HOD">HOD</option>
                    <option value="Staff">Staff</option>
                </select>
            </div>
        </>
    )
}

export default RoleFilter;



