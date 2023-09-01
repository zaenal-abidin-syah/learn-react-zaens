import React from 'react'
import ReactDOM from 'react-dom/client'


import './index.css'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Project from './component/Project'
import Newsletter from './component/Newsletter'
import Class from './component/Class'
import Footer from './component/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Project />
    <Newsletter />
    <Class />
    <Footer />
  </React.StrictMode>,
)
