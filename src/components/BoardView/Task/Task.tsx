import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import {
  updateTaskTitle,
  updateTaskDescription,
  deleteTask,
} from "../../../store/reduxToolkit/boardSlice";
import DescriptionModal from "./DescriptionModal/DescriptionModal";
import {
  taskTitle,
  taskHeader,
  TaskButton,
  saveDescriptionButton,
  descriptionTextArea,
} from "./Task.css";

type TaskProps = {
  taskId: string;
};

export default function Task({ taskId }: TaskProps) {
  const dispatch = useAppDispatch();
  const task = useAppSelector((state) => state.board.tasks[taskId]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [descriptionText, setDescriptionText] = useState(
    task?.description || ""
  );

  const inlineTaskTitleEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    dispatch(updateTaskTitle({ id: taskId, title: newTitle }));
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask({ id: taskId }));
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescriptionText(e.target.value);
  };

  const handleSaveDescription = () => {
    dispatch(
      updateTaskDescription({ id: taskId, description: descriptionText })
    );
    setModalOpen(false);
  };

  const handleBlurDescription = () => {
    if (descriptionText !== task.description) {
      dispatch(
        updateTaskDescription({ id: taskId, description: descriptionText })
      );
    }
  };

  if (!task) {
    return <div>No task found</div>;
  }

  return (
    <div>
      <div className={taskHeader}>
        <input
          className={taskTitle}
          value={task.title}
          onChange={inlineTaskTitleEdit}
        />
        <button className={TaskButton} onClick={() => setModalOpen(true)}>
          <FaEdit />
        </button>
        <button onClick={handleDeleteTask} className={TaskButton}>
          <RxCross2 size={15} />
        </button>
      </div>

      <DescriptionModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      >
        <h2>Edit Description</h2>
        <textarea
          value={descriptionText}
          onChange={handleDescriptionChange}
          onBlur={handleBlurDescription}
          placeholder="Click to edit ..."
          className={descriptionTextArea}
        />
        <button
          className={saveDescriptionButton}
          onClick={handleSaveDescription}
        >
          Save
        </button>
      </DescriptionModal>
    </div>
  );
}
