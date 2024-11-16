import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import { useFoodListContext } from '../Context/FoodListContext'
import { useCartContext } from '../Context/CartContext'

const DetailPage = () => {
  const Url = "http://127.0.0.1:8000/api/"
  const {slug} = useParams()
  
  const {SinglFoodFetch,SingleFood} = useFoodListContext()
  const [quantity, setQuantity] = useState(1)
  const {addToCart} = useCartContext()

  useEffect(()=>{
    SinglFoodFetch(`${Url}listFood/${slug}/`)
  }, [slug])
  {if(SingleFood){return (
    
    <div>
    <Nav home={false}/>
    <section className="w-[90%] h-screen mx-auto bg-gray-50 flex">
      <div className="w-1/2 h-[100%] grid place-items-center">
      <div className="img w-[95%] h-[75%] rounded-md  ">
        <img src={SingleFood.food_img_url} alt="" className='w-full h-full rounded-xl' />
      </div>
      </div>
      <div className="detail w-1/2 h-full flex flex-col gap-4 justify-center px-5">
        <p className='text-gray-500 font-normalText font-semibold'>{SingleFood.hastag}</p>
        <h2 className='font-funky text-5xl font-bold my-2'>{SingleFood.food_name}</h2>
        <h3 className='text-yellow-800 font-header text-xl font-bold'>₹{SingleFood.food_price}</h3>
        <div className="py-2 px-4 bg-gray-200 rounded-md w-fit">in stock</div>
        <p className='font-normalText text-gray-500 mt-3'>Embark on a culinary journey to the heart of Italy with our Rustic Italian Feast Pizza, a masterpiece of gastronomic delight that will transport your taste buds to the sun-drenched hills of Tuscany. Imagine a hand-stretched dough, lovingly crafted from the finest Italian flour and allowed to ferment slowly for optimal flavor development. Baked to perfection in a wood-fired oven, it emerges with a crisp yet yielding crust, kissed by the gentle smokiness of the flames</p>
        <div className="cart flex items-center my-4">
          <div className="btns flex">
            <button className='px-4 py-2 border border-gray-400 border-r-0 ' onClick={()=>(setQuantity(quantity - 1))}>-</button>
            <input type="text"  value={quantity} className='px-4 py-2 border border-gray-400  w-[15%]'/>
            <button className='px-4 py-2 border border-gray-400 border-l-0 ' onClick={()=>(setQuantity(quantity + 1))}>+</button>
          </div>
          <button className='px-4 py-2 bg-yellow-800  shadow-lg text-white font-header font-semibold' onClick={()=>(addToCart(SingleFood.id, quantity))}>Add To Cart</button>
        </div>
        <p className='font-header  text-gray-500 font-semibold flex gap-5 items-center'>Categories: <span className='font-semibold font-normalText ml-5'>Sea Food</span></p>
      </div> 
    </section>
    <Footer />
    </div>
  )}
  else{
    return ("still loading")}
}
  } 

export default DetailPage
