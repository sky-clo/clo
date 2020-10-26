import React, { useState } from "react";

import Button from "../../components/button/Button";
import styles from "./Payment.module.scss";

export default function Payment() {
  function handleSubmit(event) {
    event.preventDefault();
    // TODO: submit trip
  }

  return (
    <section className={styles.section}>
      <h1 className={styles.h1}>Payment</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <fieldset>
          <legend className="c-form-caption">Payment form</legend>
          <ul className={"c-form-list " + styles.formList}>
            <li className="c-form-list__item">
              <label className="c-form-label" for="f-account-name">
                Account Name{" "}
                <abbr title="This field is required" class="c-form-required">
                  *
                </abbr>
              </label>
              <input
                type="text"
                className="c-form-input"
                placeholder="e.g. Mr John Smith"
                name="f-account-name"
                id="f-account-name"
                data-test="Payment-account-name"
                required
              />
            </li>

            <li className="c-form-list__item">
              <label className="c-form-label" for="f-account-number">
                Account Number{" "}
                <abbr title="This field is required" class="c-form-required">
                  *
                </abbr>
              </label>
              <input
                type="text"
                className="c-form-input"
                placeholder="e.g. 123456789"
                name="f-account-number"
                id="f-account-number"
                data-test="CreateAnAccount-account-number"
                required
              />
            </li>

            <li className="c-form-list__item">
              <label className="c-form-label" for="f-sort-code">
                Sort Code{" "}
                <abbr title="This field is required" class="c-form-required">
                  *
                </abbr>
              </label>
              <input
                type="text"
                className="c-form-input"
                placeholder="e.g. 01-01-01"
                name="f-sort-code"
                id="f-sort-code"
                data-test="CreateAnAccount-sort-code"
                required
              />
            </li>

            <li className="c-form-list__item">
              <label className="c-form-label" for="f-cvv">
                CVV{" "}
                <abbr title="This field is required" class="c-form-required">
                  *
                </abbr>
              </label>
              <input
                type="number"
                className="c-form-input"
                placeholder="*****"
                name="f-cvv"
                id="f-cvv"
                data-test="CreateAnAccount-cvv"
                required
              />
            </li>

            <Button data-test="CreateAnAccount-next">Next</Button>
          </ul>
        </fieldset>
      </form>
    </section>
  );
}
