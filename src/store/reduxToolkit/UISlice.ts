import { createSlice } from "@reduxjs/toolkit";

type UIState = {
  selectedBoardId: string | null;
};

const initialState: UIState = {
  selectedBoardId: null,
};

const UISlice = createSlice({
  name: "UISlice",
  initialState,
  reducers: {
    selectBoard(state, action) {
      state.selectedBoardId = action.payload;
    },
  },
});

export default UISlice.reducer;
export const { selectBoard } = UISlice.actions;
