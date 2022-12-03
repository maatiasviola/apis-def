import React, {useContext, useState} from 'react';
import './styles.css';
import StarIcon from '@mui/icons-material/Star';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import {Link as LinkMUI} from '@mui/material'
import { Link } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import {Button as MUIButton, Grid} from '@mui/material'
import hiringsService from '../../services/hirings'
import classesService from '../../services/classes'

function SearchResult({clase,classes,setClasses}) {

  const {user} = useContext(UserContext)
  const {token} = user
  console.log(user)

  const [publicado, setPublicado] = useState(clase.publicada)
  
  const handleFinalizar = () =>{
    hiringsService.getHiringUsuarioClase(clase.id,user.id).then(contratacion => hiringsService.removeHiring(contratacion.id,{token}))
    classesService.unrollStudent(clase.id,user.id,{token})
    setClasses(classes.filter(elemento => elemento !== clase)) 
    }

  const handleEstadoClase = () =>{
    classesService.hideClass(clase.id,{token})
    setPublicado(!publicado)
  }

  return (
    <div>
      <LinkMUI component={Link} to={`/clases/${clase.id}`}>
      <div className='searchResult'>
      <Grid container>
        <Grid item>
        <img src={clase.imagen} alt={clase.nombre}/>
        </Grid>
        <Grid item>
        {user.rol === 'profesor' &&
        <Link to={`/clases/edicion/${clase.id}`}>
          <EditRoundedIcon color='black' className='searchResult__edit'/>
        </Link>
        }
        <div className='searchResult__info'>
            <div className='searchResult__info__Top'>
              <p>{clase.tipo} · {clase.frecuencia} · {clase.duracion}</p>
              <h3>{clase.nombre}</h3>
              <p>____</p>
              <p>{clase.descripcion}</p>
            </div>
            <div className='searchResult__info__Bottom'>
              <div className='searchResult__star'>
                <StarIcon className='starIcon'/>
                {
                  clase.calificacionPromedio.promedioCalculado === 0
                  ? <strong> Nueva </strong>
                  : <strong>{clase.calificacionPromedio.promedioCalculado}</strong> 
                }
              </div>
              <p>Estado: {clase.publicado ? 'Publicada' : 'Despublicada'}</p>
              <div className='searchResult__price'>
                <h2>${clase.costo} USD /clase</h2>
              </div>
            </div>
        </div>
        </Grid>
      </Grid>
      </div>
      </LinkMUI>
      {user.rol === 'alumno' &&
        <MUIButton sx={{
          textAlign: 'center',
          fontSize: '1rem',
          lineHeight: '1.25rem',
          fontWeight: 600,
          borderRadius: 2, 
          p:2,
          background: 'linear-gradient(to right, rgb(230, 30, 77) 0%, rgb(227, 28, 95) 50%, rgb(215, 4, 102) 100%)',
          color: 'rgb(255, 255, 255)',
          width: {
            xs:'100%',
            sm:'50',
            md:'25%'
          }
        }}
        onClick={handleFinalizar}>
        Finalizar clase
      </MUIButton>
      }
      {user.rol === 'profesor' &&
      <div>
        <MUIButton sx={{
            textAlign: 'center',
            fontSize: '1rem',
            lineHeight: '1.25rem',
            fontWeight: 600,
            borderRadius: 2, 
            p:2,
            background: 'linear-gradient(to right, rgb(230, 30, 77) 0%, rgb(227, 28, 95) 50%, rgb(215, 4, 102) 100%)',
            color: 'rgb(255, 255, 255)',
            width: {
              xs:'100%',
              sm:'50',
              md:'25%'
            }
          }}
          onClick={handleFinalizar}>
          Eliminar clase
        </MUIButton>
        <MUIButton sx={{
          textAlign: 'center',
          fontSize: '1rem',
          lineHeight: '1.25rem',
          fontWeight: 600,
          borderRadius: 2, 
          p:2,
          background: 'linear-gradient(to right, rgb(230, 30, 77) 0%, rgb(227, 28, 95) 50%, rgb(215, 4, 102) 100%)',
          color: 'rgb(255, 255, 255)',
          width: {
            xs:'100%',
            sm:'50',
            md:'25%'
          }
        }}
        onClick={handleEstadoClase}>
        {publicado ? 'Despublicar' : 'Publicar'}
        </MUIButton>
      </div>
      }
    </div>
  )
}

export default SearchResult