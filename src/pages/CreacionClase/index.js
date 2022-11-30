import React,{useState} from 'react'
import './styles.css'
import CaracteristicasInfo from '../../components/NuevaClaseInfo/CaracteristicasInfo'
import CategoriaInfo from '../../components/NuevaClaseInfo/CategoriaInfo'
import DescripcionInfo from '../../components/NuevaClaseInfo/DescripcionInfo'
import ImagenInfo from '../../components/NuevaClaseInfo/ImagenInfo'

function CreacionClase() {
  
  const [page,setPage]=useState(0)
  const [claseData,setClaseData]=useState({
    nombre:"",
    descripcion:"",
    tipo:"Cualquiera",
    categoria:"",
    frecuencia:"Cualquiera",
    duracion:"",
    costo:"",
    imagen:""
  })

  console.log(claseData)
  
  const componentList=[
    <DescripcionInfo page={page} setPage={setPage} claseData={claseData} setClaseData={setClaseData}/>,
    <CategoriaInfo page={page} setPage={setPage} claseData={claseData} setClaseData={setClaseData}/>,
    <ImagenInfo page={page} setPage={setPage} claseData={claseData} setClaseData={setClaseData}/>,
    <CaracteristicasInfo page={page} setPage={setPage} claseData={claseData} setClaseData={setClaseData}/>
  ]

  return (
    <div className='app'>
      <div className="progress-bar">
        <div style={{width: page === 0? "25%": page === 1? "50%": page === 2? "75%" : "100%"}}></div>
      </div>       
      <div>{componentList[page]}</div>
    </div>
  )
}

export default CreacionClase