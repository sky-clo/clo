import React from "react";
import styles from "./whosFlying.module.css";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import PassengerForm from "../../components/passengerForm/PassengerForm.js";

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
    setFirstName(""); //clear from after submitting each user
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
            <PassengerForm
              passengers={passengers}
              setPassengers={setPassengers}
              setFirstName={setFirstName}
              firstName={firstName}
              setLastName={setLastName}
              lastName={lastName}
              setDateOfBirth={setDateOfBirth}
              dateOfBirth={dateOfBirth}
              setPassportNumber={setPassportNumber}
              passportNumber={passportNumber}
            />

            <Link onClick={(e) => handleClick(e)}>Add Another Person</Link>

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
