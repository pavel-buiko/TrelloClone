import React from "react";
import { BoardItemStyle, editButton } from "./BoardItem.css";

type BoardItemProps = {
  title: string;
};

import { FaEdit } from "react-icons/fa";
export default function BoardItem({ title }: BoardItemProps) {
  return (
    <div className={BoardItemStyle}>
      <span>{title}</span>
      <button className={editButton}>
        <FaEdit color="white" size={20} />
      </button>
    </div>
  );
}
