import React,{useEffect,useState, useContext} from 'react'
import {Container,CssBaseline,Box,Dialog,IconButton,Typography, List, ListItem} from '@mui/material'
import {Link,useParams} from 'react-router-dom';
import Header from '../../components/Header';
import { AiFillStar } from 'react-icons/ai';
import { BsFillPersonLinesFill} from 'react-icons/bs';
import classesService from '../../services/classes'
import hiringsService from '../../services/hirings'
import {clases} from '../../data/coursesData'
import Button from '../../components/Button';
import CardComentario from '../../components/CardComentario';
import Comentarios from '../../components/Comentarios';
import FormComentarios from '../../components/FormComentarios';
import UserContext from '../../context/UserContext'
import userEvent from '@testing-library/user-event';
import useClass from '../../hooks/useClass';
import { FlareSharp } from '@mui/icons-material';



function Clase() {

    const {user}=useContext(UserContext)
    const {token}=user

    const [claseElegida,setClaseElegida]=useState({})
    console.log("CLASE ELEGIDA: ",claseElegida)
    const {id} = useParams();
    
    useEffect(()=>{
        classesService.getOneClass({id})
            .then(clase=>{
                setClaseElegida(clase)
            })
    },[])
    
        const caracteristicasClase=[
            claseElegida.frecuencia || 'semanal',
            claseElegida.tipo || 'grupal',
            'Superclase'
        ]
    

    console.log(claseElegida)

    let calificacionGeneral = 0

    if(!(Object.keys(claseElegida).length===0)){
        if(claseElegida.calificaciones.length!==0){
            const {calificaciones} = claseElegida
            const result = calificaciones.reduce(function(acumulador,siguienteValor){
                return{
                    calificacion : acumulador.calificacion + siguienteValor.calificacion
                }
                })
            calificacionGeneral=result.calificacion
        }
    }
  
    if((Object.keys(claseElegida).length===0)){
        return <h1>Cargando</h1>
    }

    const [contratado,setContratado]=useState(false)

    const handleContratar = () => {
        const nuevaContratacion = {
            
            claseId: id
        };

        hiringsService.createHiring(nuevaContratacion, {token});
        setContratado(true)
    }

    return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            height: 100,
            overflowY: 'scroll',
          }}
        >
            <Header/>
            <Container maxWidth='lg'>
                <Box>
                    <Typography
                        component='h1'
                        sx={{
                            fontWeight: 600 ,
                            fontSize: '1.7rem' ,
                            lineHeight: '1.9rem' ,
                            mb: 0,
                            pt:'1.5rem'
                        }}
                    >
                        {claseElegida.nombre}
                    </Typography>
                    
                    <Box sx={{
                            display: 'flex' ,
                            justifyContent:'flex-start' ,
                            fontWeight: 600 ,
                            fontSize: '0.9rem' ,
                            lineHeight: '1.25rem' ,
                            flexWrap: 'wrap' ,
                            mt: '0.5rem' ,
                            alignItems: 'center' ,
                            textAlign: 'center '
                        }} 
                    >
                        <AiFillStar/>
                        <Box component='span' sx={{mx:'0.25rem'}}>
                            {calificacionGeneral===0
                            ? 'Es Nueva'
                            :calificacionGeneral
                            } . 
                        </Box>
                        
                        {calificacionGeneral!==0 && 
                            <Box component='span' sx={{mr:'0.25rem'}}>
                                {claseElegida.calificaciones.length} evaluaciones
                            </Box> 
                        }
                        <Box component='span' sx={{mr:'0.25rem'}}>
                            . 
                        </Box>
                        <BsFillPersonLinesFill/>
                        <Box component='span' sx={{mx:'0.25rem'}}>
                            {claseElegida.tipo} . 
                        </Box>
                        <Box component='span' sx={{mr:'0.25rem',textDecoration:'underline'}}>
                            {claseElegida.frecuencia}
                        </Box>
                    </Box>
                </Box>
                
                {/*Imagen*/}
                <Box 
                    component='img' 
                    alt='' 
                    sx={{pt:'1.5rem',maxWidth:'45rem'}} 
                    src={claseElegida.imagen}
                />
                <Box sx={{
                        display: 'flex',
                        fontWeight: 400,
                        fontSize: '1rem',
                        lineHeight: '1.25rem',
                        borderBottom: 'rgb(221, 221, 221) 1px solid',
                    }}
                >
                    <Box sx={{width:'58.3%'}}>
                        <Box sx={{
                                pt: '2.25rem',
                                pb: '1.1rem',
                                display: 'flex',
                                alignItems: 'center',
                                borderBottom:' rgb(221, 221, 221) 1px solid'
                            }}
                        >
                            <Box sx={{flex: '0 1 100%'}}>
                                <Typography sx={{
                                     fontWeight: 600,
                                     fontSize: '1.4rem',
                                     lineHeight: '1.6rem',
                                     mb: '0.5rem',
                                    }}
                                    component='h2'
                                >
                                    Inicio entero. Profesor: {claseElegida.profesor.usuario.nombre}
                                </Typography>

                                <Box sx={{
                                    p:0,
                                    m:0,
                                    }}
                                >
                                    {caracteristicasClase.map((item,index)=>{
                                        return(
                                            <>
                                            <Box sx={{mr:'0.25rem'}} component='span' key={item}>{item}
                                            {caracteristicasClase.length-1!==index && " ·"}
                                            </Box>
                                        </>
                                        )
                                    })}
                                </Box>
                            </Box>
                            <Box sx={{
                                mb: 0,
                                ml: '1rem',
                                fontSize: '1.75rem',
                                height: 56,
                                width: 56,
                                borderRadius: '50%',
                                background:' rgb(221, 221, 221)',
                                overflow: 'hidden',
                            }} 
                            >
                                <Box 
                                    component='img'
                                    sx={{height:'100%',width:'100%'}} 
                                    alt='' 
                                    src={claseElegida.profesor.usuario.avatar}
                                />
                            </Box>
                        </Box>

                        <Box sx={{
                                fontWeight: 400,
                                fontSize: '1rem',
                                lineHeight: '1.25rem'
                            }}
                        >
                            <Box sx={{
                                pt: '2rem',
                                pb: '3rem'
                                }}
                            >
                                <Box 
                                    component='span'
                                    sx={{
                                        lineHeight: '1.5rem',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        display: '-webkit-box',
                                    }}
                                >
                                    Bienvenidos!<br/>
                                {claseElegida.descripcion}
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{
                        width: '33.33333333333333%',
                        ml: '8.333333333333332%',
                        mr: 0
                        }}
                    >
                        <Box sx={{
                            border: '1px solid rgb(221, 221, 221)',
                            borderRadius: '0.75rem',
                            p: '1.5rem',
                            boxShadow: 'rgb(0 0 0 / 12%) 0rem 0.35rem 1rem',
                            color: 'rgb(34, 34, 34)',
                            fontWeight: 400,
                            fontSize: '1rem',
                            lineHeight: '1.25rem',
                            mt:'2rem'
                            }} 
                        >
                            <Box sx={{display:'flex'}}>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    flexWrap:'wrap', 
                                    justifyContent: 'space-between',
                                    marginBottom: '1.5rem'
                                    }}
                                >    
                                    <Box sx={{
                                        display:'flex',
                                        alignItems:'flex-start'
                                    }}
                                    >
                                        <Typography component='span' sx={{
                                            fontSize:'1.4rem',
                                            lineHeight:'1.25rem',
                                            fontWeight:800
                                            }}
                                        >
                                            ${claseElegida.costo} USD
                                        </Typography>
                                        <Typography component='span' sx={{
                                            fontWeight:400,
                                            fontSize:'1rem',
                                            lineHeight:'1.25rem'
                                            }}
                                        >
                                             clase
                                        </Typography>
                                    </Box>
                                
                                <Box sx={{
                                    display: 'flex',
                                    fontSize: '0.9rem',
                                    lineHeight: '1.1rem',
                                    mt:'0.25rem'
                                    }}
                                >
                                    <Box component='span' sx={{
                                        display:'flex',
                                        fontSize:'0.9rem',
                                        lineHeight:'1.1rem',
                                        fontWeight:600
                                        }}
                                    >
                                        <Box component='span'sx={{
                                            textAlign:'center'
                                            }}
                                        >
                                            <AiFillStar/>
                                        </Box>
                                        <Box component='span' sx={{mx:'0.25rem'}}>
                                            {calificacionGeneral===0
                                            ? 'Es Nueva'
                                            :calificacionGeneral
                                            } . 
                                        </Box>
                                        <Box component='span' sx={{
                                            color:'rgb(113, 113, 113)',
                                            pl:'0.25rem',
                                            textDecoration:'underline',
                                            cursor:'pointer'
                                        }}>
                                            {claseElegida.calificaciones.length} calificaciones
                                        </Box>
                                    </Box>
                                </Box>
                                </Box>
                            </Box>
                            <Button disabled={!user || user.rol=='profesor'} onClick={handleContratar}>
                                Contratar
                            </Button>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{py:'3rem',borderBottom:' rgb(221, 221, 221) 1px solid'}}>
                    <Box sx={{
                        mb:4,
                        justifyContent:'initial',
                        alignItems:'center',
                        display:'flex',
                        flexDirection:'row'
                        }}
                    >
                        <Box sx={{
                            mr: '1rem',
                            height: 56,
                            width: 56,
                            borderRadius: '50%', 
                            overflow: 'hidden',
                        }}>
                        <Box 
                            component='img' 
                            sx={{
                                objectFit: 'cover',
                                height: '100%' ,
                                width: '100%' ,
                                position: 'static'
                            }}
                            alt='' 
                            src={claseElegida.profesor.usuario.avatar}
                        />
                        </Box>
                        <Box sx={{
                            fontWeight: 600,
                            fontSize:' 1.3rem',
                            lineHeight: '1.6rem'
                        }}>
                            <Typography component='h2' sx={{m:0,p:0}}>
                                Anfitrión: {claseElegida.profesor.usuario.nombre}
                            </Typography>
                            <Typography 
                                component='span'
                                sx={{
                                    pt: '0.5rem',
                                    color:'#717171',
                                    fontWeight: 400,
                                    fontSize: '0.9rem',
                                    lineHeight: '1.1rem'
                                }}
                            >
                                Se registró en septiembre de 2020
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Comentarios comentarios={claseElegida.comentarios}/>
                    {user &&
                    <FormComentarios 
                        claseId={claseElegida.id} setClaseElegida={setClaseElegida}
                        claseElegida={claseElegida}
                    />
                    }
                </Box>
            </Container>
        </Box>
      </Box>
    </>
  )
}

export default Clase