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

const updateClass = (newObject,id,{token})=>{
    const config={
        headers:{
            authorization: token
        }
    }
    console.log(newObject)
    console.log(id)
    const request= axios.put(`${URL}/${id}`,newObject,config)
    return request.then(response=>console.log(response))
}

const removeClass = ({id,user_role,token}) => {
    const config={
        headers:{
            authorization: token
        }
    }
    const request= axios.delete(`${URL}/${id}`,{data:user_role},config)
    return request.then(response=>response)
}

const unrollStudent = ({estudianteId,user_role,token}) => {
    const config={
        headers:{
            authorization: token
        }
    }
    const request= axios.put(`${URL}/unrollStudent/${estudianteId}`,{user_role},config)
    return request.then(response=>response)
}

export default {getAllClasses,getOneClass,create,updateClass,removeClass,unrollStudent}
