import React from "react";
import ReactDOM from "react-dom";
import {
  modalContent,
  modalOverlay,
  modalButton,
} from "./DescriptionModal.css";
import { RxCross2 } from "react-icons/rx";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function DescriptionModal({
  isOpen,
  onClose,
  children,
}: ModalProps) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={modalOverlay}>
      <div className={modalContent}>
        <button className={modalButton} onClick={onClose}>
          <RxCross2 />
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")!
  );
}
