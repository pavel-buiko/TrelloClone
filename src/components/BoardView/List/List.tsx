import React from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import Task from "../Task/Task";
import { v4 as uuidv4 } from "uuid";
import { addTask } from "../../../store/reduxToolkit/boardSlice";

type ListProps = {
  listId: string;
};

export default function List({ listId }: ListProps) {
  const list = useAppSelector((state) => state.board.lists[listId]);
  const disaptch = useAppDispatch();

  const handleSubmit = () => {
    const newTaskId = uuidv4();
    const taskTitle = prompt("Enter task name");
    disaptch(addTask({ id: newTaskId, title: taskTitle, listId: listId }));
  };

  if (!list) {
    return <div>List not found</div>;
  }

  return (
    <div>
      <h1>{list.title}</h1>
      {list.taskIds.map((taskId) => (
        <Task key={taskId} taskId={taskId} />
      ))}
      <button onClick={handleSubmit}>Add task</button>
    </div>
  );
}
