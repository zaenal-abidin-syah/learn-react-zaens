import { useEffect } from 'react'
import { Get } from '../services/wiki'
const Home = () => {
  useEffect(() => {
    const res = Get()
  }, [])
  return (
    <div>home</div>
  )
}

export default Home