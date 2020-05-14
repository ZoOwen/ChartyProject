/** @format */

import axios from "axios";

export const GET_DATA_SIGNIN = "GET_DATA_SIGNIN";

export const postSignIn = (postObj) => {
    return (dispatch) => {
        axios
            .post("https://backend-go-charity.herokuapp.com/login", postObj)
            .then((response) => {
                dispatch(getUser(response.data.token));
                console.log(response);
            })
            .catch((error) => console.log(error.message));
    };
};

export const getUser = (token) => {
    return (dispatch) => {
        axios
            .get("https://backend-go-charity.herokuapp.com/users/",{headers:{Autorization:`Bearer ${token}`}})
            .then((response) => {
                dispatch(getSignIn(response.data));
            })
            .catch((error) => console.log(error.message));
    };
};

export const getSignIn = (result) => {
    return {
        type: GET_DATA_SIGNIN,
        result,
    };
};
