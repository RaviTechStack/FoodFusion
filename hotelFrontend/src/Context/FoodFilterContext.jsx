import { useContext, createContext, Children, useReducer, useState, useEffect } from "react";
import { useFoodListContext } from "./FoodListContext";
import reducer from "../reducer/FoodFilterReducer"
import axios from "axios";

const FoodFilterContext = createContext()

export const FoodFilterContextProvider = ({children}) =>{
    const {FoodListCopy, Url} = useFoodListContext()
    const initialstate={
        "AllProd" : [],
        "searchWord": ""

    }
    
    const [newData , dispatch] = useReducer(reducer, initialstate)
    useEffect(()=>{
        dispatch({type: "putData", payload: FoodListCopy})
    }, [FoodListCopy])

    const updateSearch = (e)=>{
        dispatch({type: "search", payload: e.target.value})

    }
    const fetchSearchData = async()=>{
        try {
            const search = await axios.get(`${Url}listFood/?search=${newData.searchWord}`)
            const searchData = await search.data
            console.log("called")
            
           
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

    return(
    <FoodFilterContext.Provider value={{...newData, updateSearch, UpdateSorting}}>
        {children}
    </FoodFilterContext.Provider>
    )
}
export const useFoodFilterContext = ()=>{
    return(useContext(FoodFilterContext))
}