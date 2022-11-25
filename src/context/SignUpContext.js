import React, { useState } from 'react'
import SignUp from '../components/SignUp'

const SignUpContext = React.createContext({})

export function SignUpContextProvider({children}){
    const [showSignUp,setShowSignUp]=useState(false)

    return(
        <SignUpContext.Provider value={{showSignUp,setShowSignUp}}>
            <SignUp/>
            {children}
        </SignUpContext.Provider>
    )
}

export default SignUpContext