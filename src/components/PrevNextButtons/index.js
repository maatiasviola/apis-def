import React, { useContext } from 'react'
import {Box,Button} from '@mui/material'
import UserContext from '../../context/UserContext'
import classesService from '../../services/classes'
import { useNavigate } from 'react-router-dom';

function PrevNextButtons({page,setPage,claseData={}}) {
  const prevButtonVisible = page===0 ? 'none' : ''
  const {user}=useContext(UserContext)
  const navigate = useNavigate();
  const {token}=user
  const handleClickNext = ()=>{
    if(page===3){
      classesService.create(claseData,{token})
      .then(returnedClass=>{
        navigate('/')
      })
    } else{
      setPage(page+1)
    }
  }

  const handleClickPrev=()=>{
    setPage(page-1)
  }

    return (
      <Box sx={{bottom:0,position:'fixed',width:'50vw',left:'50%'}}>
      <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',color:'black'}}>
        <div>
        <Button

            onClick={handleClickPrev}  
            sx={{marginLeft:4,textAlign:'center',width:'auto',p:2,pointerEvents:prevButtonVisible}}>
            Atras
        </Button>
        </div>
        <div>
        <Button
            onClick={handleClickNext}
            sx={{marginRight:4,textAlign:'center',width:'auto',p:2,color:'white',backgroundColor:'black'}}>
            {
                page!==3 ? 'Continuar' : 'Terminar'
            }
        </Button>
        </div>
    </Box>
    </Box>
  )
}

export default PrevNextButtons