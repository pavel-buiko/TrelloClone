import React, { useState } from "react";
import BoardButton from "./BoardButton/BoardButton";
import BoardList from "./BoardList/BoardList";
import { BoardPanelStyle } from "./BoardPanelStyle.css";

export default function BoardPanel() {
  const [selectedBoardId, setSelectedBoardId] = useState<string | null>(null);

  return (
    <div className={BoardPanelStyle}>
      <BoardButton label="My Boards" />
      <BoardList
        selectedBoardId={selectedBoardId}
        setSelectedBoardId={setSelectedBoardId}
      />
    </div>
  );
}
