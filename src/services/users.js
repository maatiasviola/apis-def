import axios from 'axios'
const URL = 'http://localhost:4000/users'

const getUser =  ({id}) =>{
    const request = axios.get(`${URL}/${id}`)
    return request.then(response=>response.data.data)
}

const getUserByEmail =  ({email}) =>{
    const request = axios.get(`${URL}/email/${email}`)
    return request.then(response=>response.data)
}

const createUser = (newObject) => {
    const request= axios.post(URL,newObject)
    return request.then(response=>response.data.createdUser)
}

const checkVerificationAnswer = (newObject) => {
    const request= axios.post(`${URL}/checkAnswer`,newObject)
    return request.then(response=>response.data)
}

const updatePassword = (newObject)=>{
    const request= axios.put(`${URL}/updatePassword`,newObject)
    return request.then(response=>response.data)
}

export default {getUser, createUser, getUserByEmail, checkVerificationAnswer, updatePassword}