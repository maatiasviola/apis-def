import axios from 'axios'
const URL = 'http://localhost:4000/users/'

const getUser =  ({id}) =>{
    const request = axios.get(`${URL}/${id}`)
    return request.then(response=>response.data.data)
}


export default {getUser}