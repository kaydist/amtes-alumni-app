import React from "react";
import "./_tooltip.scss";
import { ReactComponent as TooltipIcon } from "../../../assets/icons/exclamation-with-border.svg";

export interface TooltipProps {
  content: string;
  children?: string | React.ReactNode; //this is the parent Item
  className?: string;
}

export default function Tooltip({
  className,
  children = <TooltipIcon />,
  content,
}: TooltipProps) {
  return (
    <div className={`tooltip ${className ? className : ""}`}>
      <div>{children}</div>
      <div className="tooltip-content">{content}</div>
    </div>
  );
}
