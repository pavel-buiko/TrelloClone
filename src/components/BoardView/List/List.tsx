import "rsuite/InlineEdit/styles/index.css";
import "rsuite/dist/rsuite.min.css";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import Task from "../Task/Task";
import { v4 as uuidv4 } from "uuid";
import {
  listHeader,
  listTitle,
  taskButton,
  taskList,
  deleteListButton,
  plusStyle,
  taskWrapper,
} from "./List.css";
import {
  addTask,
  updateListTitle,
  deleteList,
} from "../../../store/reduxToolkit/boardSlice";
import { MdDelete, MdDragIndicator } from "react-icons/md";
import { Droppable, Draggable } from "@hello-pangea/dnd";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";

type ListProps = {
  listId: string;
};

export default function List({ listId }: ListProps) {
  const list = useAppSelector((state) => state.board.lists[listId]);
  const [editedTitle, setEditedTitle] = useState(list?.title || "");
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    const newTaskId = uuidv4();
    const taskTitle = prompt("Enter task name");
    if (!taskTitle) return;
    dispatch(addTask({ id: newTaskId, title: taskTitle, listId: listId }));
  };

  const deleteListFunc = () => {
    dispatch(deleteList({ id: listId }));
  };

  if (!list) {
    return <div>List not found</div>;
  }

  const inlineListTitleEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTitle(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      dispatch(updateListTitle({ id: listId, title: editedTitle }));
      e.currentTarget.blur();
    }
  };

  const handleBlurTitle = () => {
    if (editedTitle !== list.title) {
      dispatch(updateListTitle({ id: listId, title: editedTitle }));
    }
  };
  return (
    <Droppable droppableId={listId} type="TASK">
      {(provided) => (
        <div
          className={taskList}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <h4 className={listHeader}>
            <input
              className={listTitle}
              value={editedTitle}
              onChange={inlineListTitleEdit}
              onKeyDown={handleKeyDown}
              onBlur={handleBlurTitle}
            />
            <button onClick={deleteListFunc} className={deleteListButton}>
              <MdDelete />
            </button>
          </h4>
          {list.taskIds.map((taskId, index) => (
            <Draggable key={taskId} draggableId={taskId} index={index}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  className={taskWrapper}
                  style={{
                    ...provided.draggableProps.style,
                  }}
                >
                  <MdDragIndicator
                    style={{ marginRight: "8px", cursor: "grab" }}
                  />
                  <Task taskId={taskId} />
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
          <button className={taskButton} onClick={handleSubmit}>
            <FaPlus className={plusStyle} />
            Add task
          </button>
        </div>
      )}
    </Droppable>
  );
}
