// import React from 'react'
import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

function Navbar() {

  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav((nav) => !nav)
  }
  return (
    <div className="flex justify-between items-center max-w-6xl mx-auto py-3 px-5">
      <h1 className='text-primary text-2xl font-bold '>Zaenal</h1>
      <ul className="hidden sm:flex flex-row gap-2 text-primary">
        <li>Home</li>
        <li>Project</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className='block sm:hidden' onClick={handleNav}>
        {nav ? <AiOutlineClose size={20} color='white' /> : <AiOutlineMenu size={20} color='white' />}
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-52 px-5 pt-2 h-screen ease-in-out duration-500 bg-black' : 'fixed -left-[100%] h-screen ease-in-out duration-500 bg-black'}>
        <h1 className='text-primary text-2xl font-bold mb-10'>Zaenal</h1>
        <ul className="flex flex-col gap-3 text-primary uppercase">
          <li className='border-b border-b-slate-600'>Home</li>
          <li className='border-b border-b-slate-600'>Project</li>
          <li className='border-b border-b-slate-600'>About</li>
          <li className=''>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar