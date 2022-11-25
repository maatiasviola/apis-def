//react
import React from 'react'

//components
import {Box,Button} from '@mui/material';

function RegisterButton({label,icon}) {
  return (
    <Box sx={{mb: 2}}>
        <Button sx={{
            textAlign: 'center' ,
            fontSize: '1rem',
            lineHeight: '1.25rem',
            fontWeight: 600,
            borderRadius: 2,
            border: '1px solid #222222',
            p:2,
            color: '#222222',
            width: '100%'
            }}
        >
            <Box sx={{
                display:'flex',
                justifyContent:'space-between',
                alignItems:'center',
                fontWeight:600,
                fontSize:14,
                textAlign:'center',
                width:'100%'
                }}
            >
                {icon}    
                <span>Registrate con {label}</span>
                <div></div>
            </Box>
        </Button>         
    </Box>
  )
}

export default RegisterButton