import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";

import {moviesAddReducer} from "./slices";


const rootReducer = combineReducers({
    moviesAddReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {setupStore}
