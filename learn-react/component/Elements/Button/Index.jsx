const Button = ({ classname, children, onClick = () => { }, type = 'button' }) => {
  return (
    <button
      className={`h-10 px-4 font-semibold ${classname} rounded-md text-white`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button