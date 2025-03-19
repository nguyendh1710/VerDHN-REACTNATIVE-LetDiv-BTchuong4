import axios from 'axios';

const HOST='http://192.168.1.7:3100';

export const instance = axios.create({
    baseURL:HOST
});
