import React from 'react'
import HodNavBar from '@/app/(main)/(signin)/hod/hodNavbar'
const HodLayout = ({children}:Readonly<{ children: React.ReactNode;}>) => {
  return (
    <>
      <div className="flex justify-center">
        <HodNavBar />
        <div className="w-[80rem] h-[90vh] flex justify-center items-center">
          {children}
        </div>
      </div>
    </>
  )
}

export default HodLayout