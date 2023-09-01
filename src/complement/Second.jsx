import { useNavigate } from "react-router-dom"
function Second() {
  const navigate = useNavigate()
  return (
    <>
      <div>Second About</div>
      <button onClick={() => navigate('/')}>change navigate</button>
    </>

  )
}

export default Second