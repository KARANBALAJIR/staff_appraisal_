import React from 'react'
import AdminNavBar from '@/app/(main)/(signin)/admin/adminNavbar'
import '@/components/Styles/LeftNav.css'
import TopNavbar from '@/app/(main)/(signin)/admin/Topnavbar'
import '@/components/Styles/index.css'

const AdminLayout = ({children}: Readonly<{children:React.ReactNode}>) => {
  return (
    <>  
      <div className="flex flex-row navbar" >
        <div className=''>
          <AdminNavBar />
        </div>
        <div className="flex-1">
          <TopNavbar/>
          {children}
        </div>
      </div>
    </>
  )
}

export default AdminLayout;