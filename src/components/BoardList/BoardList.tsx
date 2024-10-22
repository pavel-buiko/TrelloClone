import BoardItem from "../BoardItem/BoardItem";
import { BoardListStyle } from "./BoardList.css";

export default function BoardList() {
  return (
    <div className={BoardListStyle}>
      <BoardItem />
    </div>
  );
}
