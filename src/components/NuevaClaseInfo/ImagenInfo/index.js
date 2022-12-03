import React,{useState} from 'react'
import './styles.css'
import {Box,Typography} from '@mui/material'
import { ImImages } from "react-icons/im";
import PrevNextButtons from '../../PrevNextButtons';

function ImagenInfo({page,setPage,claseData,setClaseData}) {

    return (
        <Box sx={{
            position: 'absolute' ,
            height: '100%',
            width: '100%',
            zIndex: -1 ,
            overflow: 'hidden' ,
            display: 'flex'
        }}>
            <Box sx={{
                    background: 'url(https://a0.muscache.com/im/pictures/Hosting/Gradient/original/4abb91ab-2c70-46d7-80a5-9c83ef0221ef.png) 0% 0% / 100% 100% no-repeat !important',
                    height: '100vh' ,
                    justifyContent: 'center' ,
                    display: 'flex' ,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: {
                        xs: '0%',
                        sm: '100%'
                    },
                    flexDirection: 'column',
            }}>
                <Box sx={{
                        ml: 'min(10%, 56)',
                        maxWidth: '75%',
                        mr: '1.5rem',
                        width: '100%',
                        color: 'rgb(255, 255, 255)'
                        }}
                    >
                    <Typography sx={{
                        fontSize: '3rem' ,
                        lineHeight: '4.1rem' ,
                        mb: '0.75rem' ,
                        fontWeight: 600 ,
                        color: 'rgb(255, 255, 255)'
                        }}
                    >
                        Elegi una imagen!!!!
                    </Typography>
                </Box>
            </Box>
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
                <div className="wrapper">
                    <header>File Uploader JavaScript</header>
                    <form>
                    <input value={claseData.imagen} onChange={(e)=>setClaseData({...claseData,imagen:e.target.value})} className="file-input" type="text" name="file"/>
                    <i className="fas fa-cloud-upload-alt"></i>
                    <h3 sx={{pb:2,lineHeight:2,fontWeight:600}}>Arrastra la foto acá</h3>
                    <a>Subila desde tu dispositivo</a>
                    </form>
                </div>
                <PrevNextButtons page={page} setPage={setPage}/>
            </Box>
        </Box>
    </Box>
  )
}

export default ImagenInfo