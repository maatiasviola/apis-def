import React from 'react'
import CardComentario from '../CardComentario'
import {Box} from '@mui/material'
function Comentarios({comentarios}) {
  return (
    <Box sx={{
      maxWidth: 1000,
      mx: 0,
      my:'auto',
      p: '1.25rem'
      }}
    >
    {comentarios.map(comentario=><CardComentario comentario={comentario}/>)}
  </Box>
  )
}

export default Comentarios