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
  taskIds: string[];
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
      const { id, title } = action.payload;
      state.boards[id] = { id, title, listIds: [] };
    },
    addList(state, action) {
      const { id, title, boardId } = action.payload;
      state.lists[id] = { id, title, boardId, taskIds: [] };
      state.boards[boardId].listIds.push(id);
    },
    addTask(state, action) {
      const { id, title, listId } = action.payload;
      state.tasks[id] = { id, title, description: "", listId };
      state.lists[listId].taskIds.push(id);
    },
  },
});

export default boardSlice.reducer;

export const { addBoard, addList, addTask } = boardSlice.actions;
