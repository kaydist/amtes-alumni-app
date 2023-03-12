import React from "react";

export interface ISpinner {
  className?: string;
}

export default function Spinner(props: ISpinner) {
  return (
    <div
      className={`spinner_container ${
        props.className && props.className
      }`}
    >
      <svg className='spinner' viewBox="0 0 50 50">
        <circle
          className='path'
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="5"
        ></circle>
      </svg>
    </div>
  );
}
