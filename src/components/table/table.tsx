import React from "react";
import FillButton from "../common/buttons/button";
import "./_table.scss";

//icon
import { ReactComponent as FilterIcon } from "../../assets/icons/filter.svg";
import { TableProps } from "./table.interface";
import Spinner from "../common/spinner/spinner";
import DropdownMenu from "../common/dropdown/dropdown-menu";

export default function Table(props: TableProps) {
  return (
    <div
      className={`table-container ${props.className ? props.className : ""}`}
    >
      <div className="table-heading">
        <span className="title">{props.title}</span>

        {props.filter && (
          <DropdownMenu
            renderButton={
              <FillButton className="filter-btn">
                FIlter By <FilterIcon />
              </FillButton>
            }
            className="action-dropdown table-filter-dropdown"
            id={`dropdown-menu-table-filter`}
          >
            {props.filter}
          </DropdownMenu>
        )}

        {props.tableHeaderContent && !props.isEmpty && props.tableHeaderContent}
      </div>

      <div className={`table-wrapper`}>
        {props.isEmpty ? (
          props.emptyStateComponent
        ) : (
          <table
            data-testid="table"
            className={`table ${props.tableClass}`}
            data-rowicon={props.rowIcon ? true : false}
          >
            <thead>
              <tr className={props.tableHeaderClass}>
                {props.rowIcon && <th></th>}

                {props.tableHeader.map((header: string, index: number) => {
                  return <th key={index}>{header}</th>;
                })}

                {props.more && <th></th>}
              </tr>
            </thead>

            <tbody data-loading={props.isLoading}>
              {props.isLoading ? (
                <div className="table-spinner">
                  <Spinner />
                </div>
              ) : (
                props.children
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
