import { ButtonColor, ButtonVariant } from "./button";
export interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: Function;
  variant?: ButtonVariant;
  colorVariant?: ButtonColor;
  disabled?: boolean;
  isLoading?: boolean;
  [rest: string]: any;
}
