import { useAppDispatch } from "../../store/hook";
import { updateBoardTitle } from "../../store/reduxToolkit/boardSlice";
import { header, boardName } from "./BoardHeader.css";

type boardHeaderProps = {
  boardId: string;
  boardTitle: string;
};

export default function BoardHeader({ boardId, boardTitle }: boardHeaderProps) {
  const dispatch = useAppDispatch();
  const titleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    dispatch(updateBoardTitle({ id: boardId, title: newTitle }));
  };

  return (
    <div className={header}>
      <input
        type="text"
        className={boardName}
        value={boardTitle}
        onChange={titleChange}
      />
    </div>
  );
}
