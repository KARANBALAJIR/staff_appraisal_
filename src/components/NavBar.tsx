import React from 'react'
import profileLogo from '@/assets/profileLogo.svg'
import Image from 'next/image'
import '@/components/Styles/LeftNav.css'

const LeftNavBar = () => {
  return (
    <div className='flex flex-col w-[18rem] h-[100vh] items-center p-4 shadow-md bg-[#f3f4f5] rounded-md m-1'>
        <div className='flex gap-4 items-center w-full border-solid border-b-2 border-[#c0c0c0] pb-2'>
          <Image src={profileLogo} alt='profile logo' className='h-10 w-auto'/>
          <div>
            <div className='text-xl font-sans'>Muruga Perumal R</div>
            <div className='text-sm'>role</div>
          </div>
        </div>
        <div className='left-nav-selected'>
          Form
        </div>
        <div className='left-nav'>
          Approval
        </div>
        <div className='left-nav'>
          Approval
        </div>
    </div>
  )
}

export default LeftNavBar