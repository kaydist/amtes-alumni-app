import React from "react";
import "./_mobile-table.scss";
import { TableRowProps } from "./mobile-table.interface";

export default function MobileTableRow(props: TableRowProps) {
  return (
    <div className="mobile-table-row">
      <div
        className="dropdown-field"
        data-rowicon={props.rowIcon ? true : false}
      >
        {props.rowIcon} {props.moreOption}
      </div>
      <div className="mobile-table-row-body">{props.children}</div>
    </div>
  );
}
