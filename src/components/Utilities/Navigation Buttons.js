import React from "react";

export default class NavigationButtons extends React.Component {
  render() {
    const { onPrev, onSubmit, currentStep } = this.props;

    return (
      <div className="btn-toolbar mx-auto" style={{ width: 40 + "%" }}>
        <button
          type="button"
          className="btn btn-light btn-md mr-3"
          onClick={onPrev}
          disabled={currentStep === 1 ? true : false}
        >
          Previous
        </button>
        <button
          type="button"
          className="btn btn-secondary btn-md"
          onClick={onSubmit}
        >
          Next
        </button>
      </div>
    );
  }
}
