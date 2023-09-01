import { useEffect } from 'react'

function Darkmode() {
  useEffect(()=>{
    const checkbox = document.querySelector('#toggle');
    const html = document.querySelector('html');
    checkbox.addEventListener('click', ()=>{
      checkbox.checked ? html.classList.add('dark') : html.classList.remove('dark')
      document.body.classList.add(
        'dark:bg-slate-700'
      )
    })
  }, [])
  
  return (
    <div className="flex justify-center">
        <span className="text-sm text-slate-500 dark:text-slate-100 mr-2 ">light</span>
        <input type="checkbox" id="toggle" className="hidden" />
        <label htmlFor="toggle">
            <div className="w-9 h-5 bg-slate-500 dark:bg-slate-200 flex items-center rounded-full p-1 cursor-pointer">
                <div className="w-4 h-4 bg-white dark:bg-slate-500 rounded-full toggle-circle"></div>
            </div>
        </label>
    <span className="text-sm text-slate-500 dark:text-slate-100 ml-2 ">dark</span>
  </div>
  )
}

export default Darkmode