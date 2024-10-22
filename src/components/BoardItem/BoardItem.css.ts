import { style } from "@vanilla-extract/css";

export const BoardItemStyle = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px 15px",
  color: "#f2f2f2",
  backgroundColor: "#7c7c7c",
  border: "1px solid black",
  borderRadius: "15px",
});

export const editButton = style({
  background: "transparent",
  border: "none",
  cursor: "pointer",
});
