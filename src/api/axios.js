import axios from 'axios';

const token = localStorage.getItem('Token');

export const baseURL = 'https://bootcamp.akbolat.net/';
export default axios.create({ baseURL });

export const URL = {
    register    :   '/auth/local/register',
    login       :   '/auth/local',
    brands      :   '/brands',
    categories  :   '/categories',
    colors      :   '/colors',
    products    :   '/products',
    offers      :   '/offers',
    statuses    :   '/using-statuses'
}


export const Bearer = axios.create({
    baseURL: 'https://bootcamp.akbolat.net/',
    timeout: 1000,
    headers: {'Authorization': 'Bearer ' + token}
  });
  
 