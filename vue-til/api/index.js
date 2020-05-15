import axios from 'axios'

const client = axios.create()

client.defaults.baseURL = 'http://localhost:5000'

export const login = loginData => client.post('/login', loginData)
