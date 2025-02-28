import { combineReducers, configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import userSlice from './slices/userSlice'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  // blacklist: ['user'] 
};

const reducers =combineReducers({
  user:userSlice
})
const persistedReducer = persistReducer(persistConfig, reducers);
export const store = configureStore({
  reducer:persistedReducer,
  middleware:()=> [logger]
})

export const persistor = persistStore(store);
