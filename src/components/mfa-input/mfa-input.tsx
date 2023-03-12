import React, { Dispatch, SetStateAction } from "react";
import Modal, { ModalPosition } from "../common/modal/modal";
import PinField from "../input fields/pin/pin";
import { useFormik, useFormikContext } from "formik";
import * as Yup from "yup";
import "./_mfa-input.scss";
import FillButton from "../common/buttons/button";
import { ButtonColor } from "../common/buttons/button";

type MfaTypes = {
  showMFA: boolean;
  closeMFA: () => void;
  isLoading?: boolean;
  onComplete: (value: string | number, index?: number) => void;
  onChange: (value: string | number, index?: number) => void;
};

function MfaInput({
  showMFA,
  closeMFA,
  isLoading,
  onComplete,
  onChange,
}: MfaTypes) {
  return (
    <Modal
      isOpen={showMFA}
      onClose={closeMFA}
      modalPosition={ModalPosition.center}
      showCloseIcon={false}
      className="mfa-modal"
    >
      <h6>Enter 2FA Key</h6>

      <p className="sub-heading">
        Enter Token from Two-Factor-Authentication app
      </p>

      <PinField
        length={6}
        onChange={(value) => {
          onChange(value);
        }}
        onComplete={(value) => {
          onComplete(value);
        }}
        secret={true}
        type="numeric"
        initialValue=""
      />

      <div className="mfa-button">
        <FillButton isLoading={isLoading} disabled>Submit</FillButton>
        <FillButton colorVariant={ButtonColor.danger} onClick={closeMFA}>
          Cancel
        </FillButton>
      </div>
    </Modal>
  );
}

export default MfaInput;
