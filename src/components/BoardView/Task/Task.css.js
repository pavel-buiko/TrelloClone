import { style } from "@vanilla-extract/css";
export const taskTitle = style({
    width: "100%",
    color: "#f2f2f2",
    background: "transparent",
    border: "none",
});
export const taskHeader = style({
    display: "flex",
    gap: "5px",
});
export const TaskButton = style({
    background: "transparent",
});
export const saveDescriptionButton = style({
    display: "block",
    margin: "0 auto",
    width: "90%",
    padding: "0.2rem 0.5rem",
    background: "#CC4E5C",
    color: "#f2f2f2",
    borderRadius: "8px",
    marginTop: "10px",
});
export const descriptionTextArea = style({
    width: "100%",
    height: "100px",
    resize: "block",
    display: "block",
    margin: "0 auto",
});
