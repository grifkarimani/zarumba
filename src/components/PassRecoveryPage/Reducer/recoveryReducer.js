import {
  RECOVERY_SET_VALUE_BY_KEY,
  RECOVERY_SET_VALIDATION_MESSAGE,
  RECOVERY_CLEAN_FORM
} from "../Actions/actionTypes";

let initialState = {
  email: { value: "", validation: "" },
  operation: "password-recovery",
  serverMess: null
};
const RecoveryReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECOVERY_SET_VALUE_BY_KEY:
      return {
        ...state,
        [action.payload.key]: { value: action.payload.value, validation: "" }
      };
    case RECOVERY_SET_VALIDATION_MESSAGE:
      return {
        ...state,
        [action.payload.key]: {
          value: state[action.payload.key].value,
          validation: action.payload.message
        }
      };
    case RECOVERY_CLEAN_FORM:
      return {
        ...state,
        ...initialState
      };
    default:
      return state;
  }
};
export default RecoveryReducer;
