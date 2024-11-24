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
    <div className='w-[90vw] md:w-fit h-fit md:h-full px-7 py-3 rounded-md bg-transparent md:border border-yellow-800 mx-auto flex justify-start md:justify-center flex-col md:flex-row items-center gap-2'>
      {category.map((currEle)=>(
        <button className={`${selectedMenu === currEle ? "bg-yellow-700 font-semibold text-white": "bg-transparent"} px-4 py-3 w-full border md:border-none border-yellow-800  font-header rounded-md text-sm md:text-base`}
        onClick={()=>(handelFilter(currEle))}>{currEle}</button>
      ))}
    </div>
  )
}

export default CategoryMenu
