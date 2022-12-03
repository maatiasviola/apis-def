import React,{useState} from 'react'
import './styles.css'
import {Box,Grid,TextField,Typography} from '@mui/material'
import {AiOutlineMinus,AiOutlinePlus} from 'react-icons/ai'
import PrevNextButtons from '../../PrevNextButtons'
import {tiposClase,frecuenciasClase} from '../../../data/scrollableDataOptions'
import StyledFilterButton from '../../StyledFilterButton'

function CaracteristicasInfo({page,setPage,claseData,setClaseData}) {
    const [tipoClaseSelected,setTipoClaseSelected]=useState(claseData.tipo)
    const [frecuenciaSelected,setFrecuenciaSelected]=useState(claseData.frecuencia)

    const handleClickTipoClase = (event)=>{
      setTipoClaseSelected(event.target.value)
      setClaseData({...claseData,tipo:event.target.value})
    }

    const handleClickFrecuencia = (event)=>{
      setFrecuenciaSelected(event.target.value)
      setClaseData({...claseData,frecuencia:event.target.value})
    }
  return (
    <Box sx={{
        background:' url(https://a0.muscache.com/im/pictures/Hosting/Gradient/original/4abb91ab-2c70-46d7-80a5-9c83ef0221ef.png) 0% 0% / 100% 100% no-repeat',
        position: 'absolute',
        height: '100%',
        width: '100%',
        zIndex: -1,
        overflow: 'hidden',
        display: 'flex'
        }}
    >
        <Box sx={{
            height: '100vh' ,
            justifyContent: 'center' ,
            display: 'flex' ,
            alignItems: 'center',
            width: {
                xs: '0%',
                sm: '100%'
            },
            maxWidth: 720 ,
            flexDirection: 'column',
            }}
        >
            <Box sx={{
                ml: 'min(10%, 56)',
                maxWidth: '75%',
                mr: '1.5rem',
                width: {
                    xs: '0%',
                    sm: '100%'
                },
                color: 'rgb(255, 255, 255)',
                }}
            >
                <Typography component='h1' sx={{
                    fontSize: '3rem',
                    lineHeight: '4.1rem',
                    mb: '0.75rem',
                    fontWeight: 600,
                    color: 'rgb(255, 255, 255)',
                }}
                >
                    Para terminar, definamos unos ultimos detalles...
                </Typography>
            </Box>
        </Box>
        <Box sx={{background:'white',height:'100%',width:'100%'}}>
        <Box sx={{
            height: '100vh',
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            maxWidth: 720,
            minWidth: 100,
            flexDirection: 'column',
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
                        Tipo de clase
                    </Typography>
                </Typography>
                <Box sx={{display:'flex'}}>
                {
                  tiposClase.map(tipo=>
                    <StyledFilterButton
                      key={tipo}
                      value={tipo}
                      handleClick={handleClickTipoClase}
                      active= {tipoClaseSelected===tipo}
                    />
                  )
                }
                </Box>
                
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
                        Frecuencia
                    </Typography>
                </Typography>
                <Box sx={{display:'flex'}}>
                {
                  frecuenciasClase.map(frecuencia=>
                    <StyledFilterButton
                      key={frecuencia}
                      value={frecuencia}
                      handleClick={handleClickFrecuencia}
                      active= {frecuenciaSelected===frecuencia}
                    />
                  )
                }
                </Box>
                    
                <div>
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
                        Costo por clase
                    </Typography>
                </Typography>
                <div className='priceContainer'>
                    <div className='secondPriceContainer'>
                        <button className='priceButton'>
                            <AiOutlineMinus size={12}/>
                        </button>
                        <div className='price'>
                            <input 
                                className='priceInput' 
                                value={claseData.costo} 
                                onChange={(e)=>setClaseData({...claseData,costo:e.target.value})}
                            />
                        </div>
                        <button className='priceButton'>
                            <AiOutlinePlus size={12}/>
                        </button>
                    </div>
                </div>
                </div>
                <div>
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
                        Duracion la clase
                    </Typography>
                </Typography>
                    <input 
                        type='time' 
                        value={claseData.duracion} 
                        onChange={(e)=>setClaseData({...claseData,duracion:e.target.value})}
                    />
                </div>
                <PrevNextButtons page={page} setPage={setPage} claseData={claseData} setClaseData={setClaseData}/>
            </Box>
        </Box>
        </Box>
    </Box>
  )
}

export default CaracteristicasInfo