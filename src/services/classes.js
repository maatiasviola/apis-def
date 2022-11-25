import axios from 'axios'
const URL = 'http://localhost:4000/classes'

const getAllClasses = () =>{
    const request= axios.get(URL)
    return request.then(response=>response.data.data)
}

const getOneClass = ({id}) =>{
    const request= axios.get(`${URL}/${id}`)
    return request.then(response=>response.data.data)
}

export default {getAllClasses,getOneClass}
