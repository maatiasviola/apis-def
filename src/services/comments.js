import axios from 'axios'
const URL = 'http://localhost:4000/comments'
const URL2 = 'http://localhost:4000/emails'

const createComment = (newObject,{token}) =>{
    const config ={
        headers:{
            authorization: token
        }
    }
    console.log("OBJETO QUE LLEGA AL SERVICIO: ",newObject)
    const request= axios.post(URL,newObject,config)
    return request.then(response=>response.data.createdComment)
}

const blockComment = ({id,token}) => {
    const config ={
        headers:{
            authorization: token
        }
    }
    const request = axios.put(`${URL}/${id}`,config)
    return request.then(response=>response.data)
}

const removeComment = (id,{token}) => {
    console.log('id',id,'token',token)
    const config={
        headers:{
            authorization: token
        }
    }
    const request= axios.put(`${URL}/remove/${id}`,{},config)
    return request.then(response=>console.log(response))
}

const notificarAlumno = (newObject) => {
    const request= axios.post(`${URL2}`,newObject)
    return request.then(response=>response.data)
}

export default {createComment,blockComment,removeComment, notificarAlumno}