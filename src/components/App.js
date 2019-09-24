import React from "react";
import Registration from "./Steps/Registration";
import Contacts from "./Steps/Contacts";
import Avatar from "./Steps/Avatar";
import Summary from "./Steps/Summary";
import Steps from "./Utilities/Steps";
import NavigationButtons from "./Utilities/Navigation Buttons";
import ResetButton from "./Utilities/Reset Button";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      password: "",
      repeatPassword: "",
      gender: "",
      currentStep: 1,
      email: "",
      mobile: "",
      country: 2,
      city: "",
      avatar: "",
      errors: {
        firstName: "",
        lastName: "",
        password: "",
        repeatPassword: "",
        gender: "",
        email: "",
        mobile: "",
        city: "",
        avatar: ""
      }
    };
  }

  onChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevState => ({
      city: name === "country" ? "" : prevState.city,
      [name]: value,
      errors: {
        ...prevState.errors,
        [name]: ""
      }
    }));
  };

  validationForm = () => {
    const errors = {};
    const {
      currentStep,
      firstName,
      lastName,
      password,
      repeatPassword,
      gender,
      email,
      mobile,
      city,
      avatar
    } = this.state;

    if (currentStep === 1) {
      if (firstName.length < 5) {
        firstName === ""
          ? (errors.firstName = "Required")
          : (errors.firstName = "Must be 5 characters or more");
      }
      if (lastName.length < 5) {
        lastName === ""
          ? (errors.lastName = "Required")
          : (errors.lastName = "Must be 5 characters or more");
      }
      if (password.length < 6) {
        password === ""
          ? (errors.password = "Required")
          : (errors.password = "Must be 6 characters or more");
      }
      if (password !== repeatPassword) {
        errors.repeatPassword = "Must be equal password";
      }
      if (!gender) {
        errors.gender = "Gender Required";
      }
    } else if (currentStep === 2) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        email === ""
          ? (errors.email = "Required")
          : (errors.email = "Invalid email address");
      }
      if (!/^\d{10}$/.test(mobile)) {
        errors.mobile = "Invalid mobile";
      }
      if (!city) {
        errors.city = "Required";
      }
    } else if (currentStep === 3) {
      if (!avatar) {
        errors.avatar = "Required";
      }
    }
    return errors;
  };

  onSubmit = () => {
    const errors = this.validationForm();
    if (Object.keys(errors).length) {
      this.setState({
        errors: errors
      });
    } else {
      this.setState(prevState => ({
        currentStep: prevState.currentStep + 1,
        errors: ""
      }));
    }
  };

  onPrev = () => {
    this.setState(prevState => ({
      currentStep: prevState.currentStep - 1
    }));
  };

  reset = () => {
    this.setState({
      firstName: "",
      lastName: "",
      password: "",
      repeatPassword: "",
      gender: "",
      currentStep: 1,
      email: "",
      mobile: "",
      country: 2,
      city: "",
      avatar: "",
      errors: {
        firstName: "",
        lastName: "",
        password: "",
        repeatPassword: "",
        gender: "",
        email: "",
        mobile: "",
        city: "",
        avatar: ""
      }
    });
  };

  render() {
    const {
      currentStep,
      firstName,
      lastName,
      password,
      repeatPassword,
      email,
      mobile,
      city,
      avatar,
      country
    } = this.state;

    return (
      <div className="form-container card">
        <form className="form card-body">
          <Steps currentStep={currentStep} />

          {currentStep === 1 && (
            <Registration
              valueFirstName={firstName}
              onChange={this.onChange}
              errorFirstName={this.state.errors.firstName}
              valueLastName={lastName}
              errorLastName={this.state.errors.lastName}
              valuePassword={password}
              errorPassword={this.state.errors.password}
              valueRepeatPassword={repeatPassword}
              errorRepeatPassword={this.state.errors.repeatPassword}
              errorGender={this.state.errors.gender}
            />
          )}

          {currentStep === 2 && (
            <Contacts
              valueEmail={email}
              onChange={this.onChange}
              onChangeCountry={this.onChangeCountry}
              errorEmail={this.state.errors.email}
              valueMobile={mobile}
              errorMobile={this.state.errors.mobile}
              country={country}
              setOptionItems={this.setOptionItems}
              setCityOptions={this.setCityOptions}
              city={city}
              errorCity={this.state.errors.city}
            />
          )}

          {currentStep === 3 && (
            <Avatar
              onChange={this.onChange}
              errorAvatar={this.state.errors.avatar}
              avatar={avatar}
            />
          )}

          {currentStep === 4 && (
            <Summary
              avatar={avatar}
              firstName={firstName}
              lastName={lastName}
              email={email}
              mobile={mobile}
              city={city}
              country={country}
            />
          )}

          {currentStep !== 4 && (
            <NavigationButtons
              onPrev={this.onPrev}
              onSubmit={this.onSubmit}
              currentStep={currentStep}
            />
          )}

          {currentStep === 4 && <ResetButton reset={this.reset} />}
        </form>
      </div>
    );
  }
}
