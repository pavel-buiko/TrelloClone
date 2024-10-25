import { useAppDispatch } from "../../../store/hook";
import { BoardItemStyle, editButton } from "./BoardItem.css";
import { selectBoard } from "../../../store/reduxToolkit/UISlice";
import { MdDelete } from "react-icons/md";
import { deleteBoard } from "../../../store/reduxToolkit/boardSlice";

type BoardItemProps = {
  id: string;
  title: string;
};

export default function BoardItem({ title, id }: BoardItemProps) {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(selectBoard(id));
  };

  const deleteBoardItem = (e) => {
    e.stopPropagation();
    dispatch(deleteBoard({ id: id }));
  };

  return (
    <div className={BoardItemStyle} onClick={handleClick}>
      <span>{title}</span>
      <button onClick={deleteBoardItem} className={editButton}>
        <MdDelete color="white" size={20} />
      </button>
    </div>
  );
}
