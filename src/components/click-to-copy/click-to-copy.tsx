import React, { useMemo, useState } from "react";
import "./_click-to-copy.scss";
import { ReactComponent as CopyIcon } from "../../assets/icons/copy.svg";
import { ReactComponent as CheckIcon } from "../../assets/icons/checkmark.svg";
import Tooltip from "../common/tooltip/tooltip";

export interface ClickToCopyProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

function ClickToCopy(props: ClickToCopyProps) {
  const [copied, setCopied] = useState(false);
  const { text, className, onClick } = props;

  const copyFunction = async () => {
    await navigator.clipboard?.writeText(text);
    setCopied(true);
  };

  useMemo(() => {
    if (copied === true) {
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  }, [copied]);

  return (
    <button
      onClick={() => {
        copyFunction();
        onClick?.();
      }}
      className={`click-to-copy ${className ? className : ""}`}
      data-testid="click-to-copy"
    >
      {copied ? <CheckIcon /> : <CopyIcon />}

      {copied && <div className="copied-tooltip-content">Copied</div>}
    </button>
  );
}

export default ClickToCopy;
