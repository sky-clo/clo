import React from "react";
import styles from "./whosFlying.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import LinkButton from "../../components/linkButton/LinkButton";

export default function WhosFlying() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [passportNumber, setPassportNumber] = useState("");
  const [passengers, setPassengers] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    setPassengers([
      ...passengers,
      {
        firstName: firstName,
        lastName: lastName,
        dateOfBirth: dateOfBirth,
        passportNumber: passportNumber,
      },
    ]);
    setFirstName(""); //clear from after submitting each passenger
    setLastName("");
    setDateOfBirth("");
    setPassportNumber("");
  };

  return (
    <section className={styles.section}>
      <h1 className={styles.h1}>Who's Flying</h1>

      <form className={styles.form}>
        <fieldset>
          <legend className="c-form-caption">Example</legend>

          {passengers.length > 0 && (
            <>
              <ul>
                {passengers.map((passenger) => (
                  <li>
                    <b>Name:</b> {passenger.firstName} {passenger.lastName}
                    {"  "}
                    <b>Date Of Birth:</b>
                    {"  "}
                    {passenger.dateOfBirth.split("-").reverse().join("-")}
                    {"  "}
                    <b> Passport Number:</b> {passenger.passportNumber}
                  </li>
                ))}
              </ul>
            </>
          )}

          <ul className={"c-form-list " + styles.formList}>
            <li className="c-form-list__item">
              <label className="c-form-label" htmlFor="f-firstName">
                First Name{" "}
              </label>
              <input
                className="c-form-input"
                placeholder="e.g. John"
                name="f-firstName"
                id="f-firstName"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                data-test="WhosFlying-first-name"
              />
            </li>

            <li className="c-form-list__item">
              <label className="c-form-label" htmlFor="f-lastName">
                Last Name{" "}
              </label>
              <input
                className="c-form-input"
                placeholder="e.g. Smith"
                name="f-lastName"
                id="f-lastName"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
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
                onChange={(e) => setDateOfBirth(e.target.value)}
                value={dateOfBirth}
                data-test="WhosFlying-dateOfBirth"
              />
            </li>

            <li className="c-form-list__item">
              <label className="c-form-label" htmlFor="f-passportNumber">
                Passport Number{" "}
              </label>
              <input
                className="c-form-input"
                placeholder="e.g. 123456789"
                name="f-passportNumber"
                id="f-passportNumber"
                onChange={(e) => setPassportNumber(e.target.value)}
                value={passportNumber}
                data-test="WhosFlying-passport-number"
              />
            </li>

            <Link onClick={(e) => handleClick(e)}>Add Passenger</Link>

            <br />
            <br />

            <LinkButton
              data-test="WhosFlying-next"
              href="/payment"
              Next
            </LinkButton>
          </ul>
        </fieldset>
      </form>
    </section>
  );
}
