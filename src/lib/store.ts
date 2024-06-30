import { configureStore } from "@reduxjs/toolkit";
import user from "./features/auth/userSlice";
import counter from "./features/auth/counterSlice";

export const store = () => {
  return configureStore({
    reducer: { user, counter},
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof store>;

// Infer the 'RootState' and 'AppDispatch' types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];