const CartReducer = (state, action) =>{
    switch (action.type) {
        case "Put_cart_data":
            const allCart = action.payload
            return {...state, "cart": allCart };
        case "update_cart":
            const newCart = state.cart.filter((item)=> item.id !== action.payload)
            return {...state, "cart": newCart}
        
        default:
            return {...state}
    }
}

export default CartReducer
