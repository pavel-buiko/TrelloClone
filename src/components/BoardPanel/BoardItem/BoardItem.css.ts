import { style } from "@vanilla-extract/css";

export const BoardItemStyle = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 15px",
  color: "#f2f2f2",
  backgroundColor: "transparent",
  height: "fit-content",
});

export const editButton = style({
  background: "transparent",
  border: "none",
  cursor: "pointer",
});

export const selectedBoardItem = style({
  background: "#7c7c7c",
});
