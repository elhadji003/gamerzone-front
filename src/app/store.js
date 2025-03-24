import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; // LocalStorage
import { persistStore, persistReducer } from "redux-persist";
import authReducer from "../features/auth/authSlice";
import { authApi } from "../features/auth/authAPI";

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token", "role", "user"],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      authApi.middleware
    ),
});

export const persistor = persistStore(store);
