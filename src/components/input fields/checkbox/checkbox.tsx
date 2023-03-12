import React from "react";

export interface CheckboxProps {
  value: string;
  variant?: "fill" | "no-fill";
  label?: React.ReactElement;
  labelClassName?: string;
  name: string;
  id?: string;
  [rest: string]: any;
}

const Checkbox = (props: CheckboxProps) => {
  const { variant, value, name, id, label, labelClassName, ...rest } = props;
  return (
    <div className="flex items-start">
      <input
        data-variant={variant}
        className="mr-4 mt-2"
        name={name}
        id={id ? id : name}
        type="checkbox"
        value={value}
        {...rest}
      />

      <label
        htmlFor={id ? id : name}
        className={`${labelClassName ? labelClassName : ""}`}
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
