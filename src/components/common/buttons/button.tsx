import React from "react";
import { ButtonProps } from "./button.interface";
import Spinner from "../spinner/spinner";

export enum ButtonVariant {
  solid = "bg-inherit py-5 rounded-md",
  outlined = "bg-transparent outline outline-inherit",
}

export enum ButtonColor {
  primary = "bg-primary-300 hover:bg-primary-400 text-white",
}

const Button: React.FC<ButtonProps> = (props, _ref) => {
  const {
    className,
    onClick,
    children,
    isLoading,
    colorVariant = ButtonColor.primary,
    variant = ButtonVariant.solid,
    disabled,
    ...rest
  } = props;

  return (
    <button
      className={`${className && className} ${
        colorVariant && colorVariant
      } ${variant}`}
      onClick={() => {
        onClick?.();
      }}
      disabled={disabled}
      {...rest}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  );
};

export default Button;
