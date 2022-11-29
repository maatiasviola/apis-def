//react
import React from 'react'

//components
import {Box,Button as MUIButton} from '@mui/material'

function Button({children,onClick,disabled}) {
  return (
    <Box sx={{
        my: 2 
      }}
      onClick={onClick}
    >
        <MUIButton sx={{
            textAlign: 'center',
            fontSize: '1rem',
            lineHeight: '1.25rem',
            fontWeight: 600,
            borderRadius: 2, 
            p:2,
            background: 'linear-gradient(to right, rgb(230, 30, 77) 0%, rgb(227, 28, 95) 50%, rgb(215, 4, 102) 100%)',
            color: 'rgb(255, 255, 255)',
            width: '100%'
          }} 
          disabled= {disabled}
        >
          {children}
        </MUIButton>
  </Box>

  )
}

export default Button