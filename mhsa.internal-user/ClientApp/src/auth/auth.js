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
                    getToken();
                    let token = ("Bearer " + result.data);
                    console.log(token);
                    if (token.includes("unauthorized")){
                        alert("Credenciales inválidas");
                    }
                    else{
                        localStorage.removeItem("token");
                        localStorage.removeItem("iUserName");
                        localStorage.setItem("token", JSON.stringify(token));
                        localStorage.setItem("iUserName", credentials.Username);
                        token = jwt_decode(result.data);
                        window.location.href = "/portal/internalUser";
                    }
                    
                })
                


    async function getToken() {

        let token = await api.get("/auth").then((result) => {
            localStorage.removeItem("tknPerms");
            localStorage.setItem("tknPerms", JSON.stringify(result.data));
        });
    }


    }
