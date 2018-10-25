import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import AppReducer from "../components/App/Reducer/AppReducer.js";
import OptionsReducer from "../components/Options/Reducer/OptionsReducer.js";
import GameReducer from "../components/Game/Reducer/GameReducer.js";

export default combineReducers({
    router: routerReducer,
    AppReducer: AppReducer,
    OptionsReducer: OptionsReducer,
    GameReducer: GameReducer
});
