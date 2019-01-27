import {
  REGISTRATION_SET_VALUE_BY_KEY,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILURE,
  REGISTRATION_CLEAN_FORM,
  REGISTRATION_SET_VALIDATION_MESSAGE
} from "./actionTypes";

export const onSetValue = (value, key) => {
  return {
    type: REGISTRATION_SET_VALUE_BY_KEY,
    payload: {
      key: key,
      value: value
    }
  };
};
export const onRegistrationSuccess = data => {
  return {
    type: REGISTRATION_SUCCESS,
    payload: { ...data }
  };
};
export const onRegistrationFailure = data => {
  return {
    type: REGISTRATION_FAILURE,
    payload: { ...data }
  };
};
export const onCleanForm = () => {
  return {
    type: REGISTRATION_CLEAN_FORM
  };
};

export const onSetValidationMessage = (key, message) => {
  return {
    type: REGISTRATION_SET_VALIDATION_MESSAGE,
    payload: {
      key,
      message
    }
  };
};
