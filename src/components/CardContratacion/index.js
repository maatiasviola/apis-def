import React, { useState }  from 'react'
import './styles.css'
import {clases,usuarios} from '../../data/coursesData'
import {Box, Typography} from '@mui/material'

function CardContratacion({contratacion}) {
    const claseContratada = clases.find(clase=>clase.idClase===contratacion.idClase)
    console.log('claseContratada: ',claseContratada)
    const usuarioElegido = usuarios.find(usuario=>usuario.email===contratacion.email)

    const [confirmado, setConfirmar] = useState(true)

    const handleConfirmar = () => {setConfirmar(!confirmado)};

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
                src={claseContratada.srcImagen} alt={claseContratada.nombre}/>
        <Box className='cardSub'>
            <h4>Motivo: {contratacion.motivoInteres}</h4>
           
            <Typography component='p' sx={{color: '#4d4d4d'}}>{usuarioElegido.email}</Typography>
            <p className='infoText'>Tel: {usuarioElegido.nroTelefono}</p>
            <div className='profile'>
                <div className='profilePhotoContainer'>
                    <img src={usuarioElegido.srcImagen} alt={usuarioElegido.nombre}
                    className='profilePhoto' />
                </div>
                <div>
                    <p className='profileName'>{usuarioElegido.nombre} {usuarioElegido.apellido}</p>
                </div>
            </div>
            <div className='buttons-container'>
                { confirmado ?
                <div className='continue-div' onClick={handleConfirmar}>
                    <button className='continue-button confirmar'>
                        <span className='continue-span'>Confirmar</span>
                    </button>
                </div>
                :
                <div className='continue-div' onClick={handleConfirmar}>
                    <button className='continue-button confirmar'>
                        <span className='continue-span'> Finalizar </span>
                    </button>
                </div>
                }
                <div className='continue-div'>
                    <button className='continue-button cancelar'>
                        <span className='continue-span' >Cancelar</span>
                    </button>
                </div>
            </div>
        </Box>
    </Box>
  )
}

export default CardContratacion