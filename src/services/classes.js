import axios from 'axios'
const URL = 'http://localhost:4000/classes'

const getAllClasses = () =>{
    const request= axios.get(URL)
    return request.then(response=>response.data.data)
}

const getOneClass = ({id}) =>{
    const request= axios.get(`${URL}/${id}`)
    return request.then(response=>response.data.data)
}

const create = (newObject,{token})=>{
    console.log("TOKEN: ",token)
    console.log("OBJETO QUE LLEGA SERVICIO: ",newObject)
    const config={
        headers:{
            authorization: token
        }
    }
    const request= axios.post(URL,newObject,config)
    return request.then(response=>console.log("RESPUESTA: ",response))
}

export default {getAllClasses,getOneClass,create}
