import React from "react";
import { useAppSelector } from "../../store/hook";
import { activityLogContainer, activityLogEntry } from "./ActivityLog.css";

export default function ActivityLog() {
  const activityLog = useAppSelector((state) => state.board.activityLog);

  return (
    <div className={activityLogContainer}>
      <h3>Activity Log</h3>
      <ul>
        {activityLog.map((entry) => (
          <li key={entry.id} className={activityLogEntry}>
            <span>{entry.timestamp}</span>
            <p>{entry.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
