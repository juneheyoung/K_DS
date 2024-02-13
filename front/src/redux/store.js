import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/es/storage/session";
import rootReducer from "./reducers";
// import userReducer from './userSlice';

const persistConfig = {
  key: 'root',
  storage: sessionStorage,
  whitelist: ['user'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export default store;
