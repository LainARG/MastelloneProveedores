import api from "../services/api";
import jwt_decode from "jwt-decode";






    

    const config = {
        headers: {
            "content-type": "application/json",
            Accept: "application/json",
        },
    };


    const logout = () => async () => {
        localStorage.removeItem("token");
    }


export default async function login(props) {
    let credentials = JSON.parse(props);

        if (credentials.Username == "" && credentials.Password == ""){
            window.location = "/internalUser/providerSelect";
        } else {
            
            console.log(credentials);
            await api
                .post(
                    "/auth",
                    {
                        Username: credentials.Username,
                        Password: credentials.Password,
                    },
                    config
                )
                .then((result) => {
                    if (result.status === 200) {
                        if (localStorage.getItem("token") == undefined) {
                            let token = ("Bearer " + result.data);
                            localStorage.setItem("token", JSON.stringify(token));
                            token = jwt_decode(result.data);
                            window.location.href = window.location.href;
                        }
                    }
                })
                .catch((e) => {
                    let errorMessage = "El nombre de usuario y/o contraseña no es correcto";
                });

        }
    }

