import React from "react";
import styles from "./createAnAccount.module.css";

export default function CreateAnAccount() {
  return (
    <section id="createAccountSection" className={styles.CreateAnAccount}>
      <h1 className="c-heading-alpha">Create an Account</h1>

      <form>
        <fieldset>
          <legend className="c-form-caption">Example</legend>
          <ul className="c-form-list">
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
              <label class="c-form-label" for="f-lastname">
                Last name{" "}
                <abbr title="This field is required" class="c-form-required">
                  *
                </abbr>
              </label>
              <input
                type="text"
                className="c-form-input"
                placeholder="e.g. Smith"
                name="f-lasstname"
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

            <li>
              <button type="submit" className="c-btn c-btn--primary">
                Next
              </button>
            </li>
          </ul>
        </fieldset>
      </form>
    </section>
  );
}
