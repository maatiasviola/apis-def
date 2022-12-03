import React, { useState, useContext }  from 'react'
import './styles.css'
import {Box, Typography} from '@mui/material'
import hiringsService from '../../services/hirings'
import classesService from '../../services/classes'
import UserContext from '../../context/UserContext'

function CardContratacion({contratacion,setContrataciones,contratacionesToShow}) {

    const {user}=useContext(UserContext)
    const {token}=user
    
    const claseContratada = contratacion.clase

    const usuarioElegido = contratacion.usuario

    const [confirmado, setConfirmar] = useState(contratacion.estado == 'aceptada')

    const handleConfirmar = () => {
        setConfirmar(true);
        hiringsService.approveHiring(contratacion.id,{token})
    };

    const handleFinalizar = () => {
        hiringsService.removeHiring(contratacion.id,{token})
        classesService.unrollStudent(contratacion.clase.id,contratacion.usuario.id,{token})
        setContrataciones(contratacionesToShow.filter(hiring => hiring !== contratacion))
    }

    const handleCancelar = () => {
        hiringsService.removeHiring(contratacion.id,{token})
        setContrataciones(contratacionesToShow.filter(hiring => hiring !== contratacion))
    }

    return (
        <Box sx={{
            flexGrow:1,
            position:'relative',
            borderRadius: '1rem',       
            overflow: 'hidden',
        }} className='card'>
            <Box component='img' 
                sx={{
                    height:200,
                    display:'block',
                    overflow:'hidden',
                    width:'100%',
                    borderRadius:3
                }}
                src={claseContratada.imagen} alt={claseContratada.nombre}/>
        <Box className='cardSub'>
            <h4>Motivo: {contratacion.motivo}</h4>
           
            <Typography component='p' sx={{color: '#4d4d4d'}}>{usuarioElegido.email}</Typography>
            <p className='infoText'>Tel: {usuarioElegido.telofono}</p>
            <p className='infoText'>Horario de Contacto: {contratacion.horarioReferencia}</p>
            <div className='profile'>
                <div className='profilePhotoContainer'>
                    <img src={usuarioElegido.avatar} alt={usuarioElegido.nombre}
                    className='profilePhoto' />
                </div>
                <div>
                    <p className='profileName'>{usuarioElegido.nombre} {usuarioElegido.apellido}</p>
                </div>
            </div>
            <div className='buttons-container'>
                { !confirmado ?
                <div>
                    <div className='continue-div' onClick={handleConfirmar}>
                        <button className='continue-button confirmar'>
                            <span className='continue-span'>Confirmar</span>
                        </button>
                    </div>
                    <div className='continue-div' onClick={handleCancelar}>
                        <button className='continue-button cancelar'>
                            <span className='continue-span'>Cancelar</span>
                        </button>
                    </div>
                </div>
                :
                <div className='continue-div' onClick={handleFinalizar}>
                    <button className='continue-button confirmar'>
                        <span className='continue-span'> Finalizar </span>
                    </button>
                </div>
                }
            </div>
        </Box>
    </Box>
  )
}

export default CardContratacion