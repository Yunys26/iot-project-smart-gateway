import { combineReducers, getDefaultMiddleware, configureStore } from "@reduxjs/toolkit";
import mainSlice from './sliceStore/mainSlice';
import modalsSlice from './sliceStore/modalsSlice';
 

const rootReducer = combineReducers({
    main: mainSlice,
    modals: modalsSlice,
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