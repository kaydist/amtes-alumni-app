import React from "react";
import "./_empty-table.scss";
import EmptyStateIllustration from "../../assets/illustrations/empty-state-illustration.svg";
type Props = {
  message: string;
  additional_message?: string;
};

function EmptyTable({ additional_message, message }: Props) {
  return (
    <div className="empty-table-container">
      <img src={EmptyStateIllustration} alt="" className="illustration" />

      <p className="empty-table-message">{message}</p>
      {additional_message && (
        <p className="empty-table-add-message">{additional_message}</p>
      )}
    </div>
  );
}

export default EmptyTable;
