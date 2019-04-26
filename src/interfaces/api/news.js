import axios from 'axios';

const api = axios.create({
    crossDomain: true,
    responseType: 'json',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});
export default api;
