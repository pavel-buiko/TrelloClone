import "./reset.css";
import BoardPanel from "./components/BoardPanel/BoardPanel";
import BoardView from "./components/BoardView/BoardView";
import ActivityLog from "./components/ActivityLog/ActivityLog";
import { useAppSelector } from "./store/hook";
import { selectBoard, selectBoardTitle } from "./App.css";

function App() {
  const selectedBoardId = useAppSelector((state) => state.ui.selectedBoardId);

  return (
    <div className="appContainer">
      <BoardPanel />
      {selectedBoardId ? (
        <BoardView boardId={selectedBoardId} />
      ) : (
        <div className={selectBoard}>
          <div className={selectBoardTitle}>Please select a board</div>
        </div>
      )}
      <ActivityLog />
    </div>
  );
}

export default App;
