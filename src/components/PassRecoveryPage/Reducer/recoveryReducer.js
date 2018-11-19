import { RECOVERY_SET_VALUE_BY_KEY } from "../Actions/actionTypes";

let initialState = {
    email: "",
    pass: "",
    operation: "pass-recovery",
    serverMess: null
};
const RecoveryReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECOVERY_SET_VALUE_BY_KEY:
            return {
                ...state,
                [action.payload.key]: action.payload.value
            };
        default:
            return state;
    }
};
export default RecoveryReducer;
