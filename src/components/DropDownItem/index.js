//React
import React from 'react'

//components
import {Link as LinkMUI} from '@mui/material';
import { Link } from 'react-router-dom'

function DropdownItem({children,to,onClick}={}) {
  return (
    <LinkMUI 
      sx={{
        height:45,
        display: 'flex',
        alignItems: 'center',
        transition: 'background 200ms',
        fontSize: '0.9rem',
        lineHeight: '1.1rem',
        fontWeight: 600,
        cursor: 'pointer',
        "&:hover": {
          backgroundColor: '#DDDDDD'
        }
      }}
      component={Link} 
      to={to}  
      onClick={onClick}
    >
          {children}
    </LinkMUI>
  )
}

export default DropdownItem