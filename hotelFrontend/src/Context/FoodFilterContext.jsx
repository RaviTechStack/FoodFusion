import { useContext, createContext, Children, useReducer, useState, useEffect } from "react";
import { useFoodListContext } from "./FoodListContext";
import reducer from "../reducer/FoodFilterReducer"
import axios from "axios";

const FoodFilterContext = createContext()

export const FoodFilterContextProvider = ({children}) =>{
    const {Url} = useFoodListContext()
    const initialstate={
        "AllProd" : [],
        "searchWord": "",
        "totalItem" : 0,
        "current_page" : 1,
        "totalPage": 1

    }
    
    const [newData , dispatch] = useReducer(reducer, initialstate)
    const fetchFoodData = async(page)=>{
        try {
            const data = await axios.get(`${Url}listFood/?page_size=${page}`)
            const FoodData = await data.data
            console.log("here",FoodData)
            dispatch({type: "putData", payload: FoodData})
        } catch (error) {
            console.log("there is error in getting food filter", error)
        }
    }


    useEffect(()=>{
       fetchFoodData(newData.current_page)
    }, [newData.current_page])

    const updateSearch = (e)=>{
        dispatch({type: "search", payload: e.target.value})

    }
    const fetchSearchData = async()=>{
        try {
            const search = await axios.get(`${Url}listFood/?search=${newData.searchWord}`)
            const searchData = await search.data
            
           
            dispatch({type: "PUT_SEARCH_DATA", payload: searchData})
        } catch (error) {
            console.log(`there is erorr ${error}`)
        }
    }

    const UpdateSorting = (value) =>{
        dispatch({type: "SET_SORT", payload: value})
    }

useEffect(()=>{
    const startSearch = setTimeout(() => {
        fetchSearchData()
    }, 1000);

    return ()=> clearTimeout(startSearch)
}, [newData.searchWord])

const handelPrevPage = ()=>{
    if(newData.current_page >1){
      dispatch({type: "Previous_page"})
    }
  }
  const handelNextPage = ()=>{
    console.log("*****", "came next")
    console.log(newData.current_page, newData.totalPage)
    if(newData.current_page < newData.totalPage){
        console.log("*****", "came here next")
      dispatch({type: "Next_page"})
    }
  }

    return(
    <FoodFilterContext.Provider value={{...newData, updateSearch, UpdateSorting, handelPrevPage, handelNextPage}}>
        {children}
    </FoodFilterContext.Provider>
    )
}
export const useFoodFilterContext = ()=>{
    return(useContext(FoodFilterContext))
}