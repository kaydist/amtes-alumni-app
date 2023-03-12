import React from "react";
import PinInput from "react-pin-input";
import './_pin.scss'

export interface PinType {
  onChange: (value: string | number, index?: number) => void;
  onComplete: (value: string | number, index?: number) => void;
  length: number;
  secret: boolean;
  type: "numeric";
  initialValue: string;
}

function PinField({
  onComplete,
  onChange,
  length = 6,
  secret = true,
  type = "numeric",
  initialValue = "",
}: PinType) {
  return (
    <PinInput
      length={length}
      initialValue={initialValue}
      secret={secret}
      onChange={onChange}
      type={type}
      inputMode="number"
      onComplete={onComplete}
      autoSelect={true}
      // regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
    />
  );
}

export default PinField;
