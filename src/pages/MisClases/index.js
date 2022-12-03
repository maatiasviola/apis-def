import { Button,Box,CssBaseline, Typography } from '@mui/material'
import React,{useContext,useState,useEffect} from 'react'
import Header from '../../components/Header'
import SearchResult from '../../components/SearchResult'
import UserContext from '../../context/UserContext'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import './styles.css';
import { Link } from 'react-router-dom';
import classesService from '../../services/classes'
import CreateButton from '../../components/CreateButton'
import { clases } from '../../data/coursesData'



function MyClases() {
    const {user} = useContext(UserContext)
    const [classes,setClasses]=useState([])

    useEffect(()=>{
        classesService.getUserClasses({id:user.id})
        .then(clases=>setClasses(clases))
    },[])

    return (
    <>
        <CssBaseline />
        <Header/>
            <Box
                sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                }}
            >                
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexGrow: 1,
                        height: 100,
                        overflowY: 'scroll',
                    }}
                >
                <div className='searchPage__info'>
                    <p>{classes.length} · 232 alumnos inscriptos</p>
                    <h1 sx={{mb:1}}>Mis Clases</h1>    
                    { user.rol === 'profesor' &&
                    <Link to={`/clases/creacion`}>
                        <CreateButton/>
                    </Link>
                    }
                </div>
                    
                    {classes.length !==0 ?                     
                        classes.map(clase=><SearchResult key={clase.id} clase={clase} classes={classes} setClasses={setClasses}/>)
                        : <h2 style={{padding:'10px'}}>Empieza a inscribirte a clases para que aparezcan aqui</h2>
                    }
                </Box>
            </Box>
    </>
    )
}

export default MyClases