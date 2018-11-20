import { LOGIN_SET_VALUE_BY_KEY, LOGIN_SUCCESS, LOGIN_FAILURE } from "./actionTypes";

export const onSetValue = (value, key) => {
    return {
        type: LOGIN_SET_VALUE_BY_KEY,
        payload: {
            key: key,
            value: value
        }
    };
};
export const onLoginSuccess = data => {
    console.log("onLoginSuccess", data);
    return {
        type: LOGIN_SUCCESS,
        payload: { ...data }
    };
};
export const onLoginFailure = data => {
    console.log("onLoginFailure", data);
    return {
        type: LOGIN_FAILURE,
        payload: { ...data }
    };
};
