import React from 'react';

//categorias
import CalculateIcon from '@mui/icons-material/Calculate';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import LuggageIcon from '@mui/icons-material/Luggage';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import DevicesIcon from '@mui/icons-material/Devices';

//opciones registro
import {BsFacebook} from 'react-icons/bs';
import {FcGoogle} from 'react-icons/fc';
import {FiMail} from 'react-icons/fi';


export const scrollableOptions=[
    {id:0,label:"Matematica",icon:<CalculateIcon size={24}/>},
    {id:1,label:"Estadistica",icon:<LeaderboardIcon size={24}/>},
    {id:2,label:"Viajes",icon:<LuggageIcon size={24}/>},
    {id:3,label:"Nutricion",icon:<LocalDiningIcon size={24}/>},
    {id:4,label:"Fitness",icon:<FitnessCenterIcon size={24}/>},
    {id:5,label:"Video",icon:<VideoLibraryIcon size={24}/>},
    {id:6,label:"Musica",icon:<QueueMusicIcon size={24}/>},
    {id:7,label:"Programación",icon:<DevicesIcon size={24}/>}
]

////////////////////////////////////////////////////

export const registerOptions=[
    {
        label:'Facebook',
        icon: <BsFacebook/>
    },
    {
        label:'Google',
        icon: <FcGoogle/>
    },
    {
        label:'Correo Electronico',
        icon: <FiMail/>
    }
]

export const preguntasVerificacion=[
    '¿Cual era tu apodo en la secundaria?',
    '¿Cual fue el nombre de tu primer mascota?',
    '¿Cual es el nombre de tu madre?',
    '¿A que secundaria fuiste?'
]

export const roles = [
    'alumno',
    'profesor'
]

export const estudios = [
    'Primarios',
    'Secundarios',
    'Terciarios',
    'Universitarios'
]

export const tiposClase = [
    "Cualquiera",
    "Individual",
    "Grupal"
]

export const frecuenciasClase=[
    "Cualquiera",
    "Unica",
    "Semanal",
    "Mensual"
]