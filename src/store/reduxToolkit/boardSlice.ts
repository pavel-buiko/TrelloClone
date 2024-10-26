import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

type ActivityLogEntry = {
  id: string;
  message: string;
  timestamp: string;
};

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
  activityLog: ActivityLogEntry[];
};

const initialState: BoardState = {
  boards: {},
  lists: {},
  tasks: {},
  activityLog: [],
};

const boardSlice = createSlice({
  name: "boardSlice",
  initialState,
  reducers: {
    addBoard(state, action) {
      const { id, title } = action.payload;
      state.boards[id] = { id, title, listIds: [] };
      state.activityLog.push({
        id: uuidv4(),
        message: `Board "${title}" was added`,
        timestamp: new Date().toLocaleString(),
      });
    },
    updateBoardTitle(state, action) {
      const { id, title } = action.payload;
      if (state.boards[id]) {
        const oldTitle = state.boards[id].title;
        state.boards[id].title = title;
        state.activityLog.push({
          id: uuidv4(),
          message: `Board title changed from "${oldTitle}" to "${title}"`,
          timestamp: new Date().toLocaleString(),
        });
      }
    },
    deleteBoard(state, action) {
      const { id } = action.payload;
      const listIdsToDelete = state.boards[id].listIds;
      state.activityLog.push({
        id: uuidv4(),
        message: `Board "${state.boards[id].title}" was deleted`,
        timestamp: new Date().toLocaleString(),
      });
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
      state.activityLog.push({
        id: uuidv4(),
        message: `List "${title}" was added to board "${state.boards[boardId].title}"`,
        timestamp: new Date().toLocaleString(),
      });
    },
    updateListTitle(state, action) {
      const { id, title } = action.payload;
      if (state.lists[id]) {
        const oldTitle = state.lists[id].title;
        state.lists[id].title = title;
        state.activityLog.push({
          id: uuidv4(),
          message: `List title changed from "${oldTitle}" to "${title}"`,
          timestamp: new Date().toLocaleString(),
        });
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

      state.activityLog.push({
        id: uuidv4(),
        message: `List "${state.lists[id].title}" was deleted from board "${state.boards[boardId].title}"`,
        timestamp: new Date().toLocaleString(),
      });

      delete state.lists[id];
    },
    addTask(state, action) {
      const { id, title, listId } = action.payload;
      state.tasks[id] = { id, title, description: "", listId };
      state.lists[listId].taskIds.push(id);
      state.activityLog.push({
        id: uuidv4(),
        message: `Task "${title}" was added to list "${state.lists[listId].title}"`,
        timestamp: new Date().toLocaleString(),
      });
    },
    updateTaskTitle(state, action) {
      const { id, title } = action.payload;
      if (state.tasks[id]) {
        const oldTitle = state.tasks[id].title;
        state.tasks[id].title = title;
        state.activityLog.push({
          id: uuidv4(),
          message: `Task title changed from "${oldTitle}" to "${title}"`,
          timestamp: new Date().toLocaleString(),
        });
      }
    },
    deleteTask(state, action) {
      const { id } = action.payload;
      const listId = state.tasks[id].listId;

      state.lists[listId].taskIds = state.lists[listId].taskIds.filter(
        (taskId) => taskId !== id
      );

      state.activityLog.push({
        id: uuidv4(),
        message: `Task "${state.tasks[id].title}" was deleted from list "${state.lists[listId].title}"`,
        timestamp: new Date().toLocaleString(),
      });

      delete state.tasks[id];
    },
    updateTaskDescription(state, action) {
      const { id, description } = action.payload;
      if (state.tasks[id]) {
        state.tasks[id].description = description;
        state.activityLog.push({
          id: uuidv4(),
          message: `Description of task "${state.tasks[id].title}" was updated`,
          timestamp: new Date().toLocaleString(),
        });
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

      const taskTitle = state.tasks[taskId].title;
      state.lists[sourceListId].taskIds.splice(sourceIndex, 1);
      state.lists[destinationListId].taskIds.splice(
        destinationIndex,
        0,
        taskId
      );

      state.activityLog.push({
        id: uuidv4(),
        message: `Task "${taskTitle}" was moved from list "${state.lists[sourceListId].title}" to list "${state.lists[destinationListId].title}"`,
        timestamp: new Date().toLocaleString(),
      });
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
  updateBoardTitle,
} = boardSlice.actions;
