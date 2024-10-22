import { style } from "@vanilla-extract/css";

export const BoardButtonStyle = style({
  marginTop: "20px",
  borderRadius: "4px",
  border: "none",
  height: "fit-content",
  width: "100%",
  padding: "15px",
  outline: "none",
  backgroundColor: "#f2f2f2",
  color: "#333333",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "bold",
  boxShadow: "0 0px 5px #fff",
  transition: "background-color 0.15s ease, transform 0.2s ease",
  ":hover": {
    backgroundColor: "#ffff",
    transform: "translateY(-2px)",
  },
  ":active": {
    boxShadow: "0 0px 2px #fff",
    transform: "translateY(0)",
  },
});
