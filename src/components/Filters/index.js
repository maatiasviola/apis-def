//React y estilos
import React, { useState } from 'react'

//icons
import {MdClose} from 'react-icons/md';
import {MdOutlineMinimize} from 'react-icons/md';

//components
import {IconButton,Box,Container,TextField, Typography} from '@mui/material';
import { AirbnbSlider,AirbnbThumbComponent } from '../AirbnbSlider';

//data
import {tiposClase} from '../../data/scrollableDataOptions'
import {frecuenciasClase} from '../../data/scrollableDataOptions'
import StyledFilterButton from '../StyledFilterButton';

function Filters({filtersModal,showFiltersModal}) {
    const [filters,setFilters]=useState({
      tipo:'Cualquiera',
      frecuencia:'Cualquiera',
      calificacion1:0,
      calificacion2:5
    })

    console.log(filters)

    const handleChangeCalification = (event)=>{
        setFilters({...filters,calificacion1:event.target.value[0]})
        setFilters({...filters,calificacion2:event.target.value[1]})
    }

  return (
    <>
    {filtersModal && 
            <Container maxWidth='lg'>
              <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  px:0,
                  py:2,
                  minHeight:50,
                  borderBottom: '1px solid rgb(235,235,235)',
                  color:'rgb(34,34,34)',
                  fontSize: '1rem',
                  lineHeight: '1.25rem',
                  fontWeight: 800
                }}
              >
                <IconButton onClick={()=>showFiltersModal(false)}>
                  <MdClose/>
                </IconButton>
                
                <Typography sx={{
                    flex:1,
                    textAlign: 'center',
                    marginLeft: '1rem',
                    marginRight: '1rem',
                    color: 'rgb(34, 34, 34)',
                    fontSize: '1rem',
                    lineHeight: '1.25rem',
                    fontWeight: 800,
                    textTransform:'none'
                  }}
                  component='h2'
                >
                  Filtros
                </Typography>
                
                <IconButton onClick={()=>showFiltersModal(false)}>
                  <MdOutlineMinimize/>
                </IconButton>
              </Box>
              
              <Box sx={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'space-between'
              }}>
                <Box>
                <Typography sx={{
                    fontSize: '1.3rem',
                    lineHeight: '1.6rem',
                    color: 'rgb(34, 34, 34)',
                    fontWeight: 600,
                    pb: 0
                  }}
                >
                  Tipo de clase
                </Typography>
                {
                  tiposClase.map(tipo=>
                    <StyledFilterButton
                      key={tipo}
                      value={tipo}
                      handleClick={(e)=>setFilters({...filters,tipo:e.target.value})}
                      active= {filters.tipo===tipo}
                    />
                  )
                }
                </Box>
                <Box>
                <Typography sx={{
                    fontSize: '1.3rem',
                    lineHeight: '1.6rem',
                    color: 'rgb(34, 34, 34)',
                    fontWeight: 600,
                    pb: 0
                  }}
                >
                  Frecuencia
                </Typography>
                {
                  frecuenciasClase.map(frecuencia=>
                    <StyledFilterButton
                      key={frecuencia}
                      value={frecuencia}
                      handleClick={(e)=>setFilters({...filters,frecuencia:e.target.value})}
                      active= {filters.frecuencia===frecuencia}
                    />
                  )
                }
                </Box>
                <Box>
                <Typography sx={{
                    fontSize: '1.3rem',
                    lineHeight: '1.6rem',
                    color: 'rgb(34, 34, 34)',
                    fontWeight: 600,
                    pb: 0
                  }}
                >
                  Calificacion
                </Typography>    
                    
                <Box sx={{ m: 1 }}>
                  <AirbnbSlider
                      components={{ Thumb: AirbnbThumbComponent }}
                      getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
                      onChange={handleChangeCalification}
                      min={0}
                      max={5}
                      defaultValue={[1,5]}
                      step={0.1}
                      values={[filters.calificacion1,filters.calificacion2]}
                  />
                      
                  <TextField
                    label="Min"
                    InputProps={{
                      readOnly: true,
                    }}
                    value={filters.calificacion1}
                    onChange={(e)=>setFilters({...filters,calificacion1:e.target.value})}
                  />
                  
                  <TextField
                    label="Max"
                    InputProps={{
                      readOnly: true,
                    }}
                    value={filters.calificacion2}
                    onChange={(e)=>setFilters({...filters,calificacion2:e.target.value})}
                  /> 
                  </Box>       
                </Box>
              </Box>
            </Container>
        }
    </>
  )
}

export default Filters