import React,{useContext, useState} from 'react'
import {Box, Input} from '@mui/material'
import {BiSend} from 'react-icons/bi'
import { AiFillFolderAdd } from 'react-icons/ai'
import commentsService from '../../services/comments'
import UserContext from '../../context/UserContext'

function FormComentarios({claseId,claseElegida,setClaseElegida}) {
    const [nuevoComentario,setNuevoComentario]=useState('')
    const {user}=useContext(UserContext)
    const handleChangeComentario=(event)=>{
        setNuevoComentario(event.target.value)
    }

    const handleSubmitComment=(event)=>{
        //crear comentario
        event.preventDefault()
        const comentarioObject = {
            claseId,
            descripcion:nuevoComentario
        }

        const {token}=user

        commentsService
            .createComment(comentarioObject,{token})
            .then(returnedComment=>{
                console.log("RETURNED COMMENT: ",returnedComment)
                setClaseElegida({...claseElegida,comentarios:claseElegida.comentarios.concat(returnedComment)})
                console.log("CLASE ACTUALIZADA: ",claseElegida)
                setNuevoComentario('')
            })

            console.log("CLASE ELEGIDA ACTUALIZADA: ",claseElegida)
    }

  return (
    <Box sx={{
        position: 'relative',
        mb: '2rem'
        }}
    >
        <form onSubmit={handleSubmitComment}>
        <Input sx={{
                width: '100%',
                border: 'none',
                background: '#f5f5f5',
                px: '0.5rem',
                py: '0.6rem',
                height: '2.25rem',
                fontSize: '1rem',
                borderRadius: '0.25rem',
                border: '1px solid #f5f5f5',
                transition: 'background-color 0.2s ease',
                '&:focus':{
                    outline: 0,
                    background: '#fff',
                    borderColor: '#d9d9d9',
                    transition: 'background-color 0.2s ease',
                }
            }} 
            placeholder="Input comment..."
            value={nuevoComentario}
            onChange={handleChangeComentario}
        />
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
             m: 'auto',
             '&:hover':{
                color: '#2E2C98'
             } 
            }}
            type='submit'
        >
            <BiSend/>
        </Box>
        </form>
    </Box>
  )
}

export default FormComentarios