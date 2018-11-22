import { MODE_ACCEPT, LOG_OUT, TOGGLE_MENU } from "../Actions/actionTypes";
import { LOGIN_SUCCESS, LOGIN_FAILURE } from "../../LoginForm/Actions/actionTypes";

const initialState = { loggedIn: false, guestMode: null, guestModeAccept: false, currentUser: null, serverMess: null, visibilityState: { menu: false } };

const app = (state = initialState, action) => {
    switch (action.type) {
        case MODE_ACCEPT:
            return {
                ...state,
                guestModeAccept: !state.guestModeAccept
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                currentUser: action.payload,
                serverMess: null
            };
        case "ON_FAKEENTER":
            return {
                ...state,
                loggedIn: true,
                currentUser: action.payload,
                serverMess: null
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                loggedIn: false,
                serverMess: action.payload.message
            };
        case LOG_OUT:
            return {
                ...state,
                loggedIn: false,
                currentUser: null,
                visibilityState: { ...state.visibilityState, menu: false }
            };
        case TOGGLE_MENU:
            return {
                ...state,
                visibilityState: { ...state.visibilityState, menu: !state.visibilityState.menu }
            };
        default:
            return state;
    }
};
export default app;
