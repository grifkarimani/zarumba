import { ADD_PLAYER, DELETE_PLAYER, SET_NAME, SELECT_OPTION, SET_MARKER, INCREACE_VALUE, REDUCE_VALUE } from "./actionTypes";
export const increase = key => ({
    type: INCREACE_VALUE,
    payload: key
});
export const reduce = key => ({
    type: REDUCE_VALUE,
    payload: key
});
export const addNewPlayer = () => ({
    type: ADD_PLAYER,
    payload: {
        id: Date.now().toString(),
        name: "",
        canRemove: true
    }
});
export const removePlayer = id => ({
    type: DELETE_PLAYER,
    payload: id
});
export const setPlayerName = event => ({
    type: SET_NAME,
    payload: {
        id: event.target.id,
        name: event.target.value
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
