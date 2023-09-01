import React from 'react'
import ReactDOM from 'react-dom/client'


import './input.css'
// import App from './App'

import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

import ProductsPage from './pages/ProductsPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<h1>Halo ini Halaman Home</h1>} ></Route>
        <Route path='/login' element={<LoginPage />} ></Route>
        <Route path='/register' element={<RegisterPage />} ></Route>
        <Route path='/products' element={<ProductsPage />} ></Route>
        <Route path='*' element={<NotFoundPage />} ></Route>

      </Routes>
    </Router>
  </React.StrictMode>,
)
