// import React from 'react'
import { useState } from 'react'
import Kotak from './component/Kotak'
import Winner from './component/Winner';

function App() {
  const [value, setValue] = useState(Array(9).fill(null))
  const [isX, setIsX] = useState(true)
  function handleClick(i) {
    if (value[i] || Winner(value)) return;
    const nextValue = value.slice()
    nextValue[i] = isX ? "X" : "O"
    setValue(nextValue)
    setIsX(!isX)
  }
  const winner = Winner(value);
  console.log(winner)

  return (
    <>
      <div className='w-[300px] flex flex-wrap h-[300px] bg-slate-400 text-2xl font-bold'>
        <Kotak value={value[0]} handleClick={() => handleClick(0)} />
        <Kotak value={value[1]} handleClick={() => handleClick(1)} />
        <Kotak value={value[2]} handleClick={() => handleClick(2)} />
        <Kotak value={value[3]} handleClick={() => handleClick(3)} />
        <Kotak value={value[4]} handleClick={() => handleClick(4)} />
        <Kotak value={value[5]} handleClick={() => handleClick(5)} />
        <Kotak value={value[6]} handleClick={() => handleClick(6)} />
        <Kotak value={value[7]} handleClick={() => handleClick(7)} />
        <Kotak value={value[8]} handleClick={() => handleClick(8)} />
      </div>
      <div>{winner ? `Pemenangnya adalah ${winner}` : ''}</div>
    </>


  )
}

export default App