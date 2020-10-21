import React from "react";
import styles from "./signIn.module.css";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <section className={styles.section}>
      <h1 className={styles.h1}>Sign In</h1>

      <form className={styles.form}>
        <fieldset>
          <legend className="c-form-caption">Example</legend>
          <ul className={"c-form-list " + styles.formList}>
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

            <Button>Next</Button>
          </ul>
        </fieldset>
        <Link to={`/create-an-account`}>Or create an account</Link>
      </form>
    </section>
  );
}
