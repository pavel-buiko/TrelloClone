import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "rsuite/InlineEdit/styles/index.css";
import "rsuite/dist/rsuite.min.css";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import Task from "../Task/Task";
import { v4 as uuidv4 } from "uuid";
import { listHeader, listTitle, taskButton, taskList, deleteListButton, } from "./List.css";
import { addTask, updateListTitle, deleteList, } from "../../../store/reduxToolkit/boardSlice";
import { InlineEdit } from "rsuite";
import { MdDelete, MdDragIndicator } from "react-icons/md";
import { Droppable, Draggable } from "@hello-pangea/dnd";
export default function List({ listId }) {
    const list = useAppSelector((state) => state.board.lists[listId]);
    const dispatch = useAppDispatch();
    const handleSubmit = () => {
        const newTaskId = uuidv4();
        const taskTitle = prompt("Enter task name");
        if (!taskTitle)
            return;
        dispatch(addTask({ id: newTaskId, title: taskTitle, listId: listId }));
    };
    const deleteListFunc = () => {
        dispatch(deleteList({ id: listId }));
    };
    const titleChange = (e) => {
        const newTitle = e.target.value;
        dispatch(updateListTitle({ id: listId, title: newTitle }));
    };
    if (!list) {
        return _jsx("div", { children: "List not found" });
    }
    return (_jsx(Droppable, { droppableId: listId, type: "TASK", children: (provided) => (_jsxs("div", { className: taskList, ref: provided.innerRef, ...provided.droppableProps, children: [_jsxs("h4", { className: listHeader, children: [_jsx(InlineEdit, { className: listTitle, showControls: false, defaultValue: list.title, onChange: titleChange }), _jsx("button", { onClick: deleteListFunc, className: deleteListButton, children: _jsx(MdDelete, {}) })] }), list.taskIds.map((taskId, index) => (_jsx(Draggable, { draggableId: taskId, index: index, children: (provided) => (_jsxs("div", { ref: provided.innerRef, ...provided.draggableProps, ...provided.dragHandleProps, style: {
                            display: "flex",
                            alignItems: "center",
                            ...provided.draggableProps.style,
                        }, children: [_jsx(MdDragIndicator, { style: { marginRight: "8px", cursor: "grab" } }), " ", _jsx(Task, { taskId: taskId })] })) }, taskId))), provided.placeholder, _jsx("button", { className: taskButton, onClick: handleSubmit, children: "Add task" })] })) }));
}
