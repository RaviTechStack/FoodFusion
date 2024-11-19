import React, { useEffect } from 'react'
import Nav from '../components/Nav'
import CartCompo from '../components/CartCompo'
import Footer from '../components/Footer'
import { useCartContext } from '../Context/CartContext'
import { useFoodListContext } from '../Context/FoodListContext'
import { Link } from 'react-router-dom'

const Cart = () => {
  const {cart,sumTotalAmount, delivery, amountToPay, handlePayment, cartLoading, getCart} = useCartContext()
  useEffect(()=>{
    console.log("loaded")
    getCart()
}, [])
  if(cartLoading){
    return( <div>Loading Cart....</div>)
  }
  return (
    <div className='bg-gray-50'>
      <Nav />
      <section className='w-[90%] min-h-screen mx-auto flex py-2'>
        <div className="w-full">
          
          <h2 className='text-3xl font-funky font-semibold py-6'>Your Cart</h2>
          {cart.map((eachFood)=>{
            return(<CartCompo value={eachFood}/>  )
          })}
      
        </div>
        <div className="w-[30%] bg-white rounded-lg shadow-md p-6 ml-4">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-900 font-medium">₹ {sumTotalAmount}</p>
          </div>

          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-700">Delivery Charges</p>
            <p className="text-gray-900 font-medium">₹ {delivery}</p>
          </div>

          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-700">Discount</p>
            <p className="text-green-600 font-medium">- ₹ 100</p>
          </div>

          <div className="border-t border-gray-200 my-4"></div>

          <div className="flex justify-between items-center mb-6">
            <p className="text-xl font-semibold">Total</p>
            <p className="text-xl font-bold text-gray-900">₹ {amountToPay}</p>
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300 ease-in-out"
          onClick={handlePayment}>
            Proceed to Pay
          </button>
        </div>

      </section>
      <Footer />

    </div>
  )
}

export default Cart
