// import { useRef } from "react"
import Button from "../Elements/Button/Index"
import Input from "../Elements/Input/Index"

const FormLogin = () => {
  const handleLogin = (e) => {
    e.preventDefault()
    localStorage.setItem('email', e.target.email.value)
    localStorage.setItem('password', e.target.password.value)
    window.location.href = '/products'

  }

  // const emailRef = useRef(null)
  return (
    <form onSubmit={handleLogin}>
      <Input label='Email' type='email' placeholder='example@gmail.com' name='email' />

      <Input label='Password' type='password' placeholder='masukan password' name='password' />

      <Button type="submit" classname='bg-blue-500 w-full' >Login</Button>
    </form>
  )
}
export default FormLogin