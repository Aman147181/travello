import React from 'react'
import { Link } from 'react-router-dom'
const Notfound = () => {
  return (
      <div className='min-h-screen flex flex-col justify-center items-center  w-full'>
      <h1 className='text-[100px] text-[#b05441] font-bold font-dance '>404</h1>
          <p className='text-7xl font-garamond text-[#050505] pb-4'>Something's Not Right</p>
          <p className='text-2xl font-roboto text-[#6d6d6d] pb-8'>We can’t find the page your are looking for.</p>

          <Link to='/' className='text-2xl border border-[#b05441] hover:text-white hover:bg-[#b05441] duration-500 rounded-full px-7 py-[3px] text-[#b05441]  font-roboto'>Back to Homepage</Link>
    </div>
  )
}

export default Notfound