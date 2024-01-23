import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import storeReducer from "./reducers/storeReducer";
import bookReducer from "./reducers/bookReducer";
  
const combinedReducers = combineReducers({
    books : bookReducer,
    stores : storeReducer
})

export const store = createStore(combinedReducers, applyMiddleware(thunk))