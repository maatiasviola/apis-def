import { useContext,useCallback } from "react";
import UserContext from "../context/UserContext";
import loginService from '../services/login'

export default function useUser(){
    const {user,setUser}=useContext(UserContext)

    const login =useCallback(async ({email,password})=>{
        try{
            const user = await loginService.login({
                email,
                password
            })
            console.log(user)
            setUser(user)
        }catch(e){
            alert('Wrong Credentials')
        }
    },[setUser])

    const logout =useCallback(()=>{
        setUser(null)
    },[setUser])

    return{
        isLogged:Boolean(user),
        login,
        logout
    }
}