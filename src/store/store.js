import { combineReducers, getDefaultMiddleware, configureStore } from "@reduxjs/toolkit";
import mainSlice from './sliceStore/mainSlice';
 

const rootReducer = combineReducers({
    main: mainSlice,
});

const middleware = getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    thunk: true, 
});

export const store = configureStore({
    reducer: rootReducer,
    middleware
})