import React from "react";
import Countries from "../../data/countries";

export default class Summary extends React.Component {
  displayCountry = items =>
    items.find(item => item.id === +this.props.country).name;

  render() {
    const { avatar, firstName, lastName, email, mobile, city } = this.props;

    return (
      <div className="page4">
        <div className="row mb-4">
          <img className="col-4" alt="" src={avatar} />
          <div className="col-8 d-flex align-items-center">
            <h4>
              {firstName} {lastName}
            </h4>
          </div>
        </div>
        <div className="card__contact mb-4">
          <p>
            <strong>Email: </strong>
            {email}
          </p>
          <p>
            <strong>Mobile: </strong>
            {mobile}
          </p>
          <p>
            <strong>Location: </strong>
            {this.displayCountry(Countries)}, {city}
          </p>
        </div>
      </div>
    );
  }
}
