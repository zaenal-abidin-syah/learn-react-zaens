import { useEffect } from "react";
import Darkmode from "./Darkmode";
import { RxHamburgerMenu } from 'react-icons/rx';


function Header() {
  useEffect(()=>{
    const buttonMenu = document.querySelector('.button-menu')
    buttonMenu.addEventListener('click', ()=>{
        const navMenu = document.querySelector('.nav-menu')
        if (navMenu.classList.contains('hidden')){
            navMenu.classList.remove('hidden')
            navMenu.classList.add('block')
        }else{
            navMenu.classList.remove('block')
            navMenu.classList.add('hidden')
        }
        

    })
  },[])  
  return (
    <>
    <header className="dark:bg-slate-800 dark:text-slate-200 text-slate-700 shadow-sm dark:shadow-slate-500">
      <div className="container relative mx-auto py-4 px-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold hover:text-slate-600 dark:hover:text-slate-50">Zaens</h1>
        <div className="button-menu sm:hidden cursor-pointer"><RxHamburgerMenu/></div>
        <nav className="hidden sm:block">
          <ul className="flex gap-x-2 bg">
            <li><a className="hover:text-slate-500 dark:hover:text-slate-50 text-semibold" href="#home">Home</a></li>
            <li><a className="hover:text-slate-500 dark:hover:text-slate-50 text-semibold" href="#about">About</a></li>
            <li><a className="hover:text-slate-500 dark:hover:text-slate-50 text-semibold" href="#project">Projects</a></li>
            <li><a className="hover:text-slate-500 dark:hover:text-slate-50 text-semibold" href="#contact">Contact</a></li> 
            <Darkmode/> 
          </ul>
        </nav>
        <nav className="nav-menu hidden absolute -bottom-36 right-12 w-32 border p-5 rounded-tl-md rounded-br-md bg-white dark:bg-slate-700 dark:border-slate-500 ">
          <ul className="flex flex-col items-center">
            <li><a className="hover:text-slate-500 dark:hover:text-slate-50 text-semibold" href="#home">Home</a></li>
            <li><a className="hover:text-slate-500 dark:hover:text-slate-50 text-semibold" href="#about">About</a></li>
            <li><a className="hover:text-slate-500 dark:hover:text-slate-50 text-semibold" href="#project">Projects</a></li>
            <li><a className="hover:text-slate-500 dark:hover:text-slate-50 text-semibold" href="#contact">Contact</a></li> 
            <Darkmode/> 
          </ul>
        </nav>
      </div>
    </header>
  </>
  );
}
export default Header;