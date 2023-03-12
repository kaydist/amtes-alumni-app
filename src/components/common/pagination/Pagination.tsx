import React, { Dispatch, SetStateAction, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { useMemo } from "react";
import "./_pagination.scss";
import { ReactComponent as NextIcon } from "../../../assets/icons/arrow-back.svg";
import { ReactComponent as PrevIcon } from "../../../assets/icons/arrow-back.svg";
import Select from "../../input fields/Select/select";
import FillButton from "../buttons/button";

export interface IOptions {
  label: number;
  value: number;
}

export interface IPaginationTypes {
  total: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  perPage: number;
  loadPage: Function;
  setPerPage: Dispatch<SetStateAction<number>>;
  pageSize: IOptions[];
  perPageTitle: string;
  updateDataCallback: Function;
}

/***** RESERVED FOR UNPAGINATED DATA FROM BACKEND******/
// export const pageMapData = (
//   perPage: number,
//   currentPage: number,
//   data: Array<any>
// ) => {
//   const start = perPage * currentPage - perPage;
//   const end = perPage * currentPage;
//   return data.slice(start, end);
// };

/***** RESERVED FOR UNPAGINATED DATA FROM BACKEND******/

export default function Pagination(props: IPaginationTypes) {
  const {
    total,
    currentPage,
    setCurrentPage,
    perPage,
    loadPage,
    setPerPage,
    pageSize,
    perPageTitle,
    updateDataCallback,
  } = props;

  const totalPages = useMemo(() => {
    return Math.ceil(total / perPage);
  }, [total, perPage]);

  useMemo(() => {
    setCurrentPage(1);
  }, [perPage]);

  useMemo(() => {
    updateDataCallback();
  }, [perPage, currentPage]);

  return (
    <div className="pagination-box">
      <div className="showing-box">
        <p>
          Page {currentPage} of {totalPages}
        </p>
      </div>

      <div className="pagination-nav-container">
        <nav>
          <ul className="pagination">
            <li className="page-item prev-btn">
              <FillButton
                disabled={currentPage < 2}
                onClick={() => loadPage(Math.max(1, currentPage - 1))}
                className="page-link"
              >
                <span className="icon">
                  <PrevIcon />
                </span>
              </FillButton>
            </li>

            <li className="page-item active">
              <button className="page-link">{currentPage}</button>
            </li>
            <li className="page-item next-btn">
              <FillButton
                disabled={currentPage === totalPages}
                onClick={() => {
                  loadPage(Math.min(totalPages, currentPage + 1));
                }}
                className="page-link"
                // href="#1"
              >
                <span className="icon">
                  <NextIcon />
                </span>
              </FillButton>
            </li>
          </ul>
        </nav>

        <div>
          {perPageTitle} Per Page{" "}
          <div className="per-page">
            <Select
              onChange={(val: IOptions) => {
                setPerPage(val.value);
              }}
              selectOptions={pageSize}
              defaultOption={perPage}
              selectPlaceholder={perPage}
              isSearchable={false}
              menuPlacement="top"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
