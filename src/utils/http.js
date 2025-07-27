import axios from 'axios';
export const request = axios.create({
    baseURL: 'https://dragonball-api.com/api/',
});
