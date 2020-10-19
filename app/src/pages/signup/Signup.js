import React from "react";
import styles from "./signup.module.css";

export default function Signup() {
  return (
    <section className={styles.signup}>
      <h1 class="c-heading-alpha">Create an Account</h1>

      <form>
        <fieldset>
          <legend class="c-form-caption">Example</legend>
          <ul class="c-form-list">
            <li class="c-form-list__item">
              <label class="c-form-label" for="f-firstname">
                First name{" "}
                <abbr title="This field is required" class="c-form-required">
                  *
                </abbr>
              </label>
              <input
                type="text"
                class="c-form-input"
                placeholder="e.g. Joe"
                name="f-firstname"
                id="f-firstname"
                required
              />
            </li>

            <li class="c-form-list__item">
              <label class="c-form-label" for="f-lastname">
                Last name{" "}
                <abbr title="This field is required" class="c-form-required">
                  *
                </abbr>
              </label>
              <input
                type="text"
                class="c-form-input"
                placeholder="e.g. Smith"
                name="f-lasstname"
                id="f-lastname"
                required
              />
            </li>

            <li class="c-form-list__item">
              <label class="c-form-label" for="f-email">
                Email{" "}
                <abbr title="This field is required" class="c-form-required">
                  *
                </abbr>
              </label>
              <input
                type="email"
                class="c-form-input"
                placeholder="e.g. joe@bloggs.com"
                name="f-email"
                id="f-email"
                required
              />
            </li>

            <li class="c-form-list__item">
              <label class="c-form-label" for="f-password">
                Password{" "}
                <abbr title="This field is required" class="c-form-required">
                  *
                </abbr>
              </label>
              <input
                type="password"
                class="c-form-input"
                placeholder="*****"
                name="f-password"
                id="f-password"
                required
              />
            </li>

            <li class="c-form-list__item">
              <label class="c-form-label" for="f-housenumber">
                House Number / Name{" "}
                <abbr title="This field is required" class="c-form-required">
                  *
                </abbr>
              </label>
              <input
                type="text"
                class="c-form-input"
                placeholder="e.g. 1 Grant Way"
                name="f-housenumber"
                id="f-housenumber"
                required
              />
            </li>

            <li class="c-form-list__item">
              <label class="c-form-label" for="f-postcode">
                Postcode{" "}
                <abbr title="This field is required" class="c-form-required">
                  *
                </abbr>
              </label>
              <input
                type="text"
                class="c-form-input"
                placeholder="e.g. SW1W 0NY"
                name="f-postcode"
                id="f-postcode"
                required
              />
            </li>
          </ul>
        </fieldset>
      </form>
    </section>
  );
}
