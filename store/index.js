import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import storeReducer from "./reducers/storeReducer";
import bookReducer from "./reducers/bookReducer";
import listBooksReducer from "./reducers/listBooksReducer";
import promoReducer from "./reducers/promoReducer";
import channelYoutubeReducer from "./reducers/channelYoutubeReducer";
import booksIdReducer from "./reducers/booksIdReducer";


const combinedReducers = combineReducers({
    books : bookReducer,
    stores : storeReducer, 
    listBooks : listBooksReducer,
    promos : promoReducer,
    channels : channelYoutubeReducer, 
    booksID : booksIdReducer, 
})      

export const store = createStore(combinedReducers, applyMiddleware(thunk))