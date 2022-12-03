//react
import React, { useContext, useState } from 'react'

//data
import {registerOptions} from '../../data/scrollableDataOptions'
import RegisterButton from '../RegisterButton';

//icons
import {MdClose} from 'react-icons/md';
import {MdOutlineMinimize} from 'react-icons/md';

//hooks
import useUser from '../../hooks/useUser';
import useLoginModal from '../../hooks/useLoginModal';
import useForgotPasswordModal from '../../hooks/useForgotPasswordModal';

//context
import LoginContext from '../../context/LoginContext';

//components
import {Typography,Dialog,IconButton,Box,Container,TextField, Link as LinkMUI} from '@mui/material';
import Button from '../Button';

function Login() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  
  //funcion que hace el login al pasarle las credenciales
  const {login}=useUser()

  //funcion para cambiar estado de visibilidad del login
  const {setShowLogin} = useContext(LoginContext)

  //al enviar formulario
  const handleSubmit=(event)=>{
    event.preventDefault()
    if(email != '' || password != ''){
      login({email,password})
      setShowLogin(false)
      setEmail('')
      setPassword('')
    }else{
      alert('Datos incompletos')
    }
  }

  //manipular modales
  const {showLogin,handleLogin}=useLoginModal()
  const {handleForgotPassword} = useForgotPasswordModal()

  return(
    <div>
        {showLogin &&
          <Dialog scroll='body'
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={showLogin}
            onClose={handleLogin}
          > 
            <Container maxWidth='sm'>
              {/*HEADER*/}
              <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  px:0,
                  py:2,
                  minHeight:20,
                  borderBottom: '1px solid rgb(235,235,235)',
                  color:'rgb(34,34,34)',
                  fontSize: '1rem',
                  lineHeight: '1.25rem',
                  fontWeight: 800
                }}
              >
                <IconButton onClick={handleLogin}>
                  <MdClose/>
                </IconButton>
                
                <Typography sx={{
                    flex:1,
                    textAlign: 'center',
                    marginLeft: '1rem',
                    marginRight: '1rem',
                    color: 'rgb(34, 34, 34)',
                    fontSize: '1rem',
                    lineHeight: '1.25rem',
                    fontWeight: 800,
                    textTransform:'none'
                  }}
                  component='h2'
                >
                  Inicia sesión o registrate
                </Typography>
                
                <IconButton onClick={handleLogin}>
                  <MdOutlineMinimize/>
                </IconButton>
              </Box>

              <Box>
                <form onSubmit={handleSubmit}>
                  <Typography sx={{
                     fontSize: '1.3rem',
                     lineHeight: '1.5rem',
                     fontWeight: 600,
                     my:2
                    }}
                    component='h3'
                  >
                    Te damos la bienvenida a TusClases
                  </Typography>
                  
                
                  <TextField 
                    sx={{mb:1}} 
                    fullWidth 
                    label="Correo Electronico" 
                    value={email} 
                    onChange={(e)=>setEmail(e.target.value)}
                  />

                  <TextField 
                    sx={{mb:1}} 
                    fullWidth 
                    label="Contraseña" 
                    value={password} 
                    onChange={(e)=>setPassword(e.target.value)} 
                    autoComplete='off'
                    type='password'
                  />
                  
                  
                  <LinkMUI 
                    sx={{cursor:'pointer'}} 
                    onClick={handleForgotPassword} 
                  >
                      <Typography
                        component='span'
                        sx={{
                          fontSize: '0.75rem',
                          lineHeight: '1rem',
                          fontWeight: 600,
                          textDecoration: 'underline'
                        }}
                      >
                        Forgot your password?
                      </Typography>
                  </LinkMUI>
                  
                  <Button onClick={handleSubmit}>
                    Continuar
                  </Button>
                </form>

                <Box sx={{
                    width: '100%',
                    border: '1px solid rgb(221, 221, 221)',
                    height: 1,
                    my: '1rem',
                    fontWeight: 400,
                    fontSize: '0.75rem',
                    lineHeight: '1rem'   
                }} 
                />                

                {
                  registerOptions.map(opt=><RegisterButton label={opt.label} icon={opt.icon}/>)
                }
                
              </Box>
            </Container>
            </Dialog>
        }
    </div>
  )
}

export default Login