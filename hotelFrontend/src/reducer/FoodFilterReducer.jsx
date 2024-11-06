const FoodFilterReducer = (state, action) =>{
    switch (action.type) {
        case "putData":
            const dataToPut = action.payload || action.payload.results
            return{
                ...state, "AllProd" : dataToPut
            };
            case "search":
                return{
                    ...state, "searchWord" : action.payload
                };
            case "PUT_SEARCH_DATA":
                return{
                    ...state, "AllProd" : action.payload.results || action.payload
                }
            case "SET_SORT":
                const dumyData = [...state.AllProd] || [...state.AllProd.results]
                const sortingFunct = (a, b)=>{
                    console.log(action.payload)
                    if(action.payload === "low"){
                        console.log("lowest")
                        return a.food_price - b.food_price
                    }
                    if(action.payload === "high"){
                        console.log("highest")
                        return b.food_price - a.food_price
                    }
                }
                dumyData.sort(sortingFunct)
                return{
                    ...state, "AllProd" : dumyData
                }
            
        default:
            return{
                ...state
            };
            
    }


}

export default FoodFilterReducer