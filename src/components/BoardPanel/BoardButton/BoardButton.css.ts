import { style } from "@vanilla-extract/css";

export const BoardButtonStyle = style({
  marginTop: "20px",
  borderRadius: "15px",
  border: "none",
  height: "fit-content",
  width: "100%",
  padding: "15px",
  outline: "none",
  backgroundColor: "#cc4e5c",
  color: "#f2f2f2",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "bold",
  boxShadow: "0 0px 5px 1px #cc4e5c",
  transition: "ease 0.3s",
  ":hover": {
    backgroundColor: "#ff6172",
    transform: "translateY(-2px)",
    boxShadow: "0 0px 10px 5px #cc4e5c",
  },
  ":active": {
    boxShadow: "0 0px 0px 5px #cc4e5c",
    transform: "translateY(0)",
  },
});
