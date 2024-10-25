import { style } from "@vanilla-extract/css";

export const modalOverlay = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100vh",
  background: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const modalContent = style({
  background: "white",
  boxShadow: "0px 0px 10px 5px  rgba(255, 255, 255, 0.3)",
  padding: "20px",
  borderRadius: "8px",
  width: "80%",
  maxWidth: "350px",
});

export const modalButton = style({
  background: "none",
  border: "none",
  fontSize: "20px",
  cursor: "pointer",
});
