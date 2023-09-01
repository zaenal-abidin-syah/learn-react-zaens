import { useEffect, useRef, useState } from "react"
import Button from "../component/Elements/Button/Index"
import CardProduct from "../component/Fragments/CardProduct"

// asumsi dari api
const products = [
  {
    id: 1,
    name: 'Sepatu Baru',
    price: 1000000,
    image: '/shoes.png',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum omnis accusantium quisquam blanditiis non impedit placeat ad esse ex error nobis magnam, nisi a quasi corporis aspernatur modi libero perspiciatis!'
  },
  {
    id: 2,
    name: 'Sepatu Sekolah',
    price: 2399000,
    image: '/shoes.png',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum omnis accusantium quisquam blanditiis non impedit placeat ad esse ex error nobis magnam, nisi a quasi corporis aspernatur modi libero perspiciatis!'
  },
  {
    id: 3,
    name: 'Sepatu Mahal',
    price: 1750000,
    image: '/shoes.png',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum omnis accusantium quisquam blanditiis non impedit placeat ad esse ex error nobis magnam, nisi a quasi corporis aspernatur modi libero perspiciatis!'
  },
  {
    id: 4,
    name: 'Sepatu Nyuri',
    price: 1900000,
    image: '/shoes.png',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum omnis accusantium quisquam blanditiis non impedit placeat ad esse ex error nobis magnam, nisi a quasi corporis aspernatur modi libero perspiciatis!'
  },
  {
    id: 5,
    name: 'Adidas',
    price: 1500000,
    image: '/shoes.png',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, natus?'
  }
]

// const duplicate = (cart, product) => {
//   cart.forEach(c => {

//   })
// }

const email = localStorage.getItem('email')
const Products = () => {

  const [cart, setCart] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const handleLogout = () => {
    localStorage.clear()
    window.location.href = '/login'
  }
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')) || [])
  }, [])
  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        return acc + item.price * item.quantity
      }, 0)
      setTotalPrice(sum)
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }, [cart])

  // const cartRef = useRef(JSON.parse(localStorage.getItem('cart')) || [])

  // const handleCartRef = ({ id, name, price, image, desc }) => {
  //   cartRef.current = [...cartRef.current, { id, name, price, quantity: 1, image, desc }]
  //   localStorage.setItem('cart', JSON.stringify(cartRef.current))
  // }
  const totalPriceRef = useRef(null)
  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = 'table-row'
    } else {
      totalPriceRef.current.style.display = 'none'
    }
  }, [cart])



  const isNotDuplicate = (product, cart) => {
    for (let index = 0; index < cart.length; index++) {
      if (cart[index].id === product.id) {
        return false
      }

    }
    return true
  }

  const handleCart = ({ id, name, price, image, desc }) => {
    const product = { id, name, price, image, desc }
    if (cart.length === 0 || isNotDuplicate(product, cart)) {
      setCart(cart => [...cart, {
        id,
        name,
        price,
        quantity: 1,
        image,
        desc
      }])
    } else {
      if (cart.find(item => item.id === id)) {
        setCart(cart.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
      }

    }

  }

  return (
    <>
      <div className="flex justify-end h-14 bg-blue-600 gap-x-2 text-white items-center px-20">
        {email}
        <Button classname='bg-slate-900' onClick={handleLogout} >LogOut</Button>
      </div>

      <div className="flex py-10">
        <div className="w-4/6 flex flex-wrap gap-x-4 gap-y-4">
          {
            products.map((product) => {
              const { id, name, price, image, desc } = product
              return (
                <CardProduct key={id}>
                  <CardProduct.Header image={image} />
                  <CardProduct.Body name={name}>{desc}</CardProduct.Body>
                  <CardProduct.Footer onclick={() => handleCart(product)} price={price} />
                </CardProduct>
              )
            })
          }
        </div>
        <div className="w-2/6">
          <h1 className="text-2xl text-blue-600 font-bold">Cart</h1>
          <table>
            <thead>
              <tr>
                <th className="px-4 py-2">Product</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                return (
                  <tr key={item.id}>
                    <td >{item.name}</td>
                    <td >{item.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
                    <td >{item.quantity}</td>
                    <td >{(item.price * item.quantity).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
                  </tr>
                )
              })}
              <tr ref={totalPriceRef} className="font-bold">
                <td colSpan={3}>Total Price</td>
                <td>
                  {totalPrice.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}

                </td>
              </tr>
            </tbody>



          </table>
        </div>

      </div>
    </>
  )
}
export default Products