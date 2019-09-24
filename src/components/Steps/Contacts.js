import React from "react";
import Field from "../Utilities/Field";
import Countries from "../../data/countries";
import Cities from "../../data/cities";

export default class Contacts extends React.Component {
  setCityOptions = () => {
    return Object.values(Cities)
      .filter(item => item.country === +this.props.country)
      .map((item, index) => (
        <option key={index} value={item.name}>
          {item.name}
        </option>
      ));
  };

  componentDidUpdate(prevProps) {
    if (this.props.country !== prevProps.country) {
      this.props.onChange({
        target: {
          name: "city",
          value: ""
        }
      });
    }
  }

  render() {
    const {
      valueEmail,
      onChange,
      errorEmail,
      valueMobile,
      errorMobile,
      country,
      errorCity,
      city
    } = this.props;

    return (
      <div className="page_2">
        <Field
          labelText="Email"
          id="email"
          type="text"
          name="email"
          value={valueEmail}
          onChange={onChange}
          placeholder="Enter Email"
          error={errorEmail}
        />
        <Field
          labelText="Mobile"
          id="mobile"
          type="text"
          name="mobile"
          value={valueMobile}
          onChange={onChange}
          placeholder="10 digits format"
          error={errorMobile}
        />
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <select
            className="form-control"
            id="country"
            name="country"
            value={country}
            onChange={onChange}
          >
            {Countries.map(item => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
            ;
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <select
            className={
              errorCity ? "form-control border-danger" : "form-control"
            }
            id="city"
            name="city"
            value={city}
            onChange={onChange}
            error={errorCity}
          >
            <option key={0} value={""}>
              Select city
            </option>
            {this.setCityOptions()}
          </select>
          {errorCity ? (
            <div className="invalid-feedback">{errorCity}</div>
          ) : null}
        </div>
      </div>
    );
  }
}
