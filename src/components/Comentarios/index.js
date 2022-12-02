import React, { useState, useEffect, useContext } from 'react'
import UserContext from '../../context/UserContext';
import CardComentario from '../CardComentario'
import {Box} from '@mui/material'
import classesService from '../../services/classes'

function Comentarios({comentarios}) {

  const {user}=useContext(UserContext)

  const [clasePropia,setClasePropia]=useState(false)

  useEffect(()=>{
    if(user && comentarios.length>0){
      classesService.getOneClass({id:comentarios[0].clase})
      .then(clase => setClasePropia(clase.profesor.usuario.id === user.id))
    }
  },[])

  console.log("COMENTARIOS: ",comentarios)
  return (
    <Box sx={{
      maxWidth: 1000,
      mx: 0,
      my:'auto',
      p: '1.25rem'
      }}
    >
    {comentarios.map(comentario=><CardComentario key={comentario.id} comentario={comentario} clasePropia={clasePropia} />)}
  </Box>
  )
}

export default Comentarios