import React from "react";
import FillButton from "../../common/buttons/button";
import "./_mobile-table.scss";

//icon
import { ReactComponent as FilterIcon } from "../../../assets/icons/filter.svg";
import { TableProps } from "./mobile-table.interface";
import Spinner from "../../common/spinner/spinner";
import DropdownMenu from "../../common/dropdown/dropdown-menu";

export default function MobileTable(props: TableProps) {
  return (
    <div
      className={`mobile-table-container ${
        props.className ? props.className : ""
      }`}
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
            className="table-filter-dropdown action-dropdown"
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
          <div className="mobile-table-body" data-loading={props.isLoading}>
            {props.isLoading ? (
              <Spinner className="table-spinner" />
            ) : (
              <>
                {" "}
                {props.moreOption}
                {props.children}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
