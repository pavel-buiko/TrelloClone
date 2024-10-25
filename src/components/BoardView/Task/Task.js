import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import { updateTaskTitle, updateTaskDescription, deleteTask, } from "../../../store/reduxToolkit/boardSlice";
import DescriptionModal from "./DescriptionModal/DescriptionModal";
import { taskTitle, taskHeader, TaskButton, saveDescriptionButton, descriptionTextArea, } from "./Task.css";
export default function Task({ taskId }) {
    const dispatch = useAppDispatch();
    const task = useAppSelector((state) => state.board.tasks[taskId]);
    const [isModalOpen, setModalOpen] = useState(false);
    const [descriptionText, setDescriptionText] = useState(task?.description || "");
    const inlineTaskTitleEdit = (e) => {
        const newTitle = e.target.value;
        dispatch(updateTaskTitle({ id: taskId, title: newTitle }));
    };
    const handleDeleteTask = () => {
        dispatch(deleteTask({ id: taskId }));
    };
    const handleDescriptionChange = (e) => {
        setDescriptionText(e.target.value);
    };
    const handleSaveDescription = () => {
        dispatch(updateTaskDescription({ id: taskId, description: descriptionText }));
        setModalOpen(false);
    };
    const handleBlurDescription = () => {
        if (descriptionText !== task.description) {
            dispatch(updateTaskDescription({ id: taskId, description: descriptionText }));
        }
    };
    if (!task) {
        return _jsx("div", { children: "No task found" });
    }
    return (_jsxs("div", { children: [_jsxs("div", { className: taskHeader, children: [_jsx("input", { className: taskTitle, value: task.title, onChange: inlineTaskTitleEdit }), _jsx("button", { className: TaskButton, onClick: () => setModalOpen(true), children: _jsx(FaEdit, {}) }), _jsx("button", { onClick: handleDeleteTask, className: TaskButton, children: _jsx(RxCross2, { size: 15 }) })] }), _jsxs(DescriptionModal, { isOpen: isModalOpen, onClose: () => setModalOpen(false), children: [_jsx("h2", { children: "Edit Description" }), _jsx("textarea", { value: descriptionText, onChange: handleDescriptionChange, onBlur: handleBlurDescription, placeholder: "Click to edit ...", className: descriptionTextArea }), _jsx("button", { className: saveDescriptionButton, onClick: handleSaveDescription, children: "Save" })] })] }));
}
