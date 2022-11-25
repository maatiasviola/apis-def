//react
import React from 'react'

//components
import {Box,Typography,Link as LinkMUI} from '@mui/material'
import {Link} from 'react-router-dom'

//icons
import {FaRegHeart} from 'react-icons/fa'
import {AiFillStar} from 'react-icons/ai'

function CardClase({clase}) {
    const {id,nombre,tipo,frecuencia,calificaciones,imagen}=clase

    let calificacionGeneral = 0

    if(!(Object.keys(clase).length===0)){
        if(calificaciones.length!==0){ 
            const result = calificaciones.reduce(function(acumulador,siguienteValor){
                return{
                    calificacion : acumulador.calificacion + siguienteValor.calificacion
                }
                })
            calificacionGeneral=result.calificacion
        }
        
    }
    console.log(calificacionGeneral)
 
  return (
    <LinkMUI component={Link} to={`/clases/${id}`}>
            <Box sx={{
                    flexGrow:1,
                    position:'relative'
                }}
            >
                <Box sx={{
                        position:'absolute',
                        right:10,
                        top:10,
                        zIndex:10
                    }}
                >
                    <FaRegHeart size={24} color='#fff'/>
                </Box>
                
                {/*Imagen*/}
                <Box 
                    component='img' 
                    sx={{
                        height:275,
                        display:'block',
                        overflow:'hidden',
                        width:'100%',
                        borderRadius:3
                    }}
                    src={imagen} 
                    alt={nombre}
                />

                <Box sx={{
                        display:'flex',
                        justifyContent:'space-between'
                    }}
                >
                    <Box sx={{mt:2}}>
                        <Typography component='h3'>{nombre}</Typography>
                        <Typography component='h4'>{frecuencia}</Typography>
                        <Typography component='h5'>{tipo}</Typography>
                    </Box>
                    <Box sx={{mt:2}}>
                        <Box sx={{display:'flex'}}>
                            {
                                calificacionGeneral===0 ? (
                                    <>
                                        <Typography component='h5'>Nueva</Typography>
                                        <AiFillStar size={18}/>
                                    </>
                                ) : (
                                    <>
                                        <Typography component='h5'>{calificacionGeneral}</Typography>
                                        <AiFillStar size={18}/>
                                    </>
                                ) 
                            }
                        </Box>
                    </Box>
                </Box>
            </Box>
    </LinkMUI>  
    )
}

export default CardClase