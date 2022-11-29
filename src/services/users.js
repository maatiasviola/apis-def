import axios from 'axios'
const URL = 'http://localhost:4000/users/'

const getUser =  ({id}) =>{
    const request = axios.get(`${URL}/${id}`)
    return request.then(response=>response.data.data)
}

const createUser = (newObject) => {
    console.log("USUARIO QUE LLEGA AL SERVICIO: ",newObject)
    const request= axios.post(URL,newObject)
    return request.then(response=>response)
}

export default {getUser,createUser}