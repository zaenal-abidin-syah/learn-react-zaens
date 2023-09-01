import Button from "../Elements/Button/Index"
import Input from "../Elements/Input/Index"

const FormRegister = () => {
  return (
    <form action="">
      <Input label='Fullname' type='text' placeholder='Fullname' name='fullname' />
      <Input label='Email' type='email' placeholder='example@gmail.com' name='email' />


      <Input label='Password' type='password' placeholder='masukan password' name='password' />
      <Input label='Confirm Password' type='password' placeholder='masukan password' name='confirmPassword' />


      <Button classname='bg-blue-500 w-full' >Login</Button>
    </form>
  )
}
export default FormRegister