import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './features/auth/userSlice';
import uiSettingsReducer from './features/auth/uiSettingsSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const authPersistConfig = {
  key: 'user',
  storage: storage,
  whitelist: ['user'],
};

const rootReducer = combineReducers({
  user: persistReducer(authPersistConfig, userReducer),
  uiSettings: persistReducer(authPersistConfig, uiSettingsReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
