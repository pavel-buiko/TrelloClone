import { jsx as _jsx } from "react/jsx-runtime";
import { BoardButtonStyle } from "./BoardButton.css";
import { addBoard } from "../../../store/reduxToolkit/boardSlice";
import { useAppDispatch } from "../../../store/hook";
import { v4 as uuidv4 } from "uuid";
export default function BoardButton({ label }) {
    const dispatch = useAppDispatch();
    const handleClick = () => {
        const boardTitle = prompt("Enter board name");
        if (boardTitle) {
            const boardId = uuidv4();
            dispatch(addBoard({ id: boardId, title: boardTitle }));
        }
    };
    return (_jsx("button", { onClick: handleClick, className: BoardButtonStyle, children: label }));
}
