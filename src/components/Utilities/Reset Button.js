import React from "react";

export default class ResetButton extends React.Component {
  render() {
    return (
      <div className=" d-flex justify-content-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.props.reset}
        >
          Reset
        </button>
      </div>
    );
  }
}
