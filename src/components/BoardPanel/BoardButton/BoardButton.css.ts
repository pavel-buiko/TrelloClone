import { style } from "@vanilla-extract/css";

export const AddBoardContainer = style({
  padding: "10px",
  marginTop: "10px",
  color: "#f2f2f2",
  display: "flex",
  alignItems: "center",
  width: "100%",
  justifyContent: "space-between",
});

export const BoardButtonStyle = style({
  width: "30px",
  height: "30px",
  border: "none",
  background: "transparent",
  outline: "none",
  color: "#f2f2f2",
  cursor: "pointer",
  fontSize: "16px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "ease 0.3s",
});
