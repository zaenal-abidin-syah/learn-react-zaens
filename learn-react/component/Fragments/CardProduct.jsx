import Button from "../Elements/Button/Index"

const CardProduct = ({ children }) => {
  return (
    <div className="bg-slate-500 border border-slate-400 shadow-lg rounded-md max-w-sm flex flex-col justify-between">
      {children}
    </div>
  )
}

const Header = ({ image }) => {
  return (
    <a href="#" className="">
      <img
        src={image}
        alt="shoes"
        className="p-8 rounded-t-lg mx-auto"
      />
    </a>
  )
}
const Body = ({ children, name }) => {
  return (
    <div className="px-5 pb-5 h-full">
      <a href="#">
        <h5 className="text-white text-xl font-semibold tracking-tight mb-2">{name}</h5>
        <p className="text-slate-50 text-sm">{children}</p>
      </a>

    </div>
  )
}

const Footer = ({ price, onclick }) => {
  return (
    <div className="flex items-center justify-between pb-5 px-5">
      <span className="text-xl font-bold text-white">{price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</span>
      <Button onClick={onclick} classname='bg-blue-500' >Add to Cart</Button>
    </div>
  )
}
CardProduct.Header = Header
CardProduct.Body = Body
CardProduct.Footer = Footer


export default CardProduct