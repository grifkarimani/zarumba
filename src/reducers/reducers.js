import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import AppReducer from "../components/App/Reducer/AppReducer.js";
import OptionsReducer from "../components/Options/Reducer/OptionsReducer.js";
import GameReducer from "../components/Game/Reducer/GameReducer.js";
import RegistrationReducer from "../components/Registration/Reducer/registrationReducer.js";

export default combineReducers({
    router: routerReducer,
    RegistrationReducer: RegistrationReducer,
    AppReducer: AppReducer,
    OptionsReducer: OptionsReducer,
    GameReducer: GameReducer
});
