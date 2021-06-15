import axios from 'axios';
import port from '../config';

const $host = axios.create({
  baseURL: 'http://localhost:' + port + '/'
})

const $authHost = axios.create({
  baseURL: 'http://localhost:'  + port + '/'
})

const authInterceptor = config => { 
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
  return config
} 

$authHost.interceptors.request.use(authInterceptor)

export {
  $host,
  $authHost
}