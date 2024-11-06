import React from 'react'

const CategoryCard = ({val}) => {
 
  return (
    <div className={` relative w-60 h-72 shadow-sm rounded-lg my-2 bg-no-repeat bg-cover bg-center flex flex-col justify-end`}
    style={{backgroundImage: `url("${val.food_img_url}")`}}>
      <div className="absolute w-full h-full rounded-lg bg-gradient-to-b from-transparent to-black"></div>
      <div className="absolute z-10 w-full h-full flex flex-col justify-end py-4 px-2">
      <p className='text-white text-sm font-normalText font-semibold'>{val.food_type.food_type}</p>
      <h2 className='text-white text-lg font-bold font-header'>{val.food_name}</h2>
      </div>
      
    </div>
  )
}

export default CategoryCard
