import axios from 'axios'
const URL = 'http://localhost:4000/hirings'

const createHiring = (newObject, {token}) => {
    const config ={
        headers:{
            authorization: token
        }
    }
    console.log("CONTRATACION QUE LLEGA AL SERVICIO: ",newObject)
    const request= axios.post(URL,newObject,config)
    return request.then(response=>response.data.createdComment)
}

export default {createHiring}