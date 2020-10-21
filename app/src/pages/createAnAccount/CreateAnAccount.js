import React from "react";
import styles from "./createAnAccount.module.css";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function CreateAnAccount() {
  const [firstName, setFirstName] = useState("dave");
  const [lastName, setLastName] = useState("smith");
  const [email, setEmail] = useState("afsfwe@aasdasd.com");
  const [password, setPassword] = useState("password");
  const [houseNumber, setHouseNumber] = useState("number 99");
  const [postcode, setPostcode] = useState("W1a 1aa");

  return (
    <section className={styles.section}>
      <h1 className={styles.h1}>Create an Account</h1>

      <form className={styles.form}>
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
                required
              />
            </li>

            <Button>Next</Button>
          </ul>
        </fieldset>
        <Link to={`/sign-in`}>Or sign in</Link>
      </form>
    </section>
  );
}
