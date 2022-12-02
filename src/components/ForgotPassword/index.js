import React, { useContext,useState } from 'react'
import './styles.css'
import { Container,TextField,Dialog,IconButton } from '@mui/material';
import useForgotPasswordModal from '../../hooks/useForgotPasswordModal';
import {MdClose} from 'react-icons/md';
import ForgotPasswordContext from '../../context/ForgotPasswordContext';
import { usuarios } from '../../data/coursesData';
import UserContext from '../../context/UserContext';
import usersService from '../../services/users'

function ForgotPassword() {
    const {user} = useContext(UserContext)

    const { showForgotPassword, handleForgotPassword } = useForgotPasswordModal()
    const {setShowForgotPassword} = useContext(ForgotPasswordContext)

    const [email,setEmail]=useState('')
    const [preguntaVerificacion,setPreguntaVerificacion]=useState('')
    const [respuestaVerificacion,setRespuestaVerificacion]=useState('')
    const [usuario,setUsuario]=useState(null)
    const [respuestaValida,setRespuestaValida]=useState(false)
    const [newPassword,setNewPassword]=useState('')

    const handleChangeEmail = (event)=>{
        setEmail(event.target.value)
    }

    const handleSubmitEmail = ()=>{
        const buscarUsuario= usersService.getUserByEmail(email).then(response => console.log(response))
        console.log(buscarUsuario)
        if(buscarUsuario){
            setUsuario(buscarUsuario)
            setPreguntaVerificacion(buscarUsuario.preguntaVerificacion)
        }
    }

    const handleChangeRespuestaVerificacion = (event)=>{
        setRespuestaVerificacion(event.target.value)
    }
    
    const handleSubmitPregunta = ()=>{
        const respuestaValida= usuarios.find(usuario=>usuario.respuestaVerificacion=respuestaVerificacion)
        
        if(respuestaValida){
            setRespuestaValida(true)
        }
    }

    const handleChangeNewPassword=(event)=>{
        setNewPassword(event.target.value)
    }

    const {allUsers,setAllUsers} = useContext(UserContext)

    const handleSubmitNewPassword = ()=>{
        const userToModify = allUsers.find(user=>user.email===email)

        const userModified = {
            ...userToModify,
            password:newPassword
        }
        console.log(userModified)

        setAllUsers(...allUsers,userModified)
        console.log(allUsers)
    }

    return (
    <>
    {showForgotPassword && 
        <Dialog scroll='body'
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={showForgotPassword}
            onClose={handleForgotPassword}>
  
        <Container maxWidth='sm' className='container'>
            <header className='headerForgot'>
                <IconButton onClick={handleForgotPassword}>
                    <MdClose/>
                </IconButton>   
                <div className='titulo-div'>
                    <h1 className='titulo-h1'>Olvidaste tu contraseña?</h1>
                </div>         
                <div></div>    
            </header>

            <div className='info-div-container'>
                <div className='mainTitleDiv'>
                    <h3>Resetea tu contraseña</h3>
                </div>

                <TextField sx={{mb:2}} fullWidth id="outlined-basic" label="Email" variant="outlined" value={email} onChange={handleChangeEmail}/>
                <div className='resetDiv'>
                    <button className='resetButton' onClick={handleSubmitEmail}>
                        <span>Verificar</span>
                    </button>
                </div>
                
                {usuario !== null && 
                    <>
                        <TextField sx={{mb:2,mt:2}} fullWidth id="outlined-basic" label="Pregunta Verificacion" variant="outlined" value={preguntaVerificacion} InputProps={{
                            readOnly: true,
                        }}/> 
                        <TextField sx={{mb:2}} fullWidth id="outlined-basic" label="Respuesta Verificacion" variant="outlined" value={respuestaVerificacion} onChange={handleChangeRespuestaVerificacion}/>                   
                        <div className='resetDiv'>
                            <button className='resetButton' onClick={handleSubmitPregunta}>
                                <span>Verificar</span>
                            </button>
                        </div>
                    </>
                }

                {
                    respuestaValida &&
                    
                    <> 
                        <TextField sx={{mb:2,mt:2}} fullWidth id="outlined-basic" label="Nueva Contraseña" variant="outlined" value={newPassword} onChange={handleChangeNewPassword}/>                   
                        <div className='resetDiv'>
                            <button className='resetButton' onClick={handleSubmitNewPassword}>
                                <span>Cambiar Contraseña</span>
                            </button>
                        </div>
                    </> 
                }
            </div>
        </Container>
    </Dialog>
    }
    </>
  )
}

export default ForgotPassword