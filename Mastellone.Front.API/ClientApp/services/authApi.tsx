import axios from "axios";
import toast from "../components/toast";
export const apiUrl = `${window.location.protocol}//${window.location.host}/api`;

const api = axios.create({
    baseURL: apiUrl,
});

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
        if (error.response.status === 500 && error.response.data.error) {
            toast.error(error.response.data.error);
        } else if (error.response.data.errors) {
            if (Array.isArray(error.response.data.errors))
                toast.error(error.response.data.errors[0]);
            else {
                toast.error(error.response.data.errors.message);
            }
        }
    }
}

api.interceptors.response.use((response) => response, errorResponseHandler);

export default api;
