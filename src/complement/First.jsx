import { useNavigate } from "react-router-dom"


function First() {
  const navigate = useNavigate()
  return (
    <>
      <div>First Home</div>
      <button onClick={() => navigate('/about')}>change navigate</button>
    </>

  )
}

export default First