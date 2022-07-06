import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import AuthReducer from "./Reducers/AuthReducer";
import UserReducers from "./Reducers/UserReducers";
const composerEnhancers = compose;
const reducers = combineReducers({ UserReducers, AuthReducer });
const authStore = createStore(
  AuthReducer,
  composerEnhancers(applyMiddleware(thunk))
);
const mainStore = createStore(
  // reducers,
  UserReducers,
  composerEnhancers(applyMiddleware(thunk))
);
const store = createStore(
  reducers,
  composerEnhancers(applyMiddleware(thunk))
);
export { authStore, mainStore, store };
