import { MODE_ACCEPT } from "../Actions/actionTypes";

const initialState = { loggedIn: false, guestMode: null, guestModeAccept: false, currentUser: null };

const app = (state = initialState, action) => {
    switch (action.type) {
        case MODE_ACCEPT:
            return {
                ...state,
                guestModeAccept: !state.guestModeAccept
            };
        default:
            return state;
    }
};
export default app;
