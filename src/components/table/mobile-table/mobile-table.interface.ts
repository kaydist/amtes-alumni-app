export interface TableRowProps {
  children: React.ReactNode;
  className?: string;
  more?: boolean;
  moreOption?: React.ReactNode;
  rowIcon?: React.ReactNode;
}

export interface TableProps extends TableRowProps {
  tableHeaderContent?: React.ReactNode;
  tableClass?: string;
  tableHeaderClass?: string;
  title?: string;
  filter?: React.ReactElement | boolean;
  isLoading?: boolean;
  isEmpty: boolean;
  emptyStateComponent: React.ReactElement;
}
