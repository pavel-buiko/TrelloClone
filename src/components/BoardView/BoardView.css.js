import { style } from "@vanilla-extract/css";
export const noBoard = style({
    fontSize: "18px",
});
export const listButtonStyle = style({
    width: "250px",
    height: "fit-content",
    padding: "15px 25px",
    color: "#f2f2f2",
    backgroundColor: "#CC4E5C",
    fontSize: "18px",
    cursor: "pointer",
    border: "0px",
    borderRadius: "15px",
    boxShadow: "#CC4E5C 0px 0px 10px 1px",
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
export const listsWrapper = style({
    padding: "1rem",
    display: "flex",
    gap: "1rem",
});
