import { LOGIN_SET_VALUE_BY_KEY } from "../Actions/actionTypes";

let initialState = {
    email: "",
    pass: "",
    operation: "login",
    serverMess: null
};
const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SET_VALUE_BY_KEY:
            return {
                ...state,
                [action.payload.key]: action.payload.value
            };
        default:
            return state;
    }
};
export default LoginReducer;
