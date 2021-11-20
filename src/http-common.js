import axios from 'axios'

export default axios.create({
    baseURL: 'https://personal-crud-api.herokuapp.com/api',
    headers: {
        "Content-type": "application/json"
    }
})