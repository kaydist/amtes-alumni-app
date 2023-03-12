import { TdHTMLAttributes } from "react";

export interface TableRowProps {
  children: React.ReactElement[];
  className?: string;
  more?: boolean;
  moreOption?: React.ReactNode;
  rowIcon?: React.ReactNode;
}

export interface TableProps extends TableRowProps {
  tableHeader: Array<string>;
  tableHeaderContent?: React.ReactNode;
  tableClass?: string;
  tableHeaderClass?: string;
  title?: string;
  filter?: React.ReactElement | boolean;
  isLoading?: boolean;
  isEmpty: boolean;
  emptyStateComponent: React.ReactElement;
}
