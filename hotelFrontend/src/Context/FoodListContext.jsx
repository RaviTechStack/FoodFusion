import { useContext, useEffect,createContext, Children, useState, useReducer } from "react";
import reducer from "../reducer/FoodlistReucer";
import axios from "axios"
import { CartContext } from "./CartContext";
export const FoodListContext = createContext()
import { useCartContext } from "./CartContext";

export const FoodListContextProvider = ({children})=>{
    const Url = "http://127.0.0.1:8000/api/"


    const initialstate = {
        "FoodList" : [],
        "FoodListCopy" : [],
        "SingleFood" : [],
        "Review" : [],
        "loadingReview" : false,
        "isLoading" : false,
        "Category" : ["All"],
        "Trending" : [],
    }

    const [ReservationData, setReservationData] = useState({
      "Booked_by" : 1,
      "Booking_name": "",
      "email" : "",
      "No_of_person": "2 Person",
      "Date" : "",
      "time" : ""
    })

    const [FoodListData, dispatch] = useReducer(reducer, initialstate)

    
  const fetchdata = async(page_no)=>{
    try {
        const dataGet = await axios.get(`${Url}listFood/`)
        const category = await axios.get(`${Url}category/`)
        const trending = await axios.get(`${Url}topList/`)
        
        const dataToSend = await dataGet.data
        const categoryData = await category.data
        const trendingData = await trending.data
        dispatch({type: "PUT_DATA", payload: {dataToSend, categoryData, trendingData}})
    } catch (error) {
        console.log(`there is error in fetching ${error}`)
    }
    
  }

  const handelReservationData = (e)=>{
        const key = e.target.name
        const value = e.target.value
        setReservationData({...ReservationData, [key] : value})

  }
  const ReservationDataSubmit = async(e)=>{
    e.preventDefault()
    try {
      const postData = await axios.post(`${Url}reservation`, {...ReservationData})
      const message = await postData.data
      console.log(message)
    } catch (error) {
      console.log("there is an error while booking the table please try again letter", error)
    }
  }

  const FoodTasteFilter = (value)=>{
    dispatch({type: "FiterData", payload: value})
  }

  useEffect(()=>{
    fetchdata(2)
  }, [])

const SinglFoodFetch = async(sinleUrl)=>{
    console.log(sinleUrl)
  try {
    const single = await axios.get(`${sinleUrl}`)
    const singleData = await single.data
    dispatch({type: "SingleData" , payload: singleData})
  } catch (error) {
    console.log(sinleUrl)
    console.log("there is error in fetching of single food")
  }
}
const fetchReview = async(foodId) =>{
  console.log("fetching review", `${Url}food-rating/${foodId}`)
  let token = localStorage.getItem("token")
  try{
    dispatch({type: "Loading_Review"})
    const getReview = await axios.get(`${Url}food-rating/${foodId}`, {headers: {
      "Authorization" : `Bearer ${token}`
  }})
    dispatch({type: "Set_Review", payload: getReview.data})
    
  }
  catch(err){
    console.error("there is an error while fetching review",err )
  }
}

const postReview = async(rating, feedback, foodId) =>{
  let token = localStorage.getItem("token")
  // taken variable name as feedback as comment name is already deifined but whit Uppe "C" so to avoid name mismatch
  try{
    const addReview = await axios.post(`${Url}food-rating/${foodId}`, {rating, comment : feedback}, {headers: {
      "Authorization" : `Bearer ${token}`
  }})
    fetchReview(foodId)
    
  }
  catch(err){
    console.error("there is an error while postin review",err )
  }
}



const [listView , setListview] = useState(false)

    return(
        <FoodListContext.Provider value={{...FoodListData, SinglFoodFetch, listView, setListview, Url, handelReservationData, ReservationDataSubmit, FoodTasteFilter, postReview, fetchReview}}>
            {children}
        </FoodListContext.Provider>
    )

  }
export const useFoodListContext =()=>{
    return(
        useContext(FoodListContext)
    )
}
