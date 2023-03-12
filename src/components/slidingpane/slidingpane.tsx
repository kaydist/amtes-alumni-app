import React from "react";
import "./_slidingpane.scss";
import FillButton from "../common/buttons/button";
import { ReactComponent as BackIcon } from "../../assets/icons/arrow-back.svg";

export interface SlidepaneProps {
  children: React.ReactNode;
  className?: string;
  title: string;
  isOpen: boolean;
  onClose: Function;
}

export default function SlidingPane(props: SlidepaneProps) {
  return (
    <div
      className={`slidepane-container ${
        props.className ? props.className : ""
      } ${props.isOpen === true ? "open" : ""}`}
      data-testid="sliding-pane"
    >
      <div
        className="slidepane-backdrop"
        data-testid="sliding-pane-close-btn"
        onClick={() => {
          props.onClose();
        }}
      />
      <div className="slidepane">
        <div className="slidepane-header">
          <FillButton className="close-btn" onClick={props.onClose}>
            <BackIcon />
          </FillButton>

          <div className="title">{props.title}</div>
        </div>

        <div className="slidepane-body">{props.children}</div>
      </div>
    </div>
  );
}
