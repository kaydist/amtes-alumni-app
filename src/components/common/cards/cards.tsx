import React from "react";
import "./_card.scss";

export interface Props {
  className?: string;
  children: React.ReactNode;
  onClick?: ()=> void;
  [rest: string]: any;
}

export default function Card(props: Props) {
  return (
    <div className={`card ${props.className}`} onClick={props.onClick} {...props.rest}>
      {props.children}
    </div>
  );
}
