import { BoardButtonStyle } from "./BoardButton.css";
import { addBoard } from "../../store/reduxToolkit/boardSlice";
import { useAppDispatch } from "../../store/hook";
import { v4 as uuidv4 } from "uuid";
type BoardButtonProps = {
  label: string;
};
export default function BoardButton({ label }: BoardButtonProps) {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    const boardTitle = prompt("Enter board name");
    if (boardTitle) {
      const boardId = uuidv4();
      dispatch(addBoard({ id: boardId, title: boardTitle }));
    }
  };

  return (
    <button onClick={handleClick} className={BoardButtonStyle}>
      {label}
    </button>
  );
}
