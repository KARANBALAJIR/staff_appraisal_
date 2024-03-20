import React from 'react'
import { UserButton } from "@clerk/nextjs";

const NavBar = () => {
  return (
    <div className='flex w-full justify-end p-4 shadow-md'>
        <UserButton/>
    </div>
  )
}

export default NavBar