import React from "react";
import classNames from "classnames";

function Steps(props) {
  const { currentStep } = props;

  return (
    <div className="steps mb-4">
      <div className="step">
        <div
          className={classNames("step__marker", {
            step__active: currentStep === 1,
            step__done: currentStep > 1
          })}
        >
          1
        </div>
        <div
          className={classNames("step__line", {
            step__line__active: currentStep >= 2
          })}
        />
        <div className="step__title mt-1">Basic</div>
      </div>
      <div className="step">
        <div
          className={classNames("step__marker", {
            step__active: currentStep === 2,
            step__done: currentStep > 2
          })}
        >
          2
        </div>
        <div
          className={classNames("step__line", {
            step__line__active: currentStep >= 3
          })}
        />
        <div className="step__title mt-1">Contacts</div>
      </div>
      <div className="step">
        <div
          className={classNames("step__marker", {
            step__active: currentStep === 3,
            step__done: currentStep > 3
          })}
        >
          3
        </div>
        <div
          className={classNames("step__line", {
            step__line__active: currentStep >= 4
          })}
        />
        <div className="step__title mt-1">Avatar</div>
      </div>
      <div className="step">
        <div
          className={classNames("step__marker", {
            step__active: currentStep === 4
          })}
        >
          4
        </div>
        <div className="step__title mt-1">Finish</div>
      </div>
    </div>
  );
}

export default Steps;
