import React from "react";
import styles from "./whosFlying.module.css";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import PassengerForm from "../../components/passengerForm/PassengerForm";

export default function WhosFlying() {
  let passengerCount = 1;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for travelling with CLO`); //just a placeholder for our request
  };

  const handleClick = (e) => {
    e.preventDefault();
    passengerCount += 1;
    alert(`you now have ${passengerCount} passengers`);
  };

  return (
    <section className={styles.section}>
      <h1 className={styles.h1}>Who's Flying</h1>

      <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <fieldset>
          <legend className="c-form-caption">Example</legend>
          <ul className={"c-form-list " + styles.formList}>
            <PassengerForm />

            <Link onClick={(e) => handleClick(e)}>Add Another Person</Link>

            <br />
            <br />

            <Button data-test="SignIn-next">Next</Button>
          </ul>
        </fieldset>
      </form>
    </section>
  );
}
