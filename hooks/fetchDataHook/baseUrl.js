import axios from 'axios';

const baseUrl = axios.create({ baseURL: "https://nestrettocoffee.com/dashboard" });

export default baseUrl;