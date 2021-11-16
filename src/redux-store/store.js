import {combineReducers} from "redux";
import profileReducer from "../redux/profile-reducer";
import chatReducer from "../redux/chat-reducer";

const {createStore} = require("redux");

let reducers = combineReducers({
    profilePage: profileReducer,
    chatPage: chatReducer,
});

let store = createStore(reducers);

export default store;
