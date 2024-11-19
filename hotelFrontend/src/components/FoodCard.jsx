import React, { useState } from 'react'
import { useCartContext } from '../Context/CartContext'


const FoodCard = ({val}) => {
  const [quantity, setquantity] = useState(1)
  const { addToCart, name} = useCartContext()

  const handelSubmit = (e)=>{
    e.preventDefault();
    e.stopPropagation();
    addToCart(val.id, quantity)
  }
  return (
    <div className=' w-[28vw] rounded-xl shadow-xl  border border-gray-300'>
      <div className="h-[43vh] w-full">
      <img src={val.food_img_url} alt="" className='w-full h-full rounded-xl'/>
      </div>
      <div className="h-1/2 w-full flex flex-col px-2 py-7 relative">
      <div className="absolute flex justify-around items-center px-5 py-3 rounded-md -top-11 left-0 bg-white gap-12">
        <p className='text-gray-600 font-header font-bold'><i className="fa-solid fa-star text-yellow-500"></i>{val.food_rating_average}.00</p>
        <p className='text-xl text-yellow-800 font-header font-bold'>{`₹${val.food_price}.00`}</p>
      </div>
      <h2 className='text-4xl font-funky font-semibold'>{val.food_name}</h2>
      <p className='text-gray-500 my-4 font-header font-semibold'>{val.food_content}</p>
      <button className='rounded-full my-2 px-2 py-2 bg-transparent border transition-all duration-200 border-yellow-900 hover:bg-yellow-800 hover:text-white hover:font-semibold font-header font-semibold'
      onClick={handelSubmit}>Add To Cart</button>
      </div>
    </div>
  )
}

export default FoodCard
