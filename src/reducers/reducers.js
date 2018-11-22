import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import AppReducer from "../components/App/Reducer/AppReducer.js";
import OptionsReducer from "../components/Options/Reducer/OptionsReducer.js";
import GameReducer from "../components/Game/Reducer/GameReducer.js";
import RegistrationReducer from "../components/Registration/Reducer/registrationReducer.js";
import LoginReducer from "../components/LoginForm/Reducer/loginReducer.js";
import RecoveryReducer from "../components/PassRecoveryPage/Reducer/recoveryReducer.js";

export default history =>
    combineReducers({
        router: connectRouter(history),
        LoginReducer: LoginReducer,
        RegistrationReducer: RegistrationReducer,
        RecoveryReducer: RecoveryReducer,
        AppReducer: AppReducer,
        OptionsReducer: OptionsReducer,
        GameReducer: GameReducer
    });
