import axios from "axios";

export const api = axios.create( {
    baseURL: 'http://103.125.217.122:89'
} );
