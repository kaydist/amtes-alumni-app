import React from "react";
import "./_dropdown.scss";
import { DropdownOptionProps } from "./dropdown.interface";

export default function DropdownOption(props: DropdownOptionProps) {
  const { className, children, onClick, ...rest } = props;

  return (
    <div
      className="dropdown-option"
      data-testid="dropdown-option"
      onClick={onClick}
      {...rest}
    >
      {children}
    </div>
  );
}
