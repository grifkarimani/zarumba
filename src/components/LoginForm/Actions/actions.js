import { LOGIN_SET_VALUE_BY_KEY } from "./actionTypes";

export const onSetValue = (value, key) => {
    return {
        type: LOGIN_SET_VALUE_BY_KEY,
        payload: {
            key: key,
            value: value
        }
    };
};
