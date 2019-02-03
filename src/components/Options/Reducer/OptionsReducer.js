import initialState from "./initialState";

const initial = {
  moneyBall: {
    defaultValue: 1,
    step: 1
  },
  lastBallPoints: {
    defaultValue: 2,
    step: 1
  },
  customBallPrice: {
    defaultValue: 0.5,
    step: 0.5
  }
};

const options = (state = initialState, action) => {
  switch (action.type) {
    case "INCREACE_VALUE":
      let newState = Object.assign({}, state);
      newState.options[action.payload.optionKey] = {
        ...state.options[action.payload.optionKey],
        setContainer: { ...state.options[action.payload.optionKey].setContainer, defaultValue: action.payload.value }
      };
      return { ...newState };
    case "REDUCE_VALUE":
      newState = Object.assign({}, state);
      newState.options[action.payload.optionKey] = {
        ...state.options[action.payload.optionKey],
        setContainer: { ...state.options[action.payload.optionKey].setContainer, defaultValue: action.payload.value }
      };
      return { ...newState };
    case "ADD_PLAYER":
      return {
        ...state,
        players: {
          ...state.players,
          [action.payload.id]: {
            name: action.payload.name,
            validation: action.payload.validation,
            canRemove: action.payload.canRemove
          }
        }
      };
    case "DELETE_PLAYER":
      let newPlayers = state.players;
      delete newPlayers[action.payload.id];
      return {
        ...state,
        players: { ...newPlayers }
      };
    case "SET_NAME":
      return {
        ...state,
        players: {
          ...state.players,
          [action.payload.id]: { ...state.players[action.payload.id], name: action.payload.name, validation: "" }
        }
      };
    case "SET_MARKER":
      return {
        ...state,
        markerName: action.payload
      };
    case "OPTIONS_SET_VALIDATION_MESSAGE":
      return {
        ...state,
        players: { ...state.players, [action.payload.id]: { ...state.players[action.payload.id], validation: action.payload.message } }
      };
    case "CHANGE_STATE":
      newState = Object.assign({}, state);
      newState.options[action.payload.optionKey] = {
        ...newState.options[action.payload.optionKey],
        currentState: action.payload.optionState
      };
      if (action.payload.optionState === "disabled") {
        newState.options[action.payload.optionKey].setContainer = initial[action.payload.optionKey];
      }
      return {
        ...newState
      };
    default:
      return state;
  }
};

export default options;
