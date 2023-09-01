// import React from 'react'


import Typed from 'react-typed'

function Hero() {
  return (
    <div className='text-white'>
      <div className='max-w-screen-md  h-screen flex flex-col gap-1 items-center justify-center text-center mx-auto'>
        <p className='text-primary text-3xl sm:text-4xl font-bold mb-2 sm:mb-3'>Hello my name is</p>
        <h1 className='text-4xl sm:text-6xl font-bold'>Zaenal Abidin Syah</h1>
        <div className='flex justify-center items-center gap-1 sm:gap-2 mt-1 text-xl sm:text-2xl'>
          <p>Saya Seorang</p>
          <Typed className='min-w-[145px] sm:min-w-[175px] bg-gradient-to-r from-sky-600 to-primary bg-clip-text text-transparent font-bold' strings={['PROGRAMMER', 'MAHASISWA']} typeSpeed={50} backSpeed={35} loop />
        </div>
        <p className='text-slate-400 sm:text-xl'>Monitor your data analytics to increase revenue for Student</p>
        <button className='text-md bg-primary hover:opacity-80 rounded-md text-slate-800 hover:text-slate-900 font-bold py-2 px-3 mt-2'>Contact Me</button>
      </div>
    </div>
  )
}

export default Hero