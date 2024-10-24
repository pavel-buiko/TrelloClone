import { useAppSelector } from "../../../store/hook";

type TaskProps = {
  taskId: string;
};

export default function Task({ taskId }: TaskProps) {
  const task = useAppSelector((state) => state.board.tasks[taskId]);

  if (!task) {
    return <div>No task found</div>;
  }
  return (
    <div>
      <h6>{task.title}</h6>
      <div>{task.description}</div>
    </div>
  );
}
