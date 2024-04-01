import React from 'react'
import AdminNavBar from '@/app/(main)/(signin)/admin-mangement/adminNavbar'
import '@/components/Styles/LeftNav.css'
const AdminLayout = ({children}: Readonly<{children:React.ReactNode}>) => {
  return (

    <>  
      <div className="flex justify-center">
        <AdminNavBar />
        <div className="w-[80rem] h-[90vh] flex justify-center items-center">
          {children}
        </div>
      </div>
    </>
  )
}

export default AdminLayout;