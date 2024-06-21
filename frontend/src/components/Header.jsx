import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
      <div className='flex justify-between px-4 sm:px-12 md:px-20 lg:px-28 xl:px-32 items-center w-full h-16 bg-white fixed top-0'>
          <h1 className='text-4xl text-[#b05441] font-bold font-dance'><Link to="/">Travello</Link></h1>
          <div className='flex items-center justify-center font-roboto space-x-5 md:space-x-10'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <button className='text-lg border border-[#b05441] hover:text-white hover:bg-[#b05441] duration-500 rounded-full px-7 py-[3px] text-[#b05441]  font-roboto'>login</button>
    </div>
  )
}

export default Header