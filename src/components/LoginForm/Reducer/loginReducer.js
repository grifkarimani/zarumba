import { LOGIN_SET_VALUE_BY_KEY, CLEAN_FORM } from "../Actions/actionTypes";

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
        case CLEAN_FORM:
            return {
                ...state,
                email: "",
                pass: ""
            };
        default:
            return state;
    }
};

export default LoginReducer;
