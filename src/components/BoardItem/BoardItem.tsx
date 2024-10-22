import React from "react";
import { BoardItemStyle, editButton } from "./BoardItem.css";
import { FaEdit } from "react-icons/fa";
export default function BoardItem() {
  return (
    <div className={BoardItemStyle}>
      <span>Board item</span>
      <button className={editButton}>
        <FaEdit color="white" size={20} />
      </button>
    </div>
  );
}
