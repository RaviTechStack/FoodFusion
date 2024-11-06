import React, { useEffect, useState } from 'react'
import { useAuthContext } from '../Context/Authenticate'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
  const navigate = useNavigate()
  const {isAuthenticated} = useAuthContext()
  const [Authenticated, setAuthenticated] = useState(false)
  const [loading, setloading] = useState(true)
  
  const checkAuth = async()=>{
    const auth =  await isAuthenticated()
    if(!auth){
      navigate("/login")
    }
    else{
      setAuthenticated(true)
    }
    setloading(false)
  }
   
  useEffect(()=>{
    checkAuth()
  }, [navigate])

  if(loading){
    return(
      <div>
        ...loading
      </div>
    )
  }
  return Authenticated ? children : null
}

export default ProtectedRoute
