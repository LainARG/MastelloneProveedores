"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiUrl = void 0;
var axios_1 = require("axios");
exports.apiUrl = window.location.protocol + "//" + window.location.host + "/api";
var getAuthenticationBearerToken = localStorage.getItem("token");
var AuthenticationBearerToken = authParser(getAuthenticationBearerToken);
console.log(exports.apiUrl);
var api = axios_1.default.create({
    baseURL: exports.apiUrl,
    headers: { Authorization: "" + AuthenticationBearerToken }
});
function authParser(token) {
    return JSON.parse(token);
}
function errorResponseHandler(error) {
    // check for errorHandle config
    if (error.config.hasOwnProperty("errorHandle") &&
        error.config.errorHandle === false) {
        return Promise.reject(error);
    }
    // if has response show the error
    if (error.response) {
    }
}
api.interceptors.response.use(function (response) { return response; }, errorResponseHandler);
exports.default = api;
//# sourceMappingURL=api.js.map