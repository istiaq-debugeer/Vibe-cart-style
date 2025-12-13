// src/lib/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { videoApi } from "./videoApi";

export const store = configureStore({
  reducer: {
    [videoApi.reducerPath]: videoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(videoApi.middleware),
});

// 🟢 EXPORT TYPES (must exist for use-redux.ts)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
