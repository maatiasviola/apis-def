import axios from 'axios'
const URL = 'http://localhost:4000/hirings'

const createHiring = (newObject,{token}) => {
    const config ={
        headers:{
            authorization: token
        }
    }
    console.log("CONTRATACION QUE LLEGA AL SERVICIO: ",newObject)
    const request= axios.post(URL,newObject,config)
    return request.then(response=>response.data.data)
}

const approveHiring = (id,{token}) => {
    const config ={
        headers:{
            authorization: token
        }
    }
    const request = axios.put(`${URL}/approve/${id}`,config)
    return request.then(response=>response.data)
}

const removeHiring = (id,{token}) => {
    const config ={
        headers:{
            authorization: token
        }
    }
    const request = axios.delete(`${URL}/${id}`,config)
    return request.then(response=>response)
}

const getHiringsById = (id) => {
    const request = axios.get(`${URL}/${id}`)
    return request.then(response=>response.data.data)
}

export default {createHiring, approveHiring,removeHiring,getHiringsById}