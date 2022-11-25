import React from 'react'
import './styles.css'
import {Box,Grid, Typography} from '@mui/material'
import {scrollableOptions} from '../../../data/scrollableDataOptions'
import PrevNextButtons from '../../PrevNextButtons'

function CategoriaInfo({page,setPage,claseData,setClaseData}) {
    
  return (
    <Box sx={{
        background: 'url(https://a0.muscache.com/im/pictures/Hosting/Gradient/original/4abb91ab-2c70-46d7-80a5-9c83ef0221ef.png) 0% 0% / 100% 100% no-repeat !important',
        position: 'absolute' ,
        height: '100%',
        width: '100%',
        zIndex: -1 ,
        overflow: 'hidden' ,
        display: 'flex'
    }}>
        <Box sx={{
            height: '100vh' ,
            justifyContent: 'center' ,
            display: 'flex' ,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            flexDirection: 'column',
            }}
        >
            <Box sx={{
                ml: 'min(10%, 56)',
                maxWidth: '75%',
                mr: '1.5rem',
                width: '100%',
                color: 'rgb(255, 255, 255)'
                }}
            >
                <Typography sx={{
                    fontSize: '3rem' ,
                    lineHeight: '4.1rem' ,
                    mb: '0.75rem' ,
                    fontWeight: 600 ,
                    color: 'rgb(255, 255, 255)'
                    }}
                >
                    Definamos la materia a la que pertenece tu clase
                </Typography>
            </Box>
        </Box>
        <Box sx={{
            height: '100vh' ,
            justifyContent: 'center' ,
            display: 'flex' ,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            flexDirection: 'column',
            }}
        >    
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
                        ¿A que materia pertenece tu clase?
                    </Typography>
                </Typography>
            <Box sx={{mx:2}}>
                <Grid container rowSpacing={3} columnSpacing={3}>
                    {
                        scrollableOptions.map(categoria=>{
                            return(
                                <Grid 
                                    key={categoria.id} 
                                    item xs={12} sm={4} md={4} lg={3} 
                                    style={{height:'100%'}}
                                    onClick={(e)=>setClaseData({...claseData,categoria:categoria.id})}
                                >    
                                    <Box 
                                        component='button' 
                                        sx={{
                                            border: '1px solid transparent' ,
                                            borderRadius: '0.5rem' ,
                                            display: 'flex ',
                                            flexDirection: 'column' ,
                                            justifyContent: 'center',
                                            alignItems: 'center' ,
                                            p: '0.75rem',
                                            cursor: 'pointer' ,
                                            m: '0.4rem' ,
                                            pt: '0.75rem',
                                            pb: '1.5rem' ,
                                            backgroundColor: 'rgb(255, 255, 255)' ,
                                            border: '1px solid rgb(221, 221, 221)' ,
                                            width: '75%',
                                            '&:hover':{
                                                borderColor: 'transparent',
                                                boxShadow:'rgb(0 0 0) 0px 0px 0px 2px'
                                            }
                                        }}
                                    >
                                        <Box sx={{
                                            width: 64,
                                            height: 64,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            }}
                                        >
                                            {categoria.icon}
                                        </Box>
                                        <Box sx={{
                                            fontSize: '0.9rem' ,
                                            lineHeight: '1.1rem' ,
                                            fontWeight: 600 ,
                                            color: 'rgb(34, 34, 34)' ,
                                            textAlign: 'center' ,
                                            margin: '0.7rem' ,
                                            }}
                                        >
                                            {categoria.label}
                                        </Box>
                                    </Box>
                                </Grid>
                            )
                         })
                    }
                </Grid>
            </Box>
            <PrevNextButtons page={page} setPage={setPage}/>
        </Box>
    </Box>
  )
}

export default CategoriaInfo