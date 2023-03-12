import React from "react";
import "./_chip.scss";

export interface ChipProps {
  className?: string;
  label?: string | number;
  indicatior?: boolean;
  [rest: string]: any;
}

export default function Chip(props: ChipProps) {
  const { ...rest } = props;
  return (
    <div
      {...rest}
      className={`${props.className ? props.className : ""} ${
        !props.label && "no-background"
      } chip tiny`}
    >
      {props.indicatior && <span className="indicator" />}
      <div className="label">{props.label}</div>
    </div>
  );
}
