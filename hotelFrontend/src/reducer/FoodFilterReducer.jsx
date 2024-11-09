const FoodFilterReducer = (state, action) =>{
    switch (action.type) {
        case "putData":

            const dataToPut =  action.payload.results
            const totalPage = Math.ceil(action.payload.count / 6)

            return{
                ...state, "AllProd" : dataToPut, "totalPage" : totalPage , "totalItem" : action.payload.count
            };
            case "search":
                return{
                    ...state, "searchWord" : action.payload
                };
            case "PUT_SEARCH_DATA":
                return{
                    ...state, "AllProd" : action.payload.results 
                }
            case "SET_SORT":
                const dumyData = [...state.AllProd]
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
                };
            case "Previous_page":
                return{
                    ...state, "current_page" : state.current_page - 1
                };
            case "Next_page":
                return{
                    ...state, "current_page" : state.current_page + 1
                };
            
        default:
            return{
                ...state
            };
            
    }


}

export default FoodFilterReducer