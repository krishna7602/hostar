import React from 'react'
import { FaBars } from "react-icons/fa";
const header = () => {
  return (
    <>
      <div className='flex justify-between'>
        <div className="flex gap-4 ">
        <img src="./assets/Logo.svg" alt="logo" />
        <button className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-spacing-1 rounded-xl px-3'>hoster is hiring</button>
        </div>
        <div className='lg:hidden'>
          <FaBars />
        </div>
      </div>
    </>
    
  )
}

export default header
