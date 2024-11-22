import axios from "axios";
import { createContext, useContext, useEffect, useState, useReducer } from "react";
import { useFoodListContext } from "./FoodListContext";
import reducer from "../reducer/CartReducer"
import { toast } from 'react-toastify';
import { useAuthContext } from "./Authenticate"

export const CartContext = createContext()


export const CartContextProvider = ({children}) =>{
    const {Url} = useFoodListContext()

    const initialstate = {
        "cart" : [],
        "cartLoading" : false,
        "sumTotalAmount": 0,
        "discount" : 0,
        "delivery" : 0,
        "amountToPay" : 0,
    }

    const [cartData , dispatch] = useReducer(reducer, initialstate)

    const getCart = async()=>{
        const token = localStorage.getItem("token")
        try {
            
            dispatch({type: "cart_loading"})
            const getFood = await axios.get(`${Url}showCart`, {headers: {
                "Authorization" : `Bearer ${token}`
            }})
            const getCartData = await getFood.data
            dispatch({type : "Put_cart_data", payload: getCartData})
            dispatch({type: "Cart_Count"})
        }
        catch (error) {
            console.log("there is an error while getting the data", error)
        }
    }


    const {isAuthenticated} = useAuthContext()

    const addToCart = async(id, quantity)=>{
        const token = localStorage.getItem("token")
        const data = {quantity, food_item_id: id}
        try {
            const AddFood = await axios.post(`${Url}showCart`, data, {headers: {
                "Authorization" : `Bearer ${token}`
            }})
            const addedCart = await AddFood.data
            toast.success("Wow so easy!");
            getCart()
           
        }
        catch (error) {
            console.log("there is an error while posting the data", error)
            toast.error("Wow wriong easy!");
        }
    }


   

    const UpdateQuantiy= async(id, quantity)=>{
        try {
            const updateReq = await axios.patch(`${Url}cart/updateQuantity`, {id, quantity})
            const updatedData = await updateReq.data
            await getCart()
            dispatch({type: "Cart_Count"})
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
            await getCart()
        }
        catch (error) {
            console.log("there is an error while deleting the data", error)
        }
    }

    const clearCart = async()=>{
        const token = localStorage.getItem("token")
        try {
            const clrCart =  await axios.delete(`${Url}clear-cart`, {headers: {
                "Authorization" : `Bearer ${token}`
            }})
            const msgData = await clrCart.data
            toast.success("cleared cart")
            getCart()
        }
        catch(err){
            toast.success("err" , err)
            console.log("clear", err)
        }

    }
    

    const handlePayment = async () => {
    try {
      const response = await axios.post(`${Url}order`, { amount: cartData.amountToPay * 100}); 

      const { order_id, razorpay_key_id, amount } = response.data;
      console.log("here it is", order_id, razorpay_key_id, amount)
      const options = {
        key: razorpay_key_id,
        amount: cartData.amountToPay,
        currency: 'INR',
        name: 'hotel tt',
        description: 'Test Transaction',
        order_id: order_id,
        handler: async (response) => {
          try {
            const paymentId = response.razorpay_payment_id;
            const orderId = response.razorpay_order_id;
            const signature = response.razorpay_signature;
            console.log("********", paymentId, orderId, signature)
            // Send these details to the backend for verification
            const paymentStatus = await axios.post(`${Url}verify-payment`, { paymentId, orderId, signature });
            console.log(paymentStatus)
            if(paymentStatus.status == 200){
                toast.success("payment Done")
                clearCart()

            }
            else{
                toast.error("something went wrong")

            }
            
          } catch (error) {
            alert("Payment verification failed");
            console.error("here is error", error)
          }
        },
        prefill: {
          name: "ravi singh",
          email: "your.email@example.com",
          contact: "1234567890",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Error in payment", error);
    }
  };

    return(
        <CartContext.Provider value={{...cartData, addToCart, deleteItem, UpdateQuantiy, handlePayment, getCart, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = ()=>{
    return(useContext(CartContext))
}
