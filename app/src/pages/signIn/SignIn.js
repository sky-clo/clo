import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";

import Button from "../../components/button/Button";
import styles from "./signIn.module.scss";

export default function SignIn() {
  //const [email, setEmail] = useState("");
  //const [password, setPassword] = useState("");
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section className={styles.section}>
      <h1 className={styles.h1}>Sign In</h1>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend className="c-form-caption">Example</legend>
          <ul className={"c-form-list " + styles.formList}>
            <li className="c-form-list__item">
              <label className="c-form-label" htmlFor="f-email">
                Email
                <abbr
                  title="This field is required"
                  className="c-form-required"
                >
                  *
                </abbr>
              </label>
              <input
                type="email"
                className="c-form-input"
                placeholder="e.g. joe@bloggs.com"
                name="f-email"
                id="f-email"
                ref={register({ required: true })}
                //onChange={(e) => setEmail(e.target.value)}
                //value={email}
                data-test="SignIn-email"
                required
              />
            </li>

            <li className="c-form-list__item">
              <label className="c-form-label" htmlFor="f-password">
                Password
                <abbr
                  title="This field is required"
                  className="c-form-required"
                >
                  *
                </abbr>
              </label>
              <input
                type="password"
                className="c-form-input"
                placeholder="*****"
                name="f-password"
                id="f-password"
                ref={register({ required: true })}
                //onChange={(e) => setPassword(e.target.value)}
                //value={password}
                data-test="SignIn-password"
                required
              />
            </li>
            <Button data-test="SignIn-next">Next</Button>
          </ul>
        </fieldset>
        <Link to="/create-an-account" data-test="SignIn-create-an-account">
          Or create an account
        </Link>
      </form>
    </section>
  );
}
