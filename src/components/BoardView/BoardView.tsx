import List from "./List/List";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { listButtonStyle } from "./BoardView.css";
import { addList } from "../../store/reduxToolkit/boardSlice";
import { v4 as uuidv4 } from "uuid";
import { noBoard } from "./BoardView.css";
type BoardViewProps = {
  boardId: string;
};

export default function BoardView({ boardId }: BoardViewProps) {
  const board = useAppSelector((state) => state.board.boards[boardId]);
  const disaptch = useAppDispatch();

  function handleSubmit() {
    const listTitle = prompt("Enter list name");
    const newListId = uuidv4();
    disaptch(addList({ id: newListId, title: listTitle, boardId: boardId }));
  }

  if (!board) {
    return <div className={noBoard}>Board not found</div>;
  }
  return (
    <div>
      <button onClick={handleSubmit} className={listButtonStyle}>
        Add list
      </button>
      {board.listIds.map((listId) => (
        <List key={listId} listId={listId} />
      ))}
    </div>
  );
}
