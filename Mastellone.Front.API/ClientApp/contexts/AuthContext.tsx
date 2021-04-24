import { User } from "../types/user";
import api from "../services/authApi";

const config = {
  headers: {
    "content-type": "application/json",
    Accept: "application/json",
  },
};

const AuthReducer = (state: any, action: any) => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        token: action.payload.token,
        isAuthenticated: action.payload.isAuthenticated,
        errorMessage: action.payload.error,
      };
      case "logout":
      return {
        ...state,
        token: action.payload.token,
        isAuthenticated: action.payload.isAuthenticated,
        errorMessage: action.payload.error,
      };
    case "cleanError":
      return {
        ...state,
        errorMessage: "",
      };
  }
};

const logout = (dispatch: any) => async () => {
  localStorage.removeItem("token");
  dispatch({
    type: "logout",
    payload: { isAuthenticated: false, error: "", token: "" },
  });
}

const login = (dispatch: any) => async (user: User) => {
  let authenticated: boolean = false;
  let errorMessage: string = "";
  let token : string = "";

  await api
    .post(
      "/auth",
      {
        Username: user.Username,
        Password: user.Password,
      },
      config
    )
    .then((result) => {
        if (result.status === 200) {
            if (localStorage.getItem("token") == undefined) {
                let token = ("Bearer " + result.data);
                localStorage.setItem("token", JSON.stringify(token));
                authenticated = true;
            }
      }
    })
    .catch((e) => {
      errorMessage = "El nombre de usuario y/o contraseña no es correcto";
    });
  dispatch({
    type: "login",
    payload: { isAuthenticated: authenticated, error: errorMessage, token: token },
  });
};