import React from "react";

export interface IModalFooter {
  children: React.ReactNode;
  className?: string;
}

function ModalFooter(props: IModalFooter) {
  return (
    <div className={`modal-footer ${props.className ? props.className : ""}`}>
      {props.children}
    </div>
  );
}

export default ModalFooter;
