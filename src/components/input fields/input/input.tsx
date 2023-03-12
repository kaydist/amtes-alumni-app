import React, { useState } from "react";
import { ReactComponent as PasswordHidden } from "~/assets/icons/content-hidden.svg";
import { ReactComponent as PasswordVisible } from "~/assets/icons/content-hidden.svg";

export interface InputProps {
  label?: string;
  isRequired?: boolean;
  icon?: React.ReactNode;
  iconPosition?: string;
  iconAction?: Function;
  iconClassName?: string;
  error?: boolean | string;
  type?: string;
  success?: boolean | string;
  successMessage?: string;
  errorMessage?: string;
  [rest: string]: any;
}

const Input: React.FC<InputProps> = (props, _ref) => {
  const {
    label,
    type = "text",
    isRequired,
    icon,
    iconPosition,
    iconAction,
    iconClassName,
    error,
    errorMessage,
    successMessage,
    success,
    ...rest
  } = props;

  const [passwordVisible, setPasswordVisisble] = useState(false);
  const [passwordType, setPasswordType] = useState(type);

  return (
    <div className="border border-grey-300 focus-within:border-other-blue py-2 px-4 rounded-md relative">
      {label && (
        <label className="input-label">
          {label}
          {isRequired && <sup>*</sup>}
        </label>
      )}

      <div
        className={`${
          (icon || type === "password") &&
          (iconPosition === "left" ? "icon-left" : "icon-right")
        } ${error && "input-error"} ${success && "input-success"}`}
      >
        <input
          className={`border-0 focus:border-0 focus:outline-0 ${
            icon || type === "password" ? "w-[92%]" : "w-full"
          }`}
          type={passwordType || "text"}
          {...rest}
        />

        {type === "password" ? (
          <span
            className="absolute right-4 top-1/2 -translate-y-1/2"
            onClick={() => {
              if (type === "password") {
                if (passwordVisible) {
                  setPasswordVisisble(false);
                  setPasswordType("password");
                } else {
                  setPasswordVisisble(true);
                  setPasswordType("text");
                }
              }
            }}
          >
            {passwordVisible ? <PasswordVisible /> : <PasswordHidden />}
          </span>
        ) : (
          <span
            className={`absolute right-4 top-1/2 -translate-y-1/2 ${
              iconClassName ? iconClassName : ""
            }`}
            onClick={() => {
              iconAction?.();
            }}
          >
            {icon}
          </span>
        )}
      </div>

      {error && errorMessage && (
        <label className="error-message">{errorMessage}</label>
      )}
      {success && <label className="success-message">{successMessage}</label>}
    </div>
  );
};

export default Input;
