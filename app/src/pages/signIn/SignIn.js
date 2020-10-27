import React, { useContext, useEffect } from "react";
import styles from "./signIn.module.css";
import Button from "../../components/button/Button";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import config from "../../config";
import { AuthContext } from "../../authContext";

export default function SignIn() {
  const { register, handleSubmit, errors } = useForm();
  const { dispatch, auth } = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    if (auth?.jwt) {
      history.push("/");
    }
  }, [auth]);

  async function onLoginSubmit(data) {
    // Build JSON payload to send to our server
    const payload = { username: data["f-email"], password: data["f-password"] };

    // Create fetch request and check correct status code is provided
    fetch(`${config.apiUrl}/authenticate/login`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((j) => {
        // If status code marks success extract JSON for parsing and saving
        if (j.status === 200) {
          return j.json();
        } else {
          throw new Error("Bad Request");
        }
      })
      .then(({ user, jwt }) => {
        const authPayload = { ...user, jwt };
        // Clear any previous localstorage data
        // Destructure user and jwt from our response body
        // And update our user in local auth
        dispatch({ type: "update", payload: authPayload });
      })
      .catch((e) => console.log(e));
  }

  return (
    <section className={styles.section}>
      <h1 className={styles.h1}>Sign In</h1>
      {/* <Button onClick={() => updateAuth({firstName: 'jeff'})}>Click me</Button> */}
      <form className={styles.form} onSubmit={handleSubmit(onLoginSubmit)}>
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
