import "./App.css";
import BoardPanel from "./components/BoardPanel/BoardPanel";
import BoardView from "./components/BoardView/BoardView";
import { useAppSelector } from "./store/hook";
import { BrowserRouter } from "react-router-dom";

function App() {
  const selectedBoardId = useAppSelector((state) => state.ui.selectedBoardId);

  return (
    <>
      <BrowserRouter basename="/TrelloClone/">
        <BoardPanel />
        {selectedBoardId ? (
          <BoardView boardId={selectedBoardId} />
        ) : (
          <div>Please select a board</div>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
