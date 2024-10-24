import { configureStore } from "@reduxjs/toolkit";
import BoardReducer from "./reduxToolkit/boardSlice";
export const store = configureStore({
  reducer: {
    board: BoardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
