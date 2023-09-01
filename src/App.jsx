// import { useState } from 'react'
import { useState } from 'react'
import Navbar from './reacts/Navbar'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Home from './pages/Home'
// import About from './pages/About'
// import NotFound from './pages/NotFound'


function App() {
  // const [navbarValue, setNavbarValue] = useState('home')
  // const changeNavbarValue = () => {
  //   let value = navbarValue == 'home' ? 'about' : 'home'
  //   setNavbarValue(value)
  // }
  const [count, setCount] = useState(0)


  return (
    <div>
      <Navbar />
      <div className='text-xl text-slate-800 font-bold'>Count : {count} </div>
      <button className='border bg-lime-800 text-slate-300' onClick={() => setCount((count) => count + 1)}>tambah</button>
      <button className='border bg-purple-800 text-slate-300' onClick={() => setCount((count) => count - 1)}>kurang</button>



      {/* <Router>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/about'} element={<About />} />
          <Route path={'*'} element={<NotFound />} />
        </Routes>
      </Router> */}

      {/* <button className='border-slate-700 border' onClick={changeNavbarValue}>Ubah Navigasi</button> */}

    </div>
  )
}

export default App