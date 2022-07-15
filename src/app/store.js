import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import counterReducer from "../features/counter/counterSlice";
const middlewares = [
    thunk
]
export const store = configureStore({
    reducer:{
        counter:counterReducer
    }
},applyMiddleware(middlewares))