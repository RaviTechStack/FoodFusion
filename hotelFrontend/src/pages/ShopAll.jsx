import React from 'react'
import Nav from '../components/Nav'
import Pagination from '../components/Pagination'
import Footer from '../components/Footer'
import { useFoodListContext } from '../Context/FoodListContext'
import { useFoodFilterContext } from '../Context/FoodFilterContext'
import { Link } from 'react-router-dom'
import ListCard from '../components/ListCard'
import GridCard from '../components/GridCard'

const ShopAll = () => {
  const arr = [1, 2, 3, 4, 5, 6]
  const {AllProd, searchWord, updateSearch, UpdateSorting, totalItem} = useFoodFilterContext()
  const { FoodList, Category, listView, setListview } = useFoodListContext()
  const AllNewProd = AllProd

  const hadelChange = (e)=>{
    const value = e.target.value
    UpdateSorting(value)
  }
  return (
    <div>
      <Nav />
      <div className="w-full min-h-screen bg-gray-100 py-4">
        <div className="sorting flex justify-between w-[90%] mx-auto py-4  items-center">
          <div className="views flex gap-2 items-center">
            <div className={`list-view ${listView? "bg-black text-white" : "bg-gray-300"} py-2 px-4  rounded-sm`} onClick={()=>{setListview(true)}}><i className="fa-solid fa-list"></i></div>
            <div className={`grid-view py-2 px-4 ${listView? "bg-gray-300" : "bg-black text-white"}  rounded-sm`} onClick={()=>{setListview(false)}}><i className="fa-solid fa-table-cells"></i></div>
          </div>
          <div className="w-2/5">
          <form className='w-full'>
            <input type="text" className='w-full pl-4 py-2 px-1 rounded-full border border-black' placeholder='Search For Food Items' value={searchWord} onChange={updateSearch}/>
            </form>
          </div>
          <div className="sortingOption text-gray-400 font-normalText mx-3 flex items-center gap-4">
            <p>Showing results 6 of {totalItem}</p>
            <select name="sort" id="sort" onChange={hadelChange} className='px-5 py-2 rounded-full border border-gray-400 text-black font-semibold font-header'>
              <option value="sort">Sort By Price</option>
              <option value="low">Price low to high</option>
              <option value="high">Price high to low</option>
            </select>
          </div>

        </div>
        {listView ? <div className=" h-full w-[90%] mx-auto grid grid-cols-2 gap-x-10 gap-6 my-4">
          {AllNewProd.map((curr) => (
            <Link to={`/detail/${curr.food_slug}`}><GridCard key={curr.id} val={curr} /></Link>
          ))}
        </div> : <div className=" h-full w-[90%] mx-auto grid grid-cols-3 gap-x-2 place-items-center gap-6 my-4">
          {AllNewProd.map((curr) => (
            <Link to={`/detail/${curr.food_slug}`}><ListCard key={curr.id} val={curr} /></Link>
          ))}
        </div>}
        
        
      </div>
      <Pagination />

      <Footer />

    </div>
  )
}

export default ShopAll
