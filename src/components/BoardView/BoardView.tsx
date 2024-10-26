import List from "./List/List";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import {
  listButtonStyle,
  listsWrapper,
  noBoard,
  plusStyle,
  boardViewWrapper,
} from "./BoardView.css";
import { addList, moveTask } from "../../store/reduxToolkit/boardSlice";
import { v4 as uuidv4 } from "uuid";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import { FaPlus } from "react-icons/fa6";
import BoardHeader from "../BoardHeader/BoardHeader";
type BoardViewProps = {
  boardId: string;
};

export default function BoardView({ boardId }: BoardViewProps) {
  const board = useAppSelector((state) => state.board.boards[boardId]);
  const dispatch = useAppDispatch();

  function handleSubmit() {
    const listTitle = prompt("Enter list name");
    if (!listTitle) return;
    const newListId = uuidv4();
    dispatch(addList({ id: newListId, title: listTitle, boardId: boardId }));
  }

  function onDragEnd(result: DropResult) {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    dispatch(
      moveTask({
        taskId: draggableId,
        sourceListId: source.droppableId,
        destinationListId: destination.droppableId,
        sourceIndex: source.index,
        destinationIndex: destination.index,
      })
    );
  }

  if (!board) {
    return <div className={noBoard}>There is no such board</div>;
  }

  return (
    <div className={boardViewWrapper}>
      <BoardHeader boardId={boardId} />
      <DragDropContext onDragEnd={onDragEnd}>
        <div className={listsWrapper}>
          {board.listIds.map((listId) => (
            <List key={listId} listId={listId} />
          ))}
          <button onClick={handleSubmit} className={listButtonStyle}>
            <FaPlus className={plusStyle} />
            Add list
          </button>
        </div>
      </DragDropContext>{" "}
    </div>
  );
}
