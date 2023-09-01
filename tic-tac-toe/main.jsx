import React from 'react'
import ReactDOM from 'react-dom/client'


import './index.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='w-full h-screen bg-gradient-to-b from-sky-700 to-sky-200 flex flex-col gap-y-3 justify-center items-center'>
      <App />
    </div>
  </React.StrictMode>,
)
