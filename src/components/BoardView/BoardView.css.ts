import { style } from "@vanilla-extract/css";

export const noBoard = style({
  fontSize: "18px",
});

export const listButtonStyle = style({
  width: "250px",
  height: "50px",
  alignItems: "center",
  display: "flex",
  padding: "10px 20px 10px 5px",
  borderRadius: "12px",
  color: "#f2f2f2",
  backgroundColor: "rgba(210, 210, 210, 0.5)",
  fontSize: "18px",
  cursor: "pointer",
  border: "0px",
  transition: "ease 0.3s",
  ":hover": {
    background: "rgba(230, 230, 230, 0.7)",
  },
});

export const listsWrapper = style({
  padding: "1rem",
  display: "flex",
  gap: "1rem",
});

export const plusStyle = style({
  width: "20%",
  height: "70%",
});

export const boardViewWrapper = style({
  width: "65%",
});
