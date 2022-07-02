import { applyMiddleware, compose, createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import AuthReducer from "./AuthReducer";
const composerEnhancers = compose;
const store = createStore(
  AuthReducer,
  composerEnhancers(applyMiddleware(thunk))
);
export default store;