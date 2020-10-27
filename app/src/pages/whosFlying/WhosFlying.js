import React from "react";
import styles from "./whosFlying.module.css";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";

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

  const handleSubmit = (e) => {
    e.preventDefault();

    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(passengers),
    };

    fetch("http://localhost:3000/passengers", configObj) //not sure what url to post this to??
      .then(function (response) {
        return response.json();
      })
      .then(function (object) {
        console.log(object);
      })
      .catch(function (error) {
        alert(
          "We are sorry, we seem to be having issues, please try again later!"
        );
        console.log(error.message);
      });
  };

  return (
    <section className={styles.section}>
      <h1 className={styles.h1}>Who's Flying</h1>

      <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
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
              <label className="c-form-label" for="f-firstName">
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
              <label className="c-form-label" for="f-lastName">
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
              <label className="c-form-label" for="f-passportNumber">
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

            <Button data-test="WhosFlying-next" type="submit">
              Next
            </Button>
          </ul>
        </fieldset>
      </form>
    </section>
  );
}
