import BoardButton from "./BoardButton/BoardButton";
import BoardList from "./BoardList/BoardList";
import { BoardPanelStyle } from "./BoardPanelStyle.css";

export default function BoardPanel() {
  return (
    <div className={BoardPanelStyle}>
      <BoardButton label="Add Board" />
      <BoardList />
    </div>
  );
}
