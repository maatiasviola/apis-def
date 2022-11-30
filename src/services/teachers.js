import axios from 'axios'
const URL = 'http://localhost:4000/teachers'

const createTeacher = (newObject,{token}) =>{
    const config ={
        headers:{
            authorization: token
        }
    }
    console.log("PROFESOR QUE LLEGA AL SERVICIO: ",newObject)
    const request= axios.post(URL,newObject,config)
    return request.then(response=>response)
}

const getTeacherById = (id) =>{
    const request= axios.get(`${URL}/${id}`)
    return request.then(response=>response.data.data)
}

export default {createTeacher,getTeacherById}