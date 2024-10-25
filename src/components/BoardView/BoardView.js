import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import List from "./List/List";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { listButtonStyle, listsWrapper } from "./BoardView.css";
import { addList, moveTask } from "../../store/reduxToolkit/boardSlice";
import { v4 as uuidv4 } from "uuid";
import { noBoard } from "./BoardView.css";
import { DragDropContext } from "@hello-pangea/dnd";
export default function BoardView({ boardId }) {
    const board = useAppSelector((state) => state.board.boards[boardId]);
    const dispatch = useAppDispatch();
    function handleSubmit() {
        const listTitle = prompt("Enter list name");
        if (!listTitle)
            return;
        const newListId = uuidv4();
        dispatch(addList({ id: newListId, title: listTitle, boardId: boardId }));
    }
    function onDragEnd(result) {
        const { destination, source, draggableId } = result;
        if (!destination)
            return;
        dispatch(moveTask({
            taskId: draggableId,
            sourceListId: source.droppableId,
            destinationListId: destination.droppableId,
            sourceIndex: source.index,
            destinationIndex: destination.index,
        }));
    }
    if (!board) {
        return _jsx("div", { className: noBoard, children: "There is no such board" });
    }
    return (_jsx(DragDropContext, { onDragEnd: onDragEnd, children: _jsxs("div", { className: listsWrapper, children: [board.listIds.map((listId) => (_jsx(List, { listId: listId }, listId))), _jsx("button", { onClick: handleSubmit, className: listButtonStyle, children: "Add list" })] }) }));
}
