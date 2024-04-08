'use client'

interface SearchProps {
    searchTerm:string;
    setSearchTerm:Function;
}

const SearchBar = (props :SearchProps) =>{
    const {searchTerm, setSearchTerm} = props;
    return(
        <>
            <div className='flex relative w-64 bg-white rounded-xl'>
                <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="rounded-md w-full px-[5px] py-[5px] outline-0  focus:shadow-sm focus:border-2 focus:border-blue-500"
                />
                <button className="absolute right-[7px] top-[6px] flex items-center" onClick={()=>setSearchTerm('')}>
                    <span className="material-icons-sharp">
                       {searchTerm === '' ? 'search' : 'close'} 
                    </span>
                </button>

            </div>
        </>
    )
}

export default SearchBar;