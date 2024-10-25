import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ReactDOM from "react-dom";
import { modalContent, modalOverlay, modalButton, } from "./DescriptionModal.css";
import { RxCross2 } from "react-icons/rx";
export default function DescriptionModal({ isOpen, onClose, children, }) {
    if (!isOpen)
        return null;
    return ReactDOM.createPortal(_jsx("div", { className: modalOverlay, children: _jsxs("div", { className: modalContent, children: [_jsx("button", { className: modalButton, onClick: onClose, children: _jsx(RxCross2, {}) }), children] }) }), document.getElementById("modal-root"));
}
