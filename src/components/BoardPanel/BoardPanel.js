import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import BoardButton from "./BoardButton/BoardButton";
import BoardList from "./BoardList/BoardList";
import { BoardPanelStyle } from "./BoardPanelStyle.css";
export default function BoardPanel() {
    return (_jsxs("div", { className: BoardPanelStyle, children: [_jsx(BoardButton, { label: "Add Board" }), _jsx(BoardList, {})] }));
}
