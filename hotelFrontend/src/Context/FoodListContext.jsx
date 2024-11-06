import { useContext, useEffect,createContext, Children, useState, useReducer } from "react";
import reducer from "../reducer/FoodlistReucer";
import axios from "axios"
export const FoodListContext = createContext()

export const FoodListContextProvider = ({children})=>{
    const Url = "http://127.0.0.1:8000/api/"


    const initialstate = {
        "FoodList" : [],
        "FoodListCopy" : [],
        "SingleFood" : [],
        "isLoading" : false,
        "Category" : ["All"],
        "Trending" : [],
        "current_page" : 1,
        "Total_page" : 1
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

    
  const fetchdata = async()=>{
    try {
        const dataGet = await axios.get(`${Url}listFood/`)
        const category = await axios.get(`${Url}category/`)
        const trending = await axios.get(`${Url}topList/`)
        
        const dataToSend = await dataGet.data.results
        const categoryData = await category.data
        const trendingData = await trending.data
        dispatch({type: "PUT_DATA", payload: {dataToSend, categoryData, trendingData}})
    } catch (error) {
        console.log(`there is error in fetching ${error}`)
    }
    
  }



  //Making these function in this context due to fetch product
  const handelPrevPage = ()=>{
    if(FoodListData.current_page >1){
      dispatch({type: "Previous_page"})
    }
  }
  const handelNextPage = ()=>{
    if(FoodListData.current_page < FoodListData.Total_page){
      dispatch({type: "Next_page"})
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
    fetchdata()
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

const [listView , setListview] = useState(false)

    return(
        <FoodListContext.Provider value={{...FoodListData, SinglFoodFetch, listView, setListview, Url, handelReservationData, ReservationDataSubmit, FoodTasteFilter}}>
            {children}
        </FoodListContext.Provider>
    )
}

export const useFoodListContext =()=>{
    return(
        useContext(FoodListContext)
    )
}
