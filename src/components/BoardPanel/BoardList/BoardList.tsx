import BoardItem from "../BoardItem/BoardItem";
import { useAppSelector } from "../../../store/hook";
import { BoardListStyle } from "./BoardList.css";

type BoardListProps = {
  selectedBoardId: string | null;
  setSelectedBoardId: (id: string) => void;
};

export default function BoardList({
  selectedBoardId,
  setSelectedBoardId,
}: BoardListProps) {
  const boards = useAppSelector((state) => state.board.boards);

  return (
    <div className={BoardListStyle}>
      {Object.values(boards).map((board) => (
        <BoardItem
          key={board.id}
          title={board.title}
          id={board.id}
          isSelected={board.id === selectedBoardId}
          setSelectedBoardId={setSelectedBoardId}
        />
      ))}
    </div>
  );
}
