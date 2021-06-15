import axios from 'axios';
import port from '../config';

const $host = axios.create({
  baseURL: "https://desolate-cliffs-92726.herokuapp.com/"
})

const $authHost = axios.create({
  baseURL: "https://desolate-cliffs-92726.herokuapp.com/"
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