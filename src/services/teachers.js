import axios from 'axios'
const URL = 'http://localhost:4000/teachers'

const createStudent = (newObject,{token}) =>{
    const config ={
        headers:{
            authorization: token
        }
    }
    console.log("PROFESOR QUE LLEGA AL SERVICIO: ",newObject)
    const request= axios.post(URL,newObject,config)
    return request.then(response=>response)
}

export default {createStudent}