import { style } from "@vanilla-extract/css";

export const header = style({
  width: "100%",
  height: "5rem",
  background: "rgba(180,180,180, 0.3)",
  display: "flex",
  alignItems: "center",
  padding: " 0px 1rem",
});

export const boardName = style({
  fontSize: "20px",
  color: "#f2f2f2",
  background: "transparent",
  border: "none",
  width: "290px",
});
