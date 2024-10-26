import { style } from "@vanilla-extract/css";

export const taskList = style({
  padding: "1rem",
  color: "#f2f2f2",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#101204",
  height: "fit-content",
  width: "300px",
  gap: "15px",
  borderRadius: "15px",
});

export const listTitle = style({
  width: "100%",
  color: "#f2f2f2",
  background: "transparent",
  border: "none",
});

export const taskButton = style({
  color: "#f2f2f2",
  backgroundColor: "transparent",
  padding: "0.5rem 0.5rem",
  fontSize: "14px",
  borderRadius: "8px",
  transition: "ease 0.3s",
  display: "flex",
  alignItems: "center",
  ":hover": {
    backgroundColor: "#282f27",
    transform: "translateY(-2px)",
  },
});

export const listHeader = style({
  display: "flex",
  gap: "5px",
});

export const deleteListButton = style({
  background: "transparent",
});

export const plusStyle = style({
  width: "15px",
  height: "15px",
  margin: "0px 10px 0px 0px",
});

export const taskWrapper = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
