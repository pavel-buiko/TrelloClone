import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import "./App.css";
import BoardPanel from "./components/BoardPanel/BoardPanel";
import BoardView from "./components/BoardView/BoardView";
import { useAppSelector } from "./store/hook";
import { BrowserRouter } from "react-router-dom";
function App() {
    const selectedBoardId = useAppSelector((state) => state.ui.selectedBoardId);
    return (_jsx(_Fragment, { children: _jsxs(BrowserRouter, { basename: "/TrelloClone/", children: [_jsx(BoardPanel, {}), selectedBoardId ? (_jsx(BoardView, { boardId: selectedBoardId })) : (_jsx("div", { children: "Please select a board" }))] }) }));
}
export default App;
