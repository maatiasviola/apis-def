import React from 'react'
import {CssBaseline,Box,Container} from '@mui/material'
import Header from '../../components/Header'
import Contrataciones from '../../components/Contrataciones'

function SolicitudesContrataciones() {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
        }}
      >
          <Header/>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            height: 100,
            overflowY: 'scroll',
          }}
        >
          <Container maxWidth="xl" sx={{ mb: 3 }}>
            <Contrataciones/>
          </Container>
        </Box>
      </Box>
    </>
  )
}

export default SolicitudesContrataciones