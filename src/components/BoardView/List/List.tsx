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
} from "./List.css";
import {
  addTask,
  updateListTitle,
  deleteList,
} from "../../../store/reduxToolkit/boardSlice";
import { InlineEdit } from "rsuite";
import { MdDelete, MdDragIndicator } from "react-icons/md";
import { Droppable, Draggable } from "@hello-pangea/dnd";

type ListProps = {
  listId: string;
};

export default function List({ listId }: ListProps) {
  const list = useAppSelector((state) => state.board.lists[listId]);
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

  const titleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    dispatch(updateListTitle({ id: listId, title: newTitle }));
  };

  if (!list) {
    return <div>List not found</div>;
  }

  return (
    <Droppable droppableId={listId} type="TASK">
      {(provided) => (
        <div
          className={taskList}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <h4 className={listHeader}>
            <InlineEdit
              className={listTitle}
              showControls={false}
              defaultValue={list.title}
              onChange={titleChange}
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
                  style={{
                    display: "flex",
                    alignItems: "center",
                    ...provided.draggableProps.style,
                  }}
                >
                  <MdDragIndicator
                    style={{ marginRight: "8px", cursor: "grab" }}
                  />{" "}
                  <Task taskId={taskId} />
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
          <button className={taskButton} onClick={handleSubmit}>
            Add task
          </button>
        </div>
      )}
    </Droppable>
  );
}
