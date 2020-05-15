/** @format */
import axios from "axios";
// import jwt from "jwt-decode";

const queryString = require("query-string");

export const GET_DATA_SIGNIN = "GET_DATA_SIGNIN";

export const postSignIn = (values, history, event) => (dispatch) => {
    event.preventDefault();
    const email = values.email;
    const password = values.password;

    return axios
        .post(
            "https://backend-go-charity.herokuapp.com/login",
            queryString.stringify({ email, password })
        )
        .then((response) => {
            if (response.data.token !== undefined) {
                console.log(response);
                localStorage.setItem("token", response.data.token);

                dispatch(getSignIn(response.data));
                alert("login success");
                history.push("/");
            }
                
        })

        .catch(() => alert("Password atau email salah"));
};

export const getSignIn = (data) => {
    return {
        type: GET_DATA_SIGNIN,
        payload: data,
    };
};
