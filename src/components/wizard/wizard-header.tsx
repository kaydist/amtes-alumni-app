import React from "react";
import "./_wizard-header.scss";

export interface WizardHeaderProps {
  totalSteps: number;
  completedSteps: Array<number>;
}

function WizardHeader(props: WizardHeaderProps) {
  const { completedSteps, totalSteps } = props;
  return (
    <div className="wizard-nav-container">
      {[...Array(totalSteps)].map((step, idx: number) => {
        return (
          <div
            key={idx}
            className={`step-nav-indicator ${
              completedSteps.includes(idx) && `active`
            }`}
          />
        );
      })}
    </div>
  );
}

export default WizardHeader;
