import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import userSlice from './toolkitSlice';

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});

const rootReducer = combineReducers({user: userSlice});

export const store = configureStore({
  reducer: rootReducer,
  middleware,
});
