import React, { useState } from 'react'
import Login from '../components/Login'

const LoginContext = React.createContext({})

export function LoginContextProvider({children}){
    const [showLogin,setShowLogin]=useState(false)

    return(
        <LoginContext.Provider value={{showLogin,setShowLogin}}>
            <Login/>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginContext