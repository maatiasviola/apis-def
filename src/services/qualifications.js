import axios from 'axios'
const URL = 'http://localhost:4000/qualifications'

const createQualification = (newObject, {token}) => {
    const config ={
        headers:{
            authorization: token
        }
    }
    console.log("Calificacion QUE LLEGA AL SERVICIO: ",newObject)
    const request= axios.post(URL,newObject,config)
    return request.then(response=>response)
}

const updateQualification = ({newObject,id,token})=>{
    const config={
        headers:{
            authorization: token
        }
    }
    const request= axios.put(`${URL}/${id}`,newObject,config)
    return request.then(response=>response)
}

export default {createQualification,updateQualification}