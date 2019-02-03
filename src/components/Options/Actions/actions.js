import {
  ADD_PLAYER,
  DELETE_PLAYER,
  SET_NAME,
  SELECT_OPTION,
  SET_MARKER,
  INCREACE_VALUE,
  REDUCE_VALUE,
  CHANGE_STATE,
  OPTIONS_SET_VALIDATION_MESSAGE
} from "./actionTypes";

import uuidv4 from "uuid/v4";

export const increase = (optionKey, value) => {
  return {
    type: INCREACE_VALUE,
    payload: {
      optionKey: optionKey,
      value: value
    }
  };
};
export const reduce = (optionKey, value) => ({
  type: REDUCE_VALUE,
  payload: {
    optionKey: optionKey,
    value: value
  }
});
export const onChangeState = (optionKey, optionState) => ({
  type: CHANGE_STATE,
  payload: {
    optionKey: optionKey,
    optionState: optionState
  }
});

export const addNewPlayer = () => ({
  type: ADD_PLAYER,
  payload: {
    id: uuidv4(),
    name: "",
    validation: "",
    canRemove: true
  }
});
export const removePlayer = id => ({
  type: DELETE_PLAYER,
  payload: { id: id }
});
export const setPlayerName = (id, name) => ({
  type: SET_NAME,
  payload: {
    id: id,
    name: name
  }
});
export const setOption = (key, value) => ({
  type: SELECT_OPTION,
  payload: {
    key: key,
    value: value
  }
});

export const setMarker = name => {
  let value = name;
  return {
    type: SET_MARKER,
    payload: value
  };
};
export const onSetValidationMessage = (id, message) => {
  return {
    type: OPTIONS_SET_VALIDATION_MESSAGE,
    payload: {
      id: id,
      message: message
    }
  };
};
