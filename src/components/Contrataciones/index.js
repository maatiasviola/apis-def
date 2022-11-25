import React, { useContext } from 'react'
import {Box,Grid} from '@mui/material'
import CardContratacion from '../CardContratacion'
import{contrataciones,profesores} from '../../data/coursesData'
import UserContext from '../../context/UserContext'

function Contrataciones() {
    const {user} = useContext(UserContext)
    const profesor= profesores.find(profesor=>profesor.idUsuario=user.idUsuario)
  
    const contratacionesToShow = contrataciones.filter(contratacion=>contratacion.idProfesor=profesor.idProfesor && contratacion.estado==='pendiente')
  
    return (
    <Box sx={{m:2}} >
        <Grid container rowSpacing={3} columnSpacing={3}>
        {
            contratacionesToShow.map(contratacion=>{
                return(
                          <Grid key={contratacion.idContratacion} item xs={12} sm={4} md={4} lg={3}>
                            <CardContratacion contratacion={contratacion}/>
                          </Grid>
                )
            })
        }
        </Grid>
    </Box>
  )
}

export default Contrataciones