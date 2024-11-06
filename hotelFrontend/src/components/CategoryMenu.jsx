import React from 'react'
import { useState } from 'react'
import { useFoodListContext } from '../Context/FoodListContext'

const CategoryMenu = ()=> {
  const {Category, FoodTasteFilter} = useFoodListContext()
    const category = Category.map((currEle)=>(currEle.food_type))
    const [selectedMenu, setselectedMenu] = useState(category[0] || "ALL")
    const handelFilter = (currEle) =>{
      setselectedMenu(currEle)
      FoodTasteFilter(currEle)

    }

  return (
    <div className='w-fit px-7 py-3 rounded-md bg-transparent border border-yellow-800 mx-auto flex justify-center items-center gap-8'>
      {category.map((currEle)=>(
        <button className={`${selectedMenu === currEle ? "bg-yellow-700 font-semibold text-white": "bg-transparent"} px-4 py-3   font-header rounded-md`}
        onClick={()=>(handelFilter(currEle))}>{currEle}</button>
      ))}
    </div>
  )
}

export default CategoryMenu
