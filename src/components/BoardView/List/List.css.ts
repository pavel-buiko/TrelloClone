import { style } from "@vanilla-extract/css";

export const taskList = style({
  padding: "1rem",
  color: "white",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#303030b7",
  height: "fit-content",
  width: "300px",
  gap: "15px",
  borderRadius: "15px",
});

export const listTitle = style({
  width: "100%",
});

export const taskButton = style({
  color: "#f2f2f2",
  backgroundColor: "#cc4d5b",
  padding: "0.5rem 0.5rem",
  fontSize: "14px",
  borderRadius: "8px",
  boxShadow: "#cc4d5b 0px 0px 10px 1px",
  transition: "ease 0.3s",
  ":hover": {
    backgroundColor: "#ff6167",
    transform: "translateY(-2px)",
    boxShadow: "0 0px 10px 5px #cc4e5c",
  },
  ":active": {
    boxShadow: "0 0px 0px 3px #cc4e5c",
    transform: "translateY(0)",
  },
});

export const listHeader = style({
  display: "flex",
  gap: "5px",
});

export const deleteListButton = style({
  background: "transparent",
});
