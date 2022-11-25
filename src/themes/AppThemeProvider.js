import React from 'react'
import {createTheme,ThemeProvider} from '@mui/material/styles'
import { grey, pink } from '@mui/material/colors';

const theme=createTheme({
    typography:{
        allVariants:{
            fontFamily:'Raleway',
            textTransform:'none',
            fontSize:15
        }
    },
    palette:{
        primary:{
            main:grey[700]
        },
        secondary:{
            main:pink[500]
        }
    },
    components: {
      MuiTypography: {
        defaultProps: {
          sx: {
            px: 1,
          },
          variant: 'subtitle2',
        },
      },
      MuiStack: {
        defaultProps: {
          sx: {
            px: 2,
            py: 1,
          },
          spacing: 2,
          direction: 'row',
        },
      },
      MuiLink: {
        defaultProps: {
          sx: {
            color: (theme) => theme.palette.primary.main,
          },
          underline: 'none'
        },
      },
      MuiButton: {
        defaultProps: {
          size: 'small',
          p: 0,
          disableRipple: true,
        },
        variant: 'text',
      },
      MuiTab: {
        defaultProps: {
          disableRipple: true,
        },
      },
      MuiListItem:{
        defaultProps:{
          display: 'inline-block',
          mr: '0.25rem'
        }
      }
    },
})

function AppThemeProvider(prop) {
  return (
    <ThemeProvider theme={theme}>
        {prop.children}
    </ThemeProvider>
  )
}

export default AppThemeProvider