import React from "react";

const PassengerForm = (props) => {
  return (
    <>
      <li className="c-form-list__item">
        <label className="c-form-label" for="f-firstName">
          First Name{" "}
        </label>
        <input
          className="c-form-input"
          placeholder="e.g. John"
          name="f-firstName"
          id="f-firstName"
          onChange={(e) => props.setFirstName(e.target.value)}
          value={props.firstName}
          data-test="WhosFlying-first-name"
        />
      </li>

      <li className="c-form-list__item">
        <label className="c-form-label" for="f-lastName">
          Last Name{" "}
        </label>
        <input
          className="c-form-input"
          placeholder="e.g. Smith"
          name="f-lastName"
          id="f-lastName"
          onChange={(e) => props.setLastName(e.target.value)}
          value={props.lastName}
          data-test="WhosFlying-last-name"
        />
      </li>

      <li>
        <label className="c-form-label" htmlFor="f-date-of-birth">
          Date Of Birth
        </label>
        <input
          type="date"
          className="c-form-date"
          placeholder="dd/mm/yyyy"
          name="dateOfBirth"
          id="f-dateOfBirth"
          max={new Date().toISOString().split("T")[0]}
          onChange={(e) => props.setDateOfBirth(e.target.value)}
          value={props.dateOfBirth}
          data-test="WhosFlying-dateOfBirth"
        />
      </li>

      <li className="c-form-list__item">
        <label className="c-form-label" for="f-passportNumber">
          Passport Number{" "}
        </label>
        <input
          className="c-form-input"
          placeholder="e.g. 123456789"
          name="f-passportNumber"
          id="f-passportNumber"
          onChange={(e) => props.setPassportNumber(e.target.value)}
          value={props.passportNumber}
          data-test="WhosFlying-passport-number"
        />
      </li>
    </>
  );
};

export default PassengerForm;
