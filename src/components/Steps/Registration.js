import React from "react";
import Field from "../Utilities/Field";

export default class Registration extends React.Component {
  render() {
    const {
      valueFirstName,
      onChange,
      errorFirstName,
      valueLastName,
      errorLastName,
      valuePassword,
      errorPassword,
      valueRepeatPassword,
      errorRepeatPassword,
      errorGender
    } = this.props;

    return (
      <div className="page_1">
        <Field
          labelText="First Name"
          id="firstName"
          type="text"
          name="firstName"
          value={valueFirstName}
          onChange={onChange}
          placeholder="Enter First Name"
          error={errorFirstName}
        />
        <Field
          labelText="Last Name"
          id="lastName"
          type="text"
          name="lastName"
          value={valueLastName}
          onChange={onChange}
          placeholder="Enter Last Name"
          error={errorLastName}
        />
        <Field
          labelText="Password"
          id="password"
          type="password"
          name="password"
          value={valuePassword}
          onChange={onChange}
          placeholder="Enter Password"
          error={errorPassword}
        />
        <Field
          labelText="Repeat Password"
          id="repeatPassword"
          type="password"
          name="repeatPassword"
          value={valueRepeatPassword}
          onChange={onChange}
          placeholder="Enter Repeat Password"
          error={errorRepeatPassword}
        />
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="male"
            value="male"
            onChange={onChange}
          />
          <label className="form-check-label" htmlFor="male">
            Male
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="female"
            value="female"
            onChange={onChange}
          />
          <label className="form-check-label" htmlFor="female">
            Female
          </label>
        </div>
        {[errorGender] ? (
          <div className="invalid-feedback">{errorGender}</div>
        ) : null}
      </div>
    );
  }
}
