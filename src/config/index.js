const API_URL = process.env.API_URL || `${window.location.protocol}//${window.location.host}/api/`;
export const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV.toUpperCase() : 'DEVELOPMENT';
export const BASE_URL = NODE_ENV === 'DEVELOPMENT' ? 'https://reqres.in/api/' : API_URL;

console.log(process.env, BASE_URL);
