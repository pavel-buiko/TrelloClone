import { useAppDispatch } from "../../../store/hook";
import { BoardItemStyle, editButton, selectedBoardItem } from "./BoardItem.css";
import { selectBoard } from "../../../store/reduxToolkit/UISlice";
import { MdDelete } from "react-icons/md";
import { deleteBoard } from "../../../store/reduxToolkit/boardSlice";

type BoardItemProps = {
  id: string;
  title: string;
  isSelected: boolean;
  setSelectedBoardId: (id: string) => void;
};

export default function BoardItem({
  title,
  id,
  isSelected,
  setSelectedBoardId,
}: BoardItemProps) {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    setSelectedBoardId(id);
    dispatch(selectBoard(id));
  };

  const deleteBoardItem = () => {
    dispatch(deleteBoard({ id: id }));
  };

  return (
    <div
      className={`${BoardItemStyle} ${isSelected ? selectedBoardItem : ""}`}
      onClick={handleClick}
    >
      <span>{title}</span>
      <button onClick={deleteBoardItem} className={editButton}>
        <MdDelete color="white" size={20} />
      </button>
    </div>
  );
}
