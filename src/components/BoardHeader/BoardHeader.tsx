import { useAppDispatch, useAppSelector } from "../../store/hook";
import { updateBoardTitle } from "../../store/reduxToolkit/boardSlice";
import { header, boardName } from "./BoardHeader.css";
import { useState } from "react";
type boardHeaderProps = {
  boardId: string;
};

export default function BoardHeader({ boardId }: boardHeaderProps) {
  const dispatch = useAppDispatch();
  const board = useAppSelector((state) => state.board.boards[boardId]);
  const [editedTitle, setEditedTitle] = useState(board?.title || "");

  const inlineBoardTitleEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTitle(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      dispatch(updateBoardTitle({ id: boardId, title: editedTitle }));
      e.currentTarget.blur();
    }
  };

  const handleBlurTitle = () => {
    if (editedTitle !== board.title) {
      dispatch(updateBoardTitle({ id: boardId, title: editedTitle }));
    }
  };

  return (
    <div className={header}>
      <input
        type="text"
        className={boardName}
        value={editedTitle}
        onChange={inlineBoardTitleEdit}
        onKeyDown={handleKeyDown}
        onBlur={handleBlurTitle}
      />
    </div>
  );
}
