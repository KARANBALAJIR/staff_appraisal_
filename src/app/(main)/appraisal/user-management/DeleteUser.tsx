import React from 'react'

interface deleteUserProps {
    loading: boolean;
    handleDeleteUser: Function;
    setDeleteUserPopUP: Function;
    userData: {
        show: boolean;
        username: String;
        email: String;
    }
}

const DeleteUser = (props: deleteUserProps) => {

    const {userData, loading, setDeleteUserPopUP, handleDeleteUser} = props

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
            <div className='text-center my-4 text-xl'>
                {`Do You want to delete this user `+' '}
                <span className=' font-medium font-mono'>
                    `{userData.username}`
                </span>
            </div>
            <div className="flex justify-center">
                <button onClick={()=>handleDeleteUser(userData)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded-md mr-2 w-24">
                    {
                        (loading === false)? 'Delete': <i className="fa fa-circle-o-notch fa-spin"></i>
                    }
                </button>
                <button onClick={() => setDeleteUserPopUP({
                    show: false,
                    username: ''
                })} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded-md">Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default DeleteUser