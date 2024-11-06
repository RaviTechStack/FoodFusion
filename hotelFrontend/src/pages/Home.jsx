import React from 'react'
import Hero from '../components/Hero'
import Booking from '../components/Booking'
import CategoryCard from '../components/CategoryCard'
import FeatureCard from '../components/FeatureCard'
import Banner from '../components/Banner'
import Heading from '../components/Heading'
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
            <section className="category-booking flex justify-around ">
                <Booking />
                <div className="flex flex-col justify-center items-center gap-6 w-[65%] ">
                    <h2 className='text-5xl font-funky font-semibold'>Our Trending Items</h2>
                    <div className="category-cards flex gap-5">
                        {Trending.map((curr) => (
                            <CategoryCard val={curr} key={curr.id} />
                        ))}
                    </div>
                </div>

            </section>
            <div className="w-4/5 mx-auto flex justify-center items-center gap-3">
                {arr.map((curr) => (
                    <FeatureCard />
                ))}
            </div>
            <Banner img="https://wp.validthemes.net/restan/wp-content/uploads/2024/04/15-1.png" heading="Explore Irresistible Promotions!" background="bg-yellow-500" />
            <Heading />
            <CategoryMenu val={Category}/>
            
            <div className="min-h-screen w-[90%] mx-auto grid grid-cols-3 place-items-center gap-6 my-4 mt-12">
                {FoodList.map((curr) => (
                    <Link to={`detail/${curr.food_slug}`}><FoodCard key={curr.id} val={curr}/></Link>
                ))}
            </div>
            <Banner img="https://wp.validthemes.net/restan/wp-content/uploads/2024/04/16.png" heading="Are you Ready to Start your online Order?" background="bg-black" />
            <section className="w-full min-h-screen flex justify-center bg-gray-100 items-center">
                <div className="w-1/2 h-3/5">
                    <img src="https://wp.validthemes.net/restan/wp-content/uploads/2024/01/7.jpg" alt="" className='w-full h-full z-10' />
                </div>
                <Info />
            </section>
            <Footer />
        </div>
    )
}

export default Home
