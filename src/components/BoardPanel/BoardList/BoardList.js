import { jsx as _jsx } from "react/jsx-runtime";
import BoardItem from "../BoardItem/BoardItem";
import { useAppSelector } from "../../../store/hook";
import { BoardListStyle } from "./BoardList.css";
export default function BoardList() {
    const boards = useAppSelector((state) => state.board.boards);
    return (_jsx("div", { className: BoardListStyle, children: Object.values(boards).map((board) => (_jsx(BoardItem, { title: board.title, id: board.id }, board.id))) }));
}
