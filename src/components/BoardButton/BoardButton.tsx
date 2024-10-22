import { BoardButtonStyle } from "./BoardButton.css";

type BoardButtonProps = {
  label: string;
};
export default function BoardButton({ label }: BoardButtonProps) {
  return <button className={BoardButtonStyle}>{label}</button>;
}
