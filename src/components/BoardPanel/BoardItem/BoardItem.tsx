import { useAppDispatch } from "../../../store/hook";
import { BoardItemStyle, editButton } from "./BoardItem.css";
import { selectBoard } from "../../../store/reduxToolkit/UISlice";
type BoardItemProps = {
  id: string;
  title: string;
};

import { FaEdit } from "react-icons/fa";
export default function BoardItem({ title, id }: BoardItemProps) {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(selectBoard(id));
  };

  return (
    <div className={BoardItemStyle} onClick={handleClick}>
      <span>{title}</span>
      <button className={editButton}>
        <FaEdit color="white" size={20} />
      </button>
    </div>
  );
}
