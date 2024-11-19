const CartReducer = (state, action) =>{
    switch (action.type) {
        case "Put_cart_data":
            const allCart = action.payload
            console.log("allCart", allCart)
            return {...state, "cart": allCart, "cartLoading" : false };
        case "update_cart":
            const newCart = state.cart.filter((item)=> item.id !== action.payload)
            return {...state, "cart": newCart, "cartLoading" : false};
        case "cart_loading":
            return{
                ...state, "cartLoading" : true
            }
        case "Cart_Count":
            const totalValue = state.cart.reduce((initialVal, CurrEle)=>{
                const subTotal = CurrEle.food_item.food_price * CurrEle.quantity
                console.log("quantity", CurrEle.quantity)
                const total = initialVal + subTotal
                return total
            }, 0) 
            let delivery = 40
            if(totalValue > 400 || totalValue == 0){
                delivery = 0
            }
            return{
                ...state, "sumTotalAmount": totalValue, "delivery" : delivery
            }
        
        default:
            return {...state}
    }
}

export default CartReducer
