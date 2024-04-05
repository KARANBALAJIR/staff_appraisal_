'use client'

interface SearchProps {
    searchTerm:string;
    setSearchTerm:Function;
}

const SearchBar = (props :SearchProps) =>{
    const {searchTerm, setSearchTerm} = props;
    return(
        <>
            <div className='flex relative'>
                <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="rounded-md w-full px-2 py-2 outline-0 shadow-md focus:shadow-sm focus:border-2 focus:border-blue-500"
                />
                <button className="absolute right-[16px] top-[8px] flex items-center" onClick={()=>setSearchTerm('')}>
                    <span className="material-icons-sharp">
                       {searchTerm === '' ? 'search' : 'close'} 
                    </span>
                </button>

            </div>
        </>
    )
}

export default SearchBar;