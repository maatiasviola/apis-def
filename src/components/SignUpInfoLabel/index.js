import React from 'react'
import {Box,Typography} from '@mui/material'

function SignUpInfoLabel({children}) {
  return (
    <Box sx={{mb:2}}>
                    <Typography 
                      component='p'
                      sx={{
                        display:'flex',
                        color: 'rgb(113, 113, 113)',
                        fontSize: '0.75rem',
                        lineHeight:'1rem',
                        fontWeight: 400 
                      }}
                    >
                        {children}
                    </Typography>
                  </Box>
  )
}

export default SignUpInfoLabel