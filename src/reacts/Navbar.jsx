function Navbar() {
  return (
    <>
      <header className="shadow-lg">
        <div className='container mx-auto flex items-center gap-2 text-2xl  h-10 font-bold text-slate-900 hover:text-slate-700'>
          <a href={'/'}>Home</a>
          <a href={'/about'}>About</a>
        </div>
      </header>
      {/* <h1>Ini Adalah {navbarValue}</h1> */}
    </>
  )
}

export default Navbar