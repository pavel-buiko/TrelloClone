import { createSlice } from "@reduxjs/toolkit";

type Board = {
  id: string;
  title: string;
  listIds: string[];
};

type List = {
  id: string;
  title: string;
  boardId: string;
  tasksId: string[];
};

type Task = {
  id: string;
  title: string;
  description: string;
  listId: string;
};

type BoardState = {
  boards: Record<string, Board>;
  lists: Record<string, List>;
  tasks: Record<string, Task>;
};

const initialState: BoardState = {
  boards: {},
  lists: {},
  tasks: {},
};

const boardSlice = createSlice({
  name: "boardSlice",
  initialState,
  reducers: {
    addBoard(state, action) {
      state.boards.push();
    },
  },
});
