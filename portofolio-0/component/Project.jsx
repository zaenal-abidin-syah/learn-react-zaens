// import React from 'react'
import laptop from '../assets/laptop.jpeg'
import axios from 'axios'

function Project() {
  async function getData({ url }) {
    const result = await axios(url)
    return result
  }
  const a = getData('http://google.com')
  console.log(a)
  return (
    <div className='flex flex-wrap gap-3 py-6 bg-slate-100'>
      <div className='max-w-md mx-auto p-1'>
        <img className='w-full rounded-md' src={laptop} alt="" />
      </div>
      <div className='max-w-md mx-auto p-1'>
        <h2 className='text-2xl text-primary'>Data Analytics Dashboard</h2>
        <p className='text-3xl font-bold my-2'>Manage Data Analytics </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae explicabo quasi voluptate, placeat sunt amet. Aliquid unde facilis odit, obcaecati, earum amet mollitia impedit aperiam, facere sit modi. Maxime labore excepturi ut dolorem sed commodi nihil suscipit temporibus nobis quae est culpa quos, hic laudantium, exercitationem sit id laborum saepe.</p>
        <button className='text-md text-primary hover:opacity-80 rounded-md bg-slate-800 hover:text-slate-900 font-bold py-2 px-3 mt-2'>Get Started</button>
      </div>

    </div>
  )
}

export default Project