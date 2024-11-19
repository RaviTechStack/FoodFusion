import React, { useEffect } from 'react'
import { useFoodListContext } from '../Context/FoodListContext'

const ShowReview = ({foodId}) => {
  const {fetchReview, Review, loadingReview} = useFoodListContext()
    

    useEffect(()=>{

        fetchReview(foodId)
        console.log(":::::", loadingReview, Review)

    }, [foodId])

    
    if(loadingReview){
      return(<div>Loading Review ....</div>)
    }
      return (
        <div>
          <h2 className="text-lg font-bold mt-6 bg-gray-50">Customer Reviews</h2>
          {Review.length === 0 ? (
            <p>No reviews yet. Be the first to review!</p>
          ) : (
            <div className="mt-4 space-y-4">
              {Review.map((singleRev) => (
                <div
                  className="p-4 border rounded-md shadow-sm bg-white"
                >
                  <div className="flex items-center justify-between">
                    <div className="">
                    <span className="text-sm font-medium">{singleRev.user.username}</span> 
                    <span className="text-xs text-gray-500 ml-2">
                      {new Date().toLocaleDateString()}
                    </span>
                    </div>
                    
                    
                  <div className="mt-2 flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={`text-lg ${
                          star <= singleRev.rating
                            ? "text-yellow-500"
                            : "text-gray-300"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  </div>
                  <p className="mt-2 text-gray-700">{singleRev.comment}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )
    }
  


export default ShowReview
