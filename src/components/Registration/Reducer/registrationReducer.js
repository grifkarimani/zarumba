import { SET_VALUE_BY_KEY } from "../Actions/actionTypes";

let initialState = {
    name: "",
    email: "",
    pass: "",
    confirmPass: ""
};
const RegistrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_VALUE_BY_KEY:
            return {
                ...state,
                [action.payload.key]: action.payload.value
            };
        default:
            return state;
    }
};
export default RegistrationReducer;
