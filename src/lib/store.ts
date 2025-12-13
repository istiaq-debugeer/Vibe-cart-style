import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "./videoSlice";

export const store = configureStore({
  reducer: {
    video: videoReducer,   // THIS MUST EXIST
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
