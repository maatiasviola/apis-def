import React from 'react'
import {Box,Button} from '@mui/material'

function StyledFilterButton({value,handleClick,active}) {
  return (
    <Box sx={{
        display: 'inline-block',
        whiteSpace: 'nowrap',
        pr: '0.6rem',
        py: '0.25rem',
        fontSize: '0.9rem',
        lineHeight: 1.43,
        color: '#484848',
        }}
    > 
        <Button 
            value={value} 
            onClick={handleClick} 
            sx={{            
                textAlign: 'center',
                border: '1px solid rgb(221, 221, 221)',
                outline: 'none',
                m: 0,
                transitionProperty: '-ms-transform, -webkit-transform, transform, background-color, border-color',
                transitionDuration: '0.15s',
                transitionTimingFunction: 'ease-in-out',
                py: '0.6rem',
                px: '1.25rem',
                borderRadius: '1.9rem',
                minWidth: 59,
                fontWeight: 400,
                fontSize: '0.9rem',
                lineHeight: '1.2rem',
                backgroundColor: active ?   'rgb(34, 34, 34)' : 'rgb(255, 255, 255)',
                color: active ? 'rgb(255, 255, 255)' : 'rgb(34, 34, 34)'  
            }}
        >
            {value}
        </Button>
    </Box>
  )
}

export default StyledFilterButton