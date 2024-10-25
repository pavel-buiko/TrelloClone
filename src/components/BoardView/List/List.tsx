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
import { MdDelete } from "react-icons/md";

type ListProps = {
  listId: string;
};

export default function List({ listId }: ListProps) {
  const list = useAppSelector((state) => state.board.lists[listId]);
  const disaptch = useAppDispatch();

  const handleSubmit = () => {
    const newTaskId = uuidv4();
    const taskTitle = prompt("Enter task name");
    if (!taskTitle) return;
    disaptch(addTask({ id: newTaskId, title: taskTitle, listId: listId }));
  };

  const deleteListFunc = () => {
    disaptch(deleteList({ id: listId }));
  };

  const titleChange = (e) => {
    const newTitle = e.target.value;
    disaptch(updateListTitle({ id: listId, title: newTitle }));
  };

  if (!list) {
    return <div>List not found</div>;
  }

  return (
    <div className={taskList}>
      <h4 className={listHeader}>
        <InlineEdit
          className={listTitle}
          showControls={false}
          defaultValue={list.title}
          onSave={titleChange}
        />
        <button onClick={deleteListFunc} className={deleteListButton}>
          <MdDelete />
        </button>
      </h4>
      {list.taskIds.map((taskId) => (
        <Task key={taskId} taskId={taskId} />
      ))}
      <button className={taskButton} onClick={handleSubmit}>
        Add task
      </button>
    </div>
  );
}
