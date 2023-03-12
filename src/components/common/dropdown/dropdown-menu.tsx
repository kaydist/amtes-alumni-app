import React, { useLayoutEffect } from "react";
import "./_dropdown.scss";
import { DropdownMenuProps } from "./dropdown.interface";

import { closeDropdown, openDropdown } from "../../../utils/dropdown";

export default function DropdownMenu(props: DropdownMenuProps) {
  const { className, children, id, renderButton, onClick, ...rest } = props;

  useLayoutEffect(() => {
    closeDropdown();
  }, []);

  return (
    <div className="dropdown-menu-container">
      <button
        onClick={() => {
          openDropdown(`.dropdown-menu-${id}`);
        }}
        data-testid="dropdown-menu-render-button"
      >
        {renderButton}
      </button>

      <div
        id={`.dropdown-menu-${id}`}
        data-testid="dropdown-menu"
        className={`dropdown-menu ${className ? className : ``}`}
        {...rest}
      >
        {children}
      </div>
    </div>
  );
}
