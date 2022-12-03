import React from 'react'
import {Box,Container,Typography} from '@mui/material'
import PrevNextButtons from '../../PrevNextButtons'

function DescripcionInfo({page,setPage,claseData,setClaseData}) {
  return (
    <Box sx={{
        position: 'absolute' ,
        height: '100%' ,
        width: '100%' ,
        zIndex: -1 ,
        overflow: 'hidden' ,
        display: 'flex',
        }}
    >
        <Box sx={{
            background: 'url(https://a0.muscache.com/im/pictures/Hosting/Gradient/original/4abb91ab-2c70-46d7-80a5-9c83ef0221ef.png) 0% 0% / 100% 100% no-repeat !important',
            height: '100vh' ,
            justifyContent: 'center' ,
            display: 'flex' ,
            justifyContent: 'center',
            alignItems: 'center',
            width: {
                xs: '0%',
                sm: '100%'
            },
            flexDirection: 'column',
            }}
        >
        <Container sx={{
            height: '100vh' ,
            justifyContent: 'center' ,
            display: 'flex' ,
            alignItems: 'center'
            }}
        >
            <Box sx={{
                    ml: 'min(10%, 56)',
                    maxWidth: '75%',
                    mr: '1.5rem',
                    width: '100%',
                    color: 'rgb(255, 255, 255)'
            }}>
                <Typography 
                    component='h1'
                    sx={{
                        fontSize: '3rem',
                        lineHeight: '4.1rem' ,
                        mb: '0.75rem',
                        fontWeight: 600,
                        color: 'rgb(255, 255, 255)',
                        textTransform:'none'
                    }}
                >
                    Contale a tus alumnos lo que les espera
                </Typography>
            </Box>
        </Container>
        </Box>
        <Box sx={{background:'white',height:'100%',width:'100%'}}>
        <Container sx={{
            height: '100vh' ,
            justifyContent: 'center' ,
            display: 'flex' ,
            alignItems: 'center'
            }}
        >
            <Box sx={{
                width: '80%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                }}
            >
            <Box sx={{width:'100%',mb:2}}>
                <Typography component='h2' sx={{
                        m: 0,
                        pb: 2
                    }}
                >
                    <Typography component='label' sx={{
                        fontSize: '1.4rem',
                        lineHeight: '1.6rem',
                        color: 'rgb(34, 34, 34)',
                        fontWeight: 600,
                        p: 0
                        }}
                    >
                        Creá tu titulo
                    </Typography>
                </Typography>
                <Box sx={{
                    color: 'rgb(113, 113, 113)' ,
                    fontWeight: 400 ,
                    pb: '1.5rem' ,
                    pt: '0.5rem',
                }}>
                    El titulo del anuncio tiene que destacar lo que hace especial a tu alojamiento.
                </Box>
                <Box sx={{
                    width: '100% ',
                    boxShadow: 'grey 0px 0px 0px 1px inset', 
                    borderRadius: '0.5rem' 
                }}>
                    <Box    
                        component='textarea'
                        sx={{
                            p: '1.rem',
                            maxHeight: '50vh',
                            color: 'rgb(34, 34, 34)',
                            display: 'block',
                            minWidth: '100%',
                            maxWidth: '100%',
                            outline: 'none',
                            border: 'none',
                            m: 0,
                            boxSizing: 'border-box',
                            backgroundColor: 'transparent',
                            appearance: 'none',
                            resize: 'vertical',
                            minHeight: 144,
                            p: '1.5rem',
                            maxHeight: '50vh',
                            fontSize: '1.1rem',
                            lineHeight: '1.2rem',
                            textOverflow: 'ellipsis',
                            fontWeight: 600,
                            overflowY: 'hidden',
                            borderRadius: '0.5rem',
                        }} 
                        value={claseData.nombre} 
                        rows={2} 
                        placeholder='Guitarra para principiantes' 
                        autoComplete='off'
                        onChange={(e)=>setClaseData({...claseData,nombre:e.target.value})}
                    />
                </Box>
            </Box>
            <Box sx={{width:'100%'}}>
            <Typography component='h2' sx={{
                        m: 0,
                        pb: 2
                    }}
                >
                    <Typography component='label' sx={{
                        fontSize: '1.4rem',
                        lineHeight: '1.6rem',
                        color: 'rgb(34, 34, 34)',
                        fontWeight: 600,
                        p: 0
                        }}
                    >
                        Agrega tu descripcion
                    </Typography>
                </Typography>
                <Box sx={{
                    width: '100% ',
                    boxShadow: 'grey 0px 0px 0px 1px inset', 
                    borderRadius: '0.5rem' 
                }}>
                    <Box    
                        component='textarea'
                        sx={{
                            p: '1.rem',
                            maxHeight: '50vh',
                            color: 'rgb(34, 34, 34)',
                            display: 'block',
                            minWidth: '100%',
                            maxWidth: '100%',
                            outline: 'none',
                            border: 'none',
                            m: 0,
                            boxSizing: 'border-box',
                            backgroundColor: 'transparent',
                            appearance: 'none',
                            resize: 'vertical',
                            minHeight: 144,
                            p: '1.5rem',
                            maxHeight: '50vh',
                            fontSize: '1.1rem',
                            lineHeight: '1.2rem',
                            textOverflow: 'ellipsis',
                            fontWeight: 600,
                            overflowY: 'hidden',
                            borderRadius: '0.5rem'
                        }} 
                        rows={5} 
                        placeholder='Aprende paso a paso a tocar la guitarra. Aprende tocando y olvidate de ejercicios aburridos' 
                        autoComplete='off'
                        value={claseData.descripcion}
                        onChange={(e)=>setClaseData({...claseData,descripcion:e.target.value})}
                    />
                </Box>
            </Box>
            <PrevNextButtons page={page} setPage={setPage}/>
            </Box>
        </Container>
        </Box>
    </Box>
  )
}

export default DescripcionInfo