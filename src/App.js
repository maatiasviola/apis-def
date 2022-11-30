import React from 'react'
import {Routes,Route } from 'react-router-dom'

//pages
import SerProfesor from './pages/SerProfesor'
import MisClases from './pages/MisClases'
import Home from './pages/Home'
import EdicionDeClase from './pages/EdicionDeClase'
import SolicitudesContrataciones from './pages/SolicitudesContrataciones'
import Faq from './pages/Faq/'
import Clase from './pages/Clase'
import CreacionClase from './pages/CreacionClase'

//context providers
import { UserContextProvider } from './context/UserContext'
import { ForgotPasswordContextProvider } from './context/ForgotPasswordContext'
import { LoginContextProvider } from './context/LoginContext'
import { SignUpContextProvider } from './context/SignUpContext'

function App() {
  return (
    <UserContextProvider>
      <ForgotPasswordContextProvider>
        <LoginContextProvider>
          <SignUpContextProvider>
            <Routes>
              <Route path='/faq' element={<Faq/>}/>
              <Route path='/clases/edicion/:id' element={<EdicionDeClase/>}/>
              <Route path='/contrataciones' element={<SolicitudesContrataciones/>}/>
              <Route path='/enseñar' element={<SerProfesor/>}/>
              <Route path='/clases/:id' element={<Clase/>}/>
              <Route path='/misClases' element={<MisClases/>}/>
              <Route path='/clases/creacion' element={<CreacionClase/>}/>
              <Route path='/' element={<Home/>}/>
            </Routes>
          </SignUpContextProvider>
        </LoginContextProvider>
      </ForgotPasswordContextProvider>      
    </UserContextProvider>
  )
}

export default App