import { configureStore } from "@reduxjs/toolkit";
import BoardReducer from "./reduxToolkit/boardSlice";
import UIReducer from "./reduxToolkit/UISlice";
export const store = configureStore({
    reducer: {
        board: BoardReducer,
        ui: UIReducer,
    },
});