//react
import React from 'react'

//components
import {Box,Typography,Link as LinkMUI} from '@mui/material'
import {Link} from 'react-router-dom'

//icons
import {FaRegHeart} from 'react-icons/fa'
import {AiFillStar} from 'react-icons/ai'

import useClass from '../../hooks/useClass';

function CardClase({clase}) {

    const {claseCalculada} = useClass()

    const claseNueva = claseCalculada({clase})

  return (
    <LinkMUI component={Link} to={`/clases/${claseNueva.id}`}>
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
                    src={claseNueva.imagen} 
                    alt={claseNueva.nombre}
                />

                <Box sx={{
                        display:'flex',
                        justifyContent:'space-between'
                    }}
                >
                    <Box sx={{mt:2}}>
                        <Typography component='h3'>{claseNueva.nombre}</Typography>
                        <Typography component='h4'>{claseNueva.frecuencia}</Typography>
                        <Typography component='h5'>{claseNueva.tipo}</Typography>
                    </Box>
                    <Box sx={{mt:2}}>
                        <Box sx={{display:'flex'}}>
                            {
                                claseNueva.calificacionGeneral===0 ? (
                                    <>
                                        <Typography component='h5'>Nueva</Typography>
                                        <AiFillStar size={18}/>
                                    </>
                                ) : (
                                    <>
                                        <Typography component='h5'>{claseNueva.calificacionGeneral}</Typography>
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