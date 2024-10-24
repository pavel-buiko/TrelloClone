import "./App.css";
import BoardPanel from "./components/BoardPanel/BoardPanel";
import BoardView from "./components/BoardView/BoardView";
import { useAppSelector } from "./store/hook";

function App() {
  const selectedBoardId = useAppSelector((state) => state.ui.selectedBoardId);

  return (
    <>
      <BoardPanel />
      {selectedBoardId ? (
        <BoardView boardId={selectedBoardId} />
      ) : (
        <div>Please select a board</div>
      )}
    </>
  );
}

export default App;
