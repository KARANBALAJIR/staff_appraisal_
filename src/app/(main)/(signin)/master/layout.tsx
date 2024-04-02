import React from 'react'
import MasterNavBar from '@/app/(main)/(signin)/master/masterNavbar'
import '@/components/Styles/LeftNav.css'

const MasterLayout = ({children}: Readonly<{children:React.ReactNode}>) => {
  return (
    <>
      <div className="flex justify-center">
        <MasterNavBar />
        <div className="w-[80rem] h-[90vh] flex justify-center items-center">
          {children}
        </div>
      </div>
    </>
  )
}

export default MasterLayout