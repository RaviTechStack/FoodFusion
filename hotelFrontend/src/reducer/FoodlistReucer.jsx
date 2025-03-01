const FoodlistReucer = (state, action) => {
    switch (action.type) {
        case "PUT_DATA":
            const listData = action.payload.dataToSend.results
            const category = action.payload.categoryData
            const trending = action.payload.trendingData
            return{
                ...state,
                "isLoading" : false, "FoodList":listData, "FoodListCopy": listData, "Category": [{food_type: 'ALL'}, ...category], "Trending": trending
            };
        case "SingleData":
            return{
                ...state,"isLoading" : false, "SingleFood":action.payload,

            };
        case "Set_Review":
            console.log("setting review and loading false")
            return{
                ...state, "Review": action.payload, "loadingReview": false,
            }
        case "Loading_Review":
            console.log("setting just loadi")
            return{
                ...state, "loadingReview" : true
            }
        case "FiterData":
            if(action.payload === "ALL"){
                return{
                    ...state, "FoodList":state.FoodListCopy
                }
            }
            const NewFilterData = state.FoodListCopy.filter((ele)=>(ele.food_type.food_type == action.payload))
            return{
                ...state, "FoodList":NewFilterData
            }
        default:
            return{
                    ...state
                };
    
        
    }
  
  
}

export default FoodlistReucer
