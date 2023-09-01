import Input from "./Input"
import Label from "./Label"

const Index = ({ label, type, placeholder, name }) => {

  return (
    <div className="mb-4">
      <Label htmlFor={name}>{label}</Label>
      <Input type={type} placeholder={placeholder} name={name} />
    </div >
  )
}

export default Index