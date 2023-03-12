import React from "react";

export interface DropdownMenuProps {
  renderButton: React.ReactNode;
  children: React.ReactNode;
  id: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  className?: string;
  [rest: string]: any;
}

export interface DropdownOptionProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  [rest: string]: any;
}
