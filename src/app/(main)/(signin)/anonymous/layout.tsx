import React from 'react'
import AnonNavBar from '@/app/(main)/(signin)/anonymous/anonNavbar';
import '@/components/Styles/LeftNav.css'

const AnonLayout = ({children}: Readonly<{ children: React.ReactNode;}>) => {
  return (
    <>
      <div className="flex justify-center">
        <AnonNavBar />
        <div className="w-[80rem] h-[90vh] flex justify-center items-center">
          {children}
        </div>
      </div>
    </>
  )
}

export default AnonLayout