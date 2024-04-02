import React from 'react'
import AdminNavBar from '@/app/(main)/(signin)/admin/adminNavbar'
import '@/components/Styles/LeftNav.css'
const AdminLayout = ({children}: Readonly<{children:React.ReactNode}>) => {
  return (
    <>  
      <div className="flex justify-center">
        <AdminNavBar />
        <div className="w-[80rem] h-screen flex justify-center items-center">
          {children}
        </div>
      </div>
    </>
  )
}

export default AdminLayout;