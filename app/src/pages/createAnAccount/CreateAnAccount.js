import React, { useState } from "react";
import { Link } from "react-router-dom";

import Button from "../../components/button/Button";
import styles from "./createAnAccount.module.scss";

export default function CreateAnAccount() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [postcode, setPostcode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thanks for signing you up with these details....${firstName} ${lastName} ${email} ${houseNumber} ${postcode}`
    ); //just a placeholder for our post request
  };

  return (
    <section className={styles.section}>
      <h1 className={styles.h1}>Create an Account</h1>

      <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <fieldset>
          <legend className="c-form-caption">Example</legend>
          <ul className={"c-form-list " + styles.formList}>
            <li className="c-form-list__item">
              <label className="c-form-label" for="f-firstname">
                First name{" "}
                <abbr title="This field is required" class="c-form-required">
                  *
                </abbr>
              </label>
              <input
                type="text"
                className="c-form-input"
                placeholder="e.g. Joe"
                name="f-firstname"
                id="f-firstname"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                data-test="CreateAnAccount-first-name"
                required
              />
            </li>

            <li className="c-form-list__item">
              <label className="c-form-label" for="f-lastname">
                Last name{" "}
                <abbr title="This field is required" class="c-form-required">
                  *
                </abbr>
              </label>
              <input
                type="text"
                className="c-form-input"
                placeholder="e.g. Smith"
                name="f-lastname"
                id="f-lastname"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                data-test="CreateAnAccount-last-name"
                required
              />
            </li>

            <li className="c-form-list__item">
              <label className="c-form-label" for="f-email">
                Email{" "}
                <abbr title="This field is required" class="c-form-required">
                  *
                </abbr>
              </label>
              <input
                type="email"
                className="c-form-input"
                placeholder="e.g. joe@bloggs.com"
                name="f-email"
                id="f-email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                data-test="CreateAnAccount-email"
                required
              />
            </li>

            <li className="c-form-list__item">
              <label className="c-form-label" for="f-password">
                Password{" "}
                <abbr title="This field is required" class="c-form-required">
                  *
                </abbr>
              </label>
              <input
                type="password"
                className="c-form-input"
                placeholder="*****"
                name="f-password"
                id="f-password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                data-test="CreateAnAccount-password"
                required
              />
            </li>

            <li className="c-form-list__item">
              <label className="c-form-label" for="f-housenumber">
                House Number / Name{" "}
                <abbr title="This field is required" class="c-form-required">
                  *
                </abbr>
              </label>
              <input
                type="text"
                className="c-form-input"
                placeholder="e.g. 1 Grant Way"
                name="f-housenumber"
                id="f-housenumber"
                onChange={(e) => setHouseNumber(e.target.value)}
                value={houseNumber}
                data-test="CreateAnAccount-house-number"
                required
              />
            </li>

            <li className="c-form-list__item">
              <label className="c-form-label" for="f-postcode">
                Postcode{" "}
                <abbr title="This field is required" class="c-form-required">
                  *
                </abbr>
              </label>
              <input
                type="text"
                className="c-form-input"
                placeholder="e.g. SW1W 0NY"
                name="f-postcode"
                id="f-postcode"
                onChange={(e) => setPostcode(e.target.value)}
                value={postcode}
                data-test="CreateAnAccount-postcode"
                required
              />
            </li>

            <Button data-test="CreateAnAccount-next">Create</Button>
          </ul>
        </fieldset>

        <Link
          to={`/sign-in`}
          data-test="CreateAnAccount-sign-in"
          className={styles.signIn}
        >
          Or sign in
        </Link>
      </form>
    </section>
  );
}
