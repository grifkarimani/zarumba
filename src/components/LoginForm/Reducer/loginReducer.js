import {
  LOGIN_SET_VALUE_BY_KEY,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_CLEAN_FORM,
  LOGIN_SET_VALIDATION_MESSAGE
} from "../Actions/actionTypes.js";

let initialState = {
  email: { value: "", validation: "" },
  password: { value: "", validation: "" },
  serverMess: "",
  operation: "login"
};
const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SET_VALUE_BY_KEY:
      return {
        ...state,
        [action.payload.key]: { value: action.payload.value, validation: "" }
      };
    case LOGIN_SET_VALIDATION_MESSAGE:
      return {
        ...state,
        [action.payload.key]: {
          value: state[action.payload.key].value,
          validation: action.payload.message
        }
      };
    case LOGIN_CLEAN_FORM:
      return {
        ...state,
        ...initialState
      };
    default:
      return state;
  }
};

export default LoginReducer;
