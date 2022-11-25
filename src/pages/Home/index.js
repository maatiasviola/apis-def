import React,{useState} from 'react'
import OptionsTab from '../../components/OptionsTab'
import {Container,CssBaseline,Box,Dialog} from '@mui/material'
import Filters from '../../components/Filters'
import Clases from '../../components/Clases'
import Header from '../../components/Header'

function Home() {

    const [categoryFilter,setCategoryFilter]=useState(0)
    const [filtersModal,showFiltersModal]=useState(false)

    const handleCloseFilterModal =()=>{
      showFiltersModal(false)
    }

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
        <Box>
          <OptionsTab setCategoryFilter={setCategoryFilter} showFiltersModal={showFiltersModal}/>

          <Dialog scroll='body'
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={filtersModal}
            onClose={handleCloseFilterModal}>
            <Filters filtersModal={filtersModal} showFiltersModal={showFiltersModal}/>
          </Dialog>
        </Box>

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
            <Clases categoryFilter={categoryFilter} />
          </Container>
        </Box>
      </Box>
    </>
  )
}

export default Home