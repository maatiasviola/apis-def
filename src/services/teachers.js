import axios from 'axios'
const URL = 'http://localhost:4000/teachers'

const createTeacher = (newObject) =>{
    const request= axios.post(URL,newObject)
    return request.then(response=>response.data)
}

const getTeacherById = (id) =>{
    const request= axios.get(`${URL}/${id}`)
    return request.then(response=>response.data.data)
}

export default {createTeacher,getTeacherById}