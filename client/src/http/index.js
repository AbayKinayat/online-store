import axios from 'axios';
import port from '../config';

const $host = axios.create({
  baseURL: 'http://ec2-54-90-13-87.compute-1.amazonaws.com:' + port + '/'
})

const $authHost = axios.create({
  baseURL: 'http://ec2-54-90-13-87.compute-1.amazonaws.com:'  + port + '/'
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