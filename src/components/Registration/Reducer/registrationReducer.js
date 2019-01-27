import {
  REGISTRATION_SET_VALUE_BY_KEY,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILURE,
  REGISTRATION_CLEAN_FORM,
  REGISTRATION_SET_VALIDATION_MESSAGE
} from "../Actions/actionTypes.js";

let initialState = {
  name: { value: "", validation: "" },
  email: { value: "", validation: "" },
  password: { value: "", validation: "" },
  confirmPassword: { value: "", validation: "" },
  operation: "registration",
  serverMess: ""
};
const RegistrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTRATION_SET_VALUE_BY_KEY:
      return {
        ...state,
        [action.payload.key]: { value: action.payload.value, validation: "" }
      };
    case REGISTRATION_SET_VALIDATION_MESSAGE:
      return {
        ...state,
        [action.payload.key]: {
          value: state[action.payload.key].value,
          validation: action.payload.message
        }
      };
    case REGISTRATION_CLEAN_FORM:
      return {
        ...state,
        ...initialState
      };
    default:
      return state;
  }
};
export default RegistrationReducer;
