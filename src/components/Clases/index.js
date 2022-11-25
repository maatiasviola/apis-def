import React,{useState,useEffect} from 'react'
import {Box,Grid} from '@mui/material'
import classesService from '../../services/classes'
//recuadro para cada clase que existe
import CardClase from '../CardClase'

function Clases({categoryFilter}) {
  const [classes,setClasses]=useState([])
  
  useEffect(()=>{
    classesService.getAllClasses()
    .then(classes=>{
      setClasses(classes)
    })
  },[])
  console.log(classes)
  const classesToShow = classes.filter(clase=>clase.categoria==categoryFilter)

    
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

