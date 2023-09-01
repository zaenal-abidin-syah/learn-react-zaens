import React, { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx';

function Home() {
  useState(()=>{
    window.addEventListener('scroll', function() {
      var element = document.querySelector('.header');
      var position = element.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;
    
      if (position < windowHeight - 500) {
        element.classList.remove('bg-transparent');
        element.classList.add('bg-red-500');
      }else{
        element.classList.remove('bg-red-500');
        element.classList.add('bg-transparent');
      }
    });
  }, [])
  return (
    <header className='header h-14 fixed top-0 left-0 right-0 flex justify-evenly items-center bg-transparent '>
      <h1>Zaenal</h1>
      <button className='menu-button sm:hidden'><RxHamburgerMenu/></button>
      <ul className='hidden sm:block'>
        <li>Home</li>
        <li>About</li>
        <li>Project</li>
        <li>Contact</li>
      </ul>
    </header>
  )
}

export default Home