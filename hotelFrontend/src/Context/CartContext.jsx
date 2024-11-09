import axios from "axios";
import { createContext, useContext, useEffect, useState, useReducer } from "react";
import { useFoodListContext } from "./FoodListContext";
import reducer from "../reducer/CartReducer"

export const CartContext = createContext()


export const CartContextProvider = ({children}) =>{


    const initialstate = {
        "cart" : []
    }

    const [cartData , dispatch] = useReducer(reducer, initialstate)

    const getCart = async()=>{
        const token = localStorage.getItem("token")
        try {
            const getFood = await axios.get(`${Url}showCart`, {headers: {
                "Authorization" : `Bearer ${token}`
            }})
            const getCartData = await getFood.data
            dispatch({type : "Put_cart_data", payload: getCartData})
        }
        catch (error) {
            console.log("there is an error while getting the data", error)
        }
    }

    const {Url} = useFoodListContext()
    const addToCart = async(id, quantity)=>{
        console.log("________****", id, quantity)
        const token = localStorage.getItem("token")
        const data = {   
            quantity : quantity,
            food_item_id : id}
        try {
            const AddFood = await axios.post(`${Url}showCart`, data, {headers: {
                "Authorization" : `Bearer ${token}`
            }})
            const addedCart = await AddFood.data
            getCart()
            console.log(addedCart)
        }
        catch (error) {
            console.log("there is an error while posting the data", error)
        }
    }

    useEffect(()=>{
        getCart()
    }, [])

    const UpdateQuantiy= async(id, quantity)=>{
        try {
            // console.log(">>>>>", id, quantity)
            const updateReq = await axios.patch(`${Url}cart/updateQuantity`, {id, quantity})
            const updatedData = await updateReq.data
            console.log("%%%%%%", updatedData)
        } catch (error) {
            console.log("there is an error while updating the quantity", error)
        }
    }

    const deleteItem = async(item_id)=>{
        const token = localStorage.getItem("token")
        try {
            const delFood = await axios.delete(`${Url}showCart/${item_id}`, {headers: {
                "Authorization" : `Bearer ${token}`
            }})
            const msgData = await delFood.data
            dispatch({type : "update_cart", payload: item_id})
            console.log(">>>>>>>>", msgData)
        }
        catch (error) {
            console.log("there is an error while deleting the data", error)
        }
    }
    return(
        <CartContext.Provider value={{...cartData, addToCart, deleteItem, UpdateQuantiy}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = ()=>{
    return(useContext(CartContext))
}
