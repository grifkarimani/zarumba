import {
  LOGIN_SET_VALUE_BY_KEY,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_CLEAN_FORM,
  LOGIN_SET_VALIDATION_MESSAGE
} from "./actionTypes";

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
  return {
    type: LOGIN_SUCCESS,
    payload: { ...data }
  };
};
export const onLoginFailure = data => {
  return {
    type: LOGIN_FAILURE,
    payload: { ...data }
  };
};
export const onCleanForm = () => {
  return {
    type: LOGIN_CLEAN_FORM
  };
};

export const onSetValidationMessage = (key, message) => {
  return {
    type: LOGIN_SET_VALIDATION_MESSAGE,
    payload: {
      key,
      message
    }
  };
};
