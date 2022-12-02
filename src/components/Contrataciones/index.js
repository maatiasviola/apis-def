import React, { useContext,useEffect,useState } from 'react'
import {Box,Grid} from '@mui/material'
import CardContratacion from '../CardContratacion'
import UserContext from '../../context/UserContext'
import hiringsService from '../../services/hirings'

function Contrataciones() {
    const {user} = useContext(UserContext)
    const {token}=user

    const [contratacionesToShow,setContrataciones]=useState([])

    useEffect(()=>{
      hiringsService.getHiringsById(user.id)
      .then(hirings=>{
        setContrataciones(hirings)
      })
    },[])

    return (
    
    <Box sx={{m:2}}>
        <Grid container rowSpacing={3} columnSpacing={3}>
        {console.log('contrataciones:',contratacionesToShow)}
        {
            contratacionesToShow.map(contratacion=>{
                return(
                      <Grid key={contratacion.id} item xs={12} sm={4} md={4} lg={3}>
                        <CardContratacion contratacion={contratacion} setContrataciones={setContrataciones} contratacionesToShow={contratacionesToShow}/>
                      </Grid>
                )
            })
          }
        </Grid>
    </Box>
    
  )
}

export default Contrataciones