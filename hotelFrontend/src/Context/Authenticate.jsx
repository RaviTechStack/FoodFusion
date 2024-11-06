import { createContext, useContext, useState } from "react";
import { useFoodListContext } from "./FoodListContext";
import { redirect, useNavigate } from "react-router-dom";
import axios from "axios";
import {jwtDecode} from "jwt-decode"


export const AuthContext = createContext()

export const AuthContextProvider = ({children}) =>{
    const {Url} = useFoodListContext()

    const [data, setDta] = useState({
        "username" : "",
        "password" : "",
        
    })
const getCookies =(Name)=>{
    const newCookie = `; ${document.cookie}`
    const part = newCookie.split(`; ${Name}=`)
    if (part.length >= 2){
        const token = part.pop().split(";").shift()
        return token
    }
    return undefined

}

    const isAuthenticated = async()=>{
        const token = localStorage.getItem("token")
        if(token){
            const decodedToken = jwtDecode(token)
            const currentTime = Date.now() / 1000
            if(decodedToken.exp < currentTime){
                const refreshToken = getCookies("refreshToken")
                const getNewToken = await axios.post(`${Url}token/refresh/`, {refresh : refreshToken})
                const newToken = await getNewToken.data
            localStorage.setItem("token", newToken.access)
            return true

            }
            return true
            
        }
        return false
    }

    const handelData = (e)=>{
        const keyVal = e.target.name
        const value = e.target.value
        setDta({...data , [keyVal] : value})
    }

    const LoginUser = async(e, navigate) =>{
        e.preventDefault()
        try {
            const login = await axios.post(`${Url}token/`, {username: data.username, password: data.password})
            const token = await login.data
            localStorage.setItem("token", token.access)
            document.cookie = `refreshToken=${token.refresh}; HttpOnly; Secure;`

            navigate("/")
        } catch (error) {
            console.log("there is error in logging in", error)
        }
        
    }

    return(
    <AuthContext.Provider value={{data, setDta, handelData, LoginUser, isAuthenticated}}>
        {children}
    </AuthContext.Provider>
    )
}


export const useAuthContext = ()=>{
    return(useContext(AuthContext))
}

