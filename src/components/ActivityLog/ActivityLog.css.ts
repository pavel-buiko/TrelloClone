import { style } from "@vanilla-extract/css";

export const activityLogContainer = style({
  color: "#888",
  width: "20%",
  position: "fixed",
  right: 0,
  top: 0,
  height: "100%",
  overflowY: "auto",
  backgroundColor: "#15181b",
  padding: "10px",
  boxSizing: "border-box",
});

export const activityLogEntry = style({
  marginBottom: "10px",
  borderBottom: "1px solid #ccc",
  paddingBottom: "5px",
});

export const timestamp = style({
  fontSize: "12px",
  color: "#888",
});

export const message = style({
  margin: "5px 0 0 0",
});
