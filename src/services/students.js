import axios from 'axios'
const URL = 'http://localhost:4000/students'

const createStudent = (newObject,{token}) =>{
    const config ={
        headers:{
            authorization: token
        }
    }
    const request= axios.post(URL,newObject,config)
    return request.then(response=>response.data)
}

export default {createStudent}