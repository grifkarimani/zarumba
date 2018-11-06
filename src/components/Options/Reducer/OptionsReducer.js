import initialState from "./initialState";

const options = (state = initialState, action) => {
    switch (action.type) {
        case "INCREACE_VALUE":
            let newState = Object.assign({}, state);
            newState.options[action.payload].optionValue = state.options[action.payload].optionValue + state.options[action.payload].setContainer.step;
            return { ...newState };
        case "REDUCE_VALUE":
            newState = Object.assign({}, state);
            newState.options[action.payload].optionValue = state.options[action.payload].optionValue - state.options[action.payload].setContainer.step;
            return { ...newState };
        case "ADD_PLAYER":
            return {
                ...state,
                players: [...state.players, action.payload]
            };
        case "DELETE_PLAYER":
            let newList = state.players.filter(it => it.id !== action.payload);
            return {
                ...state,
                players: newList
            };
        case "SET_NAME":
            let newNameList = state.players.map(it => {
                it.name = it.id == action.payload.id ? action.payload.name : it.name;
                return it;
            });
            return {
                ...state,
                players: newNameList
            };
        case "SET_MARKER":
            return {
                ...state,
                markerName: action.payload
            };
        case "SELECT_OPTION":
            console.log("action", action);
            newState = Object.assign({}, state);
            newState.options[action.payload.key].isSelected = action.payload.value;
            return {
                ...newState
            };
        default:
            return state;
    }
};

export default options;
