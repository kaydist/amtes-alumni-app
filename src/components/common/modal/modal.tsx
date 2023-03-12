import React from "react";
import { ReactComponent as BackIcon } from "../../../assets/icons/cancel-with-border.svg";
import FillButton from "../../common/buttons/button";
import Card from "../cards/cards";
import ModalFooter from "./modal-footer";
import "./_modal.scss";

export enum ModalPosition {
  center = "modal-center",
  top_center = "modal-top-center",
}
export interface ModalProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  isOpen: boolean;
  onClose: Function;
  showCloseIcon?: boolean;
  modalPosition?: string;
}

function Modal({
  showCloseIcon = true,
  modalPosition = ModalPosition.center,
  ...props
}: ModalProps) {
  return (
    <div
      className={`modal-container ${props.className ? props.className : ""} ${
        props.isOpen ? "open" : ""
      }`}
    >
      <div
        className="modal-backdrop"
        onClick={() => {
          props.onClose();
        }}
      />
      <Card className={`modal ${modalPosition}`}>
        <div className="modal-header">
          <div className="title">{props.title}</div>

          {showCloseIcon && (
            <FillButton className="close-btn" onClick={props.onClose}>
              <BackIcon />
            </FillButton>
          )}
        </div>

        <div className="modal-body">{props.children}</div>
      </Card>
    </div>
  );
}

export default Modal;
