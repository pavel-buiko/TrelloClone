import BoardItem from "../BoardItem/BoardItem";
import { useAppSelector } from "../../store/hook";
import { BoardListStyle } from "./BoardList.css";

export default function BoardList() {
  const boards = useAppSelector((state) => state.board.boards);

  return (
    <div className={BoardListStyle}>
      {Object.values(boards).map((board) => (
        <BoardItem key={board.id} title={board.title} />
      ))}
    </div>
  );
}
