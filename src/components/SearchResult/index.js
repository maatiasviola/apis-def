import React, {useContext} from 'react';
import './styles.css';
import StarIcon from '@mui/icons-material/Star';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import {Link as LinkMUI} from '@mui/material'
import { Link } from 'react-router-dom';
import UserContext from '../../context/UserContext';

function SearchResult({clase}) {

  const {user} = useContext(UserContext)
  console.log(user)

  let calificacionGeneral = 0

    if(clase.calificaciones.length!==0){
        const {calificaciones} = clase
        const result = calificaciones.reduce(function(acumulador,siguienteValor){
            return{
                calificacion : acumulador.calificacion + siguienteValor.calificacion
            }
            })
        calificacionGeneral=result.calificacion
    }

  return (
    <LinkMUI component={Link} to={`/clase/${clase.id}`}>
    <div className='searchResult'>
      <img src={clase.imagen} alt={clase.nombre}/>
      {user.rol === 'profesor' &&
      <Link to={`/clases/creacion`}>
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
                calificacionGeneral === 0
                ? <strong> Nueva </strong>
                : <strong>{calificacionGeneral}</strong> 
              }
            </div>
            <div className='searchResult__price'>
              <h2>${clase.costo} USD /clase</h2>
            </div>
          </div>
      </div>
    </div>
    </LinkMUI>
  )
}

export default SearchResult