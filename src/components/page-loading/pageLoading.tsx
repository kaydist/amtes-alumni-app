import React from "react";
import "./page-loading.scss";
import Spinner from "../common/spinner/spinner";

export interface IPageLoading {
  loadingMessage: string;
}

function PageLoading(props: IPageLoading) {
  return (
    <div className="page-loading-container">
      <Spinner />
      <p>{props.loadingMessage}</p>
    </div>
  );
}

export default PageLoading;
