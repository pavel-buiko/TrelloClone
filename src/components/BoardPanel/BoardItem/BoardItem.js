import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useAppDispatch } from "../../../store/hook";
import { BoardItemStyle, editButton } from "./BoardItem.css";
import { selectBoard } from "../../../store/reduxToolkit/UISlice";
import { MdDelete } from "react-icons/md";
import { deleteBoard } from "../../../store/reduxToolkit/boardSlice";
export default function BoardItem({ title, id }) {
    const dispatch = useAppDispatch();
    const handleClick = () => {
        dispatch(selectBoard(id));
    };
    const deleteBoardItem = () => {
        dispatch(deleteBoard({ id: id }));
    };
    return (_jsxs("div", { className: BoardItemStyle, onClick: handleClick, children: [_jsx("span", { children: title }), _jsx("button", { onClick: deleteBoardItem, className: editButton, children: _jsx(MdDelete, { color: "white", size: 20 }) })] }));
}
