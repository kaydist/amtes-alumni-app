import React from "react";
import "./_toggle.scss";

export interface ToggleProps {
  value: string;
  className?: string;
  name: string;
  id?: string;
  [rest: string]: any;
}

function Toggle(props: ToggleProps) {
  const { value, name, id, className, ...rest } = props;

  return (
    <div className={`${className ? className : ""} toggle-component-container`}>
      <label className="switch">
        <input type="checkbox" name="name" value={value} {...rest} />
        <span className="slider"></span>
      </label>
    </div>
  );
}

export default Toggle;
