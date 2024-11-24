import React from 'react'
import Hero from '../components/Hero'
import Booking from '../components/Booking'
import CategoryCard from '../components/CategoryCard'
import FeatureCard from '../components/FeatureCard'
import Banner from '../components/Banner'
import Heading from '../components/Heading'
import MobileNav from '../components/MobileNav'
import CategoryMenu from '../components/CategoryMenu'
import FoodCard from '../components/FoodCard'
import Info from '../components/Info'
import Footer from '../components/Footer'
import { useFoodListContext } from '../Context/FoodListContext'
import { useFoodFilterContext } from '../Context/FoodFilterContext'
import { Link } from 'react-router-dom'

const Home = () => {
    const arr = [1, 2, 3]
    const {FoodList, Category, Trending} = useFoodListContext()
    const {initialstate} = useFoodFilterContext()
    
    
    return (
        <div>
            <Hero />
            <section className="category-booking flex flex-col md:flex-row md:justify-around items-center justify-around md:items-start gap-4 md:gap-0  py-5">
                <Booking />
                <div className="flex flex-col justify-center items-center gap-6 md:w-[65%] w-full">
                    <h2 className=' text-3xl md:text-5xl font-funky font-bold md:font-semibold'>Our Trending Items</h2>
                    <div className="category-cards flex gap-5 w-full overflow-x-scroll">
                        <div className="w-fit flex gap-6 px-2 md:w-full justify-center">
                        {Trending.map((curr) => (
                            <CategoryCard val={curr} key={curr.id} />
                        ))}
                        </div>
                    </div>
                </div>

            </section>
            <div className=" w-full md:w-4/5 mx-auto flex-col flex md:flex-row justify-center items-center md:justify-between  gap-3">
                {arr.map((curr) => (
                    <FeatureCard />
                ))}
            </div>
            <Banner img="https://wp.validthemes.net/restan/wp-content/uploads/2024/04/15-1.png" heading="Explore Irresistible Promotions!" background="bg-yellow-500" />
            <Heading />
            <CategoryMenu val={Category}/>
            
            <div className="min-h-screen w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 place-items-center gap-6 my-4 mt-12">
                {FoodList.map((curr) => (
                    <Link to={`detail/${curr.food_slug}`}><FoodCard key={curr.id} val={curr}/></Link>
                ))}
            </div>
            <Banner img="https://wp.validthemes.net/restan/wp-content/uploads/2024/04/16.png" heading="Are you Ready to Start your online Order?" background="bg-black" />
            <section className="w-full min-h-screen flex md:flex-row flex-col justify-center bg-gray-100 items-center">
                <div className="w-[90%] md:w-1/2 h-3/5">
                    <img src="https://wp.validthemes.net/restan/wp-content/uploads/2024/01/7.jpg" alt="" className='w-full h-full z-10' />
                </div>
                <Info />
            </section>
            <Footer />
        </div>
    )
}

export default Home
