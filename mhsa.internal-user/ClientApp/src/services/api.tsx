import axios from "axios";
export const apiUrl = `${window.location.protocol}//${window.location.host}/api`;


let getAuthenticationBearerToken = localStorage.getItem("token");
let AuthenticationBearerToken = authParser(getAuthenticationBearerToken);
const api = axios.create({
    baseURL: apiUrl

});

function authParser(token:any) {
    return JSON.parse(token);
}

function errorResponseHandler(error: any) {
  // check for errorHandle config
  if (
    error.config.hasOwnProperty("errorHandle") &&
    error.config.errorHandle === false
  ) {
    return Promise.reject(error);
  }

  // if has response show the error
  if (error.response) {
     
  }
}

api.interceptors.response.use((response) => response, errorResponseHandler);

export default api;
