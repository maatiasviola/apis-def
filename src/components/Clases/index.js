import React,{useState,useEffect} from 'react'
import {Box,Grid} from '@mui/material'
import classesService from '../../services/classes'
//recuadro para cada clase que existe
import CardClase from '../CardClase'

function Clases({categoryFilter, filters}) {
  const [classes,setClasses]=useState([])
  
  useEffect(()=>{
    classesService.getAllClasses()
    .then(classes=>{
      setClasses(classes)
    })
  },[])
  console.log('aca',classes)
  console.log(filters.calificacion2)
  const classesToShow = classes.filter(clase=> (clase.categoria==categoryFilter 
    && (clase.calificacionPromedio.promedioCalculado >= filters.calificacion1 && clase.calificacionPromedio.promedioCalculado < filters.calificacion2) 
    && ((clase.tipo == filters.tipo) || filters.tipo == "Cualquiera")) 
    && ((clase.frecuencia == filters.frecuencia) || filters.frecuencia == "Cualquiera") 
    && (clase.publicada))

    
  return (
    <Box sx={{mx:2}}>
        <Grid container rowSpacing={3} columnSpacing={3}>
        {
            classesToShow.map(clase=>{
                return(
                  <Grid key={clase.id} item xs={12} sm={4} md={4} lg={3}>
                    <CardClase clase={clase}/>
                  </Grid>
                )
            })
        }
        </Grid>
    </Box>
  )
}

export default Clases

