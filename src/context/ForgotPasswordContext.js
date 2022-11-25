import React, { useState } from 'react'
import ForgotPassword from '../components/ForgotPassword'

const ForgotPasswordContext = React.createContext({})

export function ForgotPasswordContextProvider({children}){
    const [showForgotPassword,setShowForgotPassword]=useState(false)

    return(
        <ForgotPasswordContext.Provider value={{showForgotPassword,setShowForgotPassword}}>
            <ForgotPassword/>
            {children}
        </ForgotPasswordContext.Provider>
    )
}

export default ForgotPasswordContext