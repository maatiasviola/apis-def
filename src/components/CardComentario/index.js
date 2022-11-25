import React, { useContext } from 'react'
import {Box, Link,Typography} from '@mui/material'
import {BiBlock} from 'react-icons/bi'
import UserContext from '../../context/UserContext'
function CardComentario({comentario}) {
    //Si el comentario esta bloqueado hacer un display none
    const {user} = useContext(UserContext)
    console.log("COMENTARIO: ",comentario)
    const handleToggleComentario=(event)=>{
        //cambiar estado de comentario
    }

    //si usuario no es profesor ve comentarios disponibles
    //si usuario es profesor ve comentarios bloqueados con menor opacidad y debe poder volverlos a la vida
  return (
    <Box sx={{
        display: 'flex',
        mb: '1.5rem',
        }}
    >
        <Box sx={{
                mr: '1rem',
                height: 56,
                width: 56,
                borderRadius: '50%', 
                overflow: 'hidden',
            }}
        >
            <Box 
                component='img' 
                sx={{
                    objectFit: 'cover',
                    height: '100%' ,
                    width: '100%' ,
                    position: 'static'
                }}
                alt='' 
                src={comentario.usuario.avatar}
            />
        </Box>
        <Box sx={{
            flex: 1,
            ml: '1rem'
        }}>
            <Box sx={{
                mb: '0.5rem'
            }}>
                <Typography component='span' sx={{
                    fontWeight: 500,
                    mr: '0.25rem'
                    }}
                >
                    {comentario.usuario.nombre} {comentario.usuario.apellido}
                </Typography>
                <Typography component='span' sx={{
                    fontSize: '0.8rem',
                    color: '#808080',
                    }}
                >
                    20 hours ago
                </Typography>
            </Box>
            <Box sx={{
                px: '0.5rem',
                py: '1rem',
                background: '#f7f7f7',
                borderRadius: '0.25rem',
                mb: '0.5rem',
                position:'relative'
            }}>
                {comentario.descripcion}
                👀
                {user!==null && user.rol==='profesor'&& 
                <Box 
                    component='button'
                    sx={{
                    background: 'none',
                    border: 0,
                    cursor: 'pointer',
                    width: 30,
                    height: 30,
                    fontSize: '1rem',
                    textAlign: 'center',
                    lineHeight: '1.9rem',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    pr:2,
                    m: 'auto',
                    '&:hover':{
                        color: '#2E2C98'
                    } 
                    }}
                    onClick={handleToggleComentario}
                >
                    <BiBlock/>
                </Box>
                }
            </Box>
            <Box>
                <Link sx={{
                    display: 'inline-block',
                    px: '0.25rem',
                    py: '0.6rem',
                    color: '#000000',
                    textDecoration: 'none',
                    cursor:'pointer',
                    '&:hover':{
                        color: '#2E2C98'
                    }
                }}
                >
                    Reply
                </Link>
                <Link sx={{
                    display: 'inline-block',
                    px: '0.25rem',
                    py: '0.6rem',
                    color: '#000000',
                    textDecoration: 'none',
                    cursor:'pointer',
                    '&:hover':{
                        color: '#2E2C98'
                    }
                    }}
                >
                    Like
                </Link>
            </Box>
        </Box>
    </Box>
  )
}

export default CardComentario