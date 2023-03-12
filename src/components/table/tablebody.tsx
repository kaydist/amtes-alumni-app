import React from "react";
import { TableRowProps } from "./table.interface";

export default function TableRow(props: TableRowProps) {
  return (
    <tr
      className="table-row"
      data-testid="table-row"
      data-table-row-icon={props.rowIcon ? true : false}
    >
      {props.rowIcon && (
        <td className="table-row-icon" data-testid="table-row-icon">
          {props.rowIcon}
        </td>
      )}

      {props.children.map((item) => {
        return item;
      })}

      {props.moreOption && (
        <td>
          <span className="table-more-field">{props.moreOption}</span>
        </td>
      )}
    </tr>
  );
}
