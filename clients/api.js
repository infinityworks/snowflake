import axios from 'axios';

const client = axios.create({
  baseURL: 'https://nozeysr7y6.execute-api.eu-west-1.amazonaws.com/test'
})

export default client;