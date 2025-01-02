import axios from "axios";

const ApiClient = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params:{
    key:'7169cec537e3465e813fa4fc5ec2140b'
  }
})

export default ApiClient