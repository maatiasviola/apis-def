import React, { useState } from 'react'
import {scrollableOptions} from '../../data/scrollableDataOptions'
import {Box,Tab,Button,Container,Tabs} from '@mui/material';
import {tabsClasses} from '@mui/material/Tabs';
import { FaFilter } from 'react-icons/fa';

function OptionsTab({setCategoryFilter,showFiltersModal}) {
    const [selected,setSelected]=useState(0) //guardo estado que opcion esta seleccionada

    //funcion que actualiza opcion seleccionada
    const handleChange=(evt,newValue)=>{
        console.log(newValue)
        setSelected(newValue)
        setCategoryFilter(newValue)
    }
    
  
    return (
        //container: ancho es el de toda la pantalla, con la prop maxWidth
        //y por defecto centra nuestro contenido horizontalmente
        <Container maxWidth='xl'>

            {/* Box es un contenedor que tiene todos los estilos posibles para mi componente */}
            {/* sx es la porpiedad que me permite aplicar estilos (tienen acceso al theme) */}
            <Box 
            sx={{
                display: 'flex',
                flexGrow: 1, //que tanto puede crecer mi elemento dentro de su contenedor
                px: { xs: 0, md: 2 }, //px:padding left, padding right
                alignItems: 'center', 
                mt: 2, //margin top
                mb: 2, //margin bottom
            }}>

                {/* Tabs organizar y navegar entre grupos de contenidos que tienen el 
                mismo nivel de jerarquia  */}
                <Tabs 
                    value={selected} 
                    onChange={handleChange} 
                    variant='scrollable' 
                    scrollButtons //left and right scroll buttons aparecen automaticamente
                    sx={{
                        [`& .${tabsClasses.scrollButtons}`]: {
                          '&.Mui-disabled': { opacity: 0.3 },
                        },
                      }}
                >
                    {scrollableOptions.map((tab)=>{
                        return <Tab key={tab.id} icon={tab.icon} label={tab.label} />
                    })}

                </Tabs>
                <Button
                    sx={{
                        display:{xs:'none',md:'block'},
                        border: '1px solid #ddd',
                        minWidth:90,
                        justifyContent:'space-between',
                        borderRadius:2,
                        textTransform:'capitalize',
                        py:1,
                        color: 'theme.palette.text.primary'
                    }}
                    onClick={()=>showFiltersModal(true)}
                >
                    <FaFilter/> Filters
                </Button>
            </Box>
        </Container>
  )
}

export default OptionsTab