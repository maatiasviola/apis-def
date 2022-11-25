import axios from 'axios'
const URL = 'http://localhost:4000/comments'


const createComment = (newObject,{token}) =>{
    const config ={
        headers:{
            Authorization: token
        }
    }
    console.log("OBJETO SERVICIO: ",newObject)
    const request= axios.post(URL,newObject,config)
    return request.then(response=>console.log("RESPUESTA: ",response))
}

export default {createComment}