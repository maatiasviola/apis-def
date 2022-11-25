import React from 'react'
import './styles.css'
import {Box} from '@mui/material'
import { ImImages } from "react-icons/im";
import PrevNextButtons from '../../PrevNextButtons';

function ImagenInfo({page,setPage,claseData,setClaseData}) {

    return (
    <Box sx={{
        background: 'url(https://a0.muscache.com/im/pictures/Hosting/Gradient/original/4abb91ab-2c70-46d7-80a5-9c83ef0221ef.png) 0% 0% / 100% 100% no-repeat',
        position: 'absolute',
        height: '100%',
        width: '100%',
        zIndex: -1,
        overflow: 'hidden',
        display: 'flex'
    }}>
        <div className='contenedor' >
        
        </div>
        <Box sx={{background:'white',height:'100%',width:'100%'}}>
        <Box sx={{
                height: '100vh',
                justifyContent: 'center',
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                flexDirection: 'column',
                }}
        >
            <div class="wrapper">
                <header>File Uploader JavaScript</header>
                <form action="#">
                <input class="file-input" type="file" name="file" hidden/>
                <i class="fas fa-cloud-upload-alt"></i>
                <h3 sx={{pb:2,lineHeight:2,fontWeight:600}}>Arrastra la foto acá</h3>
                <a sx={{textDecoration:'underline'}}>Subila desde tu dispositivo</a>
                </form>
            </div>
            <PrevNextButtons page={page} setPage={setPage}/>
        </Box>
        </Box>
    </Box>
  )
}

export default ImagenInfo