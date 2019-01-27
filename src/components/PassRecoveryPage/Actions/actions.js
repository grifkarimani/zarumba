import {
  RECOVERY_SET_VALUE_BY_KEY,
  RECOVERY_SET_VALIDATION_MESSAGE,
  RECOVERY_CLEAN_FORM
} from "./actionTypes";

export const onSetValue = (value, key) => {
  return {
    type: RECOVERY_SET_VALUE_BY_KEY,
    payload: {
      key: key,
      value: value
    }
  };
};
export const onSetValidationMessage = (key, message) => {
  return {
    type: RECOVERY_SET_VALIDATION_MESSAGE,
    payload: {
      key,
      message
    }
  };
};
export const onCleanForm = () => {
  return {
    type: RECOVERY_CLEAN_FORM
  };
};
