import axios  from 'axios';

var api = axios.create();
api.defaults.baseURL = 'http://172.16.3.113:3000/';
api.defaults.headers.common['Content-Type'] = 'application/json';

export default api;