import React from 'react'
import StaffNavBar from '@/app/(main)/(signin)/staff/staffNavbar'
import '@/components/Styles/LeftNav.css'

const StaffLayout = ({children}: Readonly<{children:React.ReactNode}>) => {
  return (

    <>
      <div className="flex justify-center">
        <StaffNavBar />
        <div className="w-[80rem] h-[90vh] flex justify-center items-center">
          {children}
        </div>
      </div>
    </>
  )
}

export default StaffLayout