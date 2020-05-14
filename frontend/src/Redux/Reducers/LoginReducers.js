/** @format */

import { GET_DATA_SIGNIN } from "../Actions/LoginActions";

const initState = {
    data: [],
};

const getSignIn = (state = initState, action) => {
    switch (action.type) {
        case GET_DATA_SIGNIN:
            return {
                data: action.result
            };

        default:
            return state;
    }
};

export default getSignIn;
