import { applyMiddleware, legacy_createStore,combineReducers } from "redux";
import thunk from 'redux-thunk';
import { userReducer,orderReducer } from "./reducer";


const rootReducer = combineReducers({
   users: userReducer,
   orders: orderReducer
});

export const store = legacy_createStore(
    rootReducer,
    applyMiddleware(thunk)
    );
    console.log("State:", store.getState())