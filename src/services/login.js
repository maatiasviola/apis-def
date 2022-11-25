import axios from 'axios'
const URL = 'http://localhost:4000/users/login'

const login = async credentials =>{
    const {data} = await axios.post(URL,credentials)
    console.log(data)
    return data
}


export default {login}