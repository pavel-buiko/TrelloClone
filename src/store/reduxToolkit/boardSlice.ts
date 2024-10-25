import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    deleteBoard(state, action) {
      const { id } = action.payload;
      const listIdsToDelete = state.boards[id].listIds;

      listIdsToDelete.forEach((listId) => {
        const taskIdsToDelete = state.lists[listId].taskIds;
        taskIdsToDelete.forEach((taskId) => {
          delete state.tasks[taskId];
        });
        delete state.lists[listId];
      });
      delete state.boards[id];
    },
    addList(state, action) {
      const { id, title, boardId } = action.payload;
      state.lists[id] = { id, title, boardId, taskIds: [] };
      state.boards[boardId].listIds.push(id);
    },
    updateListTitle(state, action) {
      const { id, title } = action.payload;
      if (state.lists[id]) {
        state.lists[id].title = title;
      }
    },
    deleteList(state, action) {
      const { id } = action.payload;
      const boardId = state.lists[id].boardId;

      const taskIdsToDelete = state.lists[id].taskIds;
      taskIdsToDelete.forEach((taskId) => {
        delete state.tasks[taskId];
      });

      state.boards[boardId].listIds = state.boards[boardId].listIds.filter(
        (listId) => listId !== id
      );

      delete state.lists[id];
    },
    addTask(state, action) {
      const { id, title, listId } = action.payload;
      state.tasks[id] = { id, title, description: "", listId };
      state.lists[listId].taskIds.push(id);
    },
    updateTaskTitle(state, action) {
      const { id, title } = action.payload;
      if (state.tasks[id]) {
        state.tasks[id].title = title;
      }
    },
    deleteTask(state, action) {
      const { id } = action.payload;
      const listId = state.tasks[id].listId;

      state.lists[listId].taskIds = state.lists[listId].taskIds.filter(
        (taskId) => taskId != id
      );

      delete state.tasks[id];
    },
    updateTaskDescription(state, action) {
      const { id, description } = action.payload;
      console.log(action.payload);
      if (state.tasks[id]) {
        state.tasks[id].description = description;
        console.log("Updates task description ", state.tasks[id].description);
      }
    },
    moveTask: (
      state,
      action: PayloadAction<{
        taskId: string;
        sourceListId: string;
        destinationListId: string;
        sourceIndex: number;
        destinationIndex: number;
      }>
    ) => {
      const {
        taskId,
        sourceListId,
        destinationListId,
        sourceIndex,
        destinationIndex,
      } = action.payload;

      state.lists[sourceListId].taskIds.splice(sourceIndex, 1);

      state.lists[destinationListId].taskIds.splice(
        destinationIndex,
        0,
        taskId
      );
    },
  },
});

export default boardSlice.reducer;

export const {
  addBoard,
  addList,
  addTask,
  updateListTitle,
  updateTaskTitle,
  deleteBoard,
  deleteList,
  deleteTask,
  updateTaskDescription,
  moveTask,
} = boardSlice.actions;
