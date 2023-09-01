import { useEffect, useRef, useState } from "react"


function Quotes() {

  const fetchref = useRef(false)
  const [data, setData] = useState({})
  // const [foo, setFoo] = useState(false)
  useEffect(() => {
    async function fetchData() {
      const result = await fetch("https://katanime.vercel.app/api/getrandom")
        .then((res) => res.json())
        .then((res) => res.result[0])
      setData(result)
    }

    if (!fetchref.current) {
      console.log('apa')
      fetchData()
      fetchref.current = true
    }

  }, [data])
  // console.log('akhir : ', data)
  const { indo, character, anime } = data




  return (
    <div className='p-10 w-full h-screen bg-slate-100 flex justify-center items-center'>
      <div className='bg-slate-300 relative text-slate-700 italic text-xl border border-slate-800 max-w-2xl py-5 px-10'>
        <p>{indo}</p>
        <p>{character} - {anime}</p>
        <button className="bg-lime-700 text-sm px-2 py-1 absolute top-0 right-0">Change</button>
      </div>
    </div>
  )
}


export default Quotes