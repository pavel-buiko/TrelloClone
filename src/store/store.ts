import { configureStore } from "@reduxjs/toolkit";
import BoardReducer from "./reduxToolkit/boardSlice";
import UIReducer from "./reduxToolkit/UISlice";
export const store = configureStore({
  reducer: {
    board: BoardReducer,
    ui: UIReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
