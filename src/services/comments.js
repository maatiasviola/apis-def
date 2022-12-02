import axios from 'axios'
const URL = 'http://localhost:4000/comments'


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
    const config={
        headers:{
            authorization: token
        }
    }
    const request= axios.delete(`${URL}/${id}`,config)
    return request.then(response=>response)
}

export default {createComment,blockComment,removeComment}