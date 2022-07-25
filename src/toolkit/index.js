import {configureStore, combineReducers} from '@reduxjs/toolkit';
import userSlice from './toolkitSlice';

const rootReducer = combineReducers({user: userSlice});

export const store = configureStore({
  reducer: rootReducer,
});
