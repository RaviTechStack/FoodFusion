import React from 'react'
import { useCartContext } from '../Context/CartContext'

const ListCard = ({val}) => {
    const {addToCart} = useCartContext()
    const handelSubmit = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        addToCart(val.id, 1)
      }
    return (
        <div className='w-[90vw] md:w-[25vw] rounded-xl shadow-xl  border border-gray-300'>
            <div className="h-[30vh] w-full">
                <img src={val.food_img_url} alt="" className='w-full h-full rounded-xl' />
            </div>
            <div className="desc py-2 text-center">
                <p className='text-gray-400 font-header font-semibold my-1'>{val.food_type_type}</p>
                <h2 className='text-2xl font-semibold font-funky'>{val.food_name}</h2>
                <h3 className='text-xl text-yellow-800 font-bold font-header'>₹ {val.food_price}</h3>
                <button className='rounded-full my-2 px-4 py-2 bg-transparent border transition-all duration-200 border-yellow-900 active:scale-90 hover:bg-yellow-800 hover:text-white hover:font-semibold font-header font-semibold' onClick={handelSubmit}>Add To Cart</button>
            </div>

        </div>
    )
}

export default ListCard
