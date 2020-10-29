import React from "react";

import LinkButton from "../../components/linkButton/LinkButton";
import styles from "./Payment.module.scss";

export default function Payment() {
  return (
    <section className={styles.section}>
      <h1 className={styles.h1}>Payment</h1>

      <form className={styles.form}>
        <fieldset>
          <legend className="c-form-caption">Payment form</legend>
          <ul className={"c-form-list " + styles.formList}>
            <li className="c-form-list__item">
              <label className="c-form-label" htmlFor="f-account-name">
                Account Name{" "}
                <abbr
                  title="This field is required"
                  className="c-form-required"
                >
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
              <label className="c-form-label" htmlFor="f-account-number">
                Card Number{" "}
                <abbr
                  title="This field is required"
                  className="c-form-required"
                >
                  *
                </abbr>
              </label>
              <input
                type="number"
                className="c-form-input"
                placeholder="e.g. 123456789"
                name="f-account-number"
                id="f-account-number"
                data-test="Payment-account-number"
                required
              />
            </li>

            <li className="c-form-list__item">
              <label className="c-form-label" htmlFor="f-sort-code">
                Expiry Date{" "}
                <abbr
                  title="This field is required"
                  className="c-form-required"
                >
                  *
                </abbr>
              </label>
              <input
                type="text"
                className="c-form-input"
                placeholder="e.g. 01/20"
                name="f-sort-code"
                id="f-sort-code"
                data-test="Payment-sort-code"
                required
              />
            </li>

            <li className="c-form-list__item">
              <label className="c-form-label" htmlFor="f-cvv">
                CVV{" "}
                <abbr
                  title="This field is required"
                  className="c-form-required"
                >
                  *
                </abbr>
              </label>
              <input
                type="number"
                className="c-form-input"
                placeholder="*****"
                name="f-cvv"
                id="f-cvv"
                data-test="Payment-cvv"
                required
              />
            </li>

            <LinkButton data-test="Payment-next" to="/complete">
              Next
            </LinkButton>
          </ul>
        </fieldset>
      </form>
    </section>
  );
}
