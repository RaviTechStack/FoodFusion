import React, { useState } from 'react'
import { useCartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom'

const CartCompo = ({value}) => {
  const {deleteItem, UpdateQuantiy} = useCartContext()
  const [quantity, setQuantity] = useState(value.quantity)
  
  const increaseQuantity = ()=>{
    const newQuantity = quantity + 1
    setQuantity(quantity + 1)
    UpdateQuantiy(value.id, newQuantity)
  }
  const decreaseQuantity = ()=>{
    const newQuantity = quantity - 1
    setQuantity(quantity - 1)
    UpdateQuantiy(value.id, newQuantity)
  }
  const handelDelete = ()=>{
    deleteItem(value.id)
  }

  return (
    <div className='w-4/5 h-28 my-3 flex shadow-lg items-center'>
      <div className="imgsection w-[15%] h-full">
        <img src={value.food_item.food_img_url} alt={value.food_img_url}
          className='w-full h-full' />
      </div>
      <div className="detail w-[40%]  h-full  px-4 flex flex-col justify-center">
      <Link to={`/detail/${value.food_item.food_slug}`}><h2 className='text-3xl font-funky font-bold'>{`${value.food_item.food_content.slice(0, 18)}...`}</h2></Link>
        <p className='text-gray-500 text-lg font-header font-semibold my-2'>₹ 550</p>
      </div>
      <div className="btns flex h-fit  w-[22.5%]">
        <button className='px-4 py-2 border border-gray-400 border-r-0' onClick={decreaseQuantity}>-</button>
        <input type="text" value={quantity} className='w-[20%] text-center px-2 py-2 border border-gray-400'/>
        <button className='px-4 py-2 border border-gray-400 border-l-0 ' onClick={increaseQuantity}>+</button>
      </div>
      <div className="w-fit h-fit mr-20">
        <h2 className='text-xl font-bold font-header'>₹ {value.food_item.food_price * quantity}</h2>
      </div>
      <h2 className='text-gray-600 text-lg' onClick={handelDelete}><i class="fa-solid fa-trash"></i></h2>
    </div>
  )
}

export default CartCompo
