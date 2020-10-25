import React from "react";
import { useState } from "react";

export default function PassengerForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [passportNumber, setPassportNumber] = useState("");

  return (
    <>
      <li className="c-form-list__item">
        <label className="c-form-label" for="f-firstName">
          First Name{" "}
          <abbr title="This field is required" class="c-form-required">
            *
          </abbr>
        </label>
        <input
          className="c-form-input"
          placeholder="e.g. John"
          name="f-firstName"
          id="f-firstName"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
          data-test="WhosFlying-first-name"
          required
        />
      </li>

      <li className="c-form-list__item">
        <label className="c-form-label" for="f-lastName">
          Last Name{" "}
          <abbr title="This field is required" class="c-form-required">
            *
          </abbr>
        </label>
        <input
          className="c-form-input"
          placeholder="e.g. Smith"
          name="f-lastName"
          id="f-lastName"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
          data-test="WhosFlying-last-name"
          required
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
          onChange={(e) => setDateOfBirth(e.target.value)}
          value={dateOfBirth}
          data-test="WhosFlying-dateOfBirth"
        />
      </li>

      <li className="c-form-list__item">
        <label className="c-form-label" for="f-passportNumber">
          Passport Number{" "}
          <abbr title="This field is required" class="c-form-required">
            *
          </abbr>
        </label>
        <input
          className="c-form-input"
          placeholder="e.g. 123456789"
          name="f-passportNumber"
          id="f-passportNumber"
          onChange={(e) => setPassportNumber(e.target.value)}
          value={passportNumber}
          data-test="WhosFlying-passport-number"
          required
        />
      </li>
    </>
  );
}
