import Button from "../button/Button";
import styles from "./SearchBar.module.scss";
import React, { useState } from "react";

export default function SearchBar() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [inboundDate, setInboundDate] = useState("");
  const [outboundDate, setOutboundDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/flights`)
      .then((response) => response.json())
      .then((flights) => {
        alert("Looking for your flights!");
        this.setState({ flights: flights });
      })
      .catch((error) => {
        alert("Sorry, we couldn't find that flight, try again!");
      });
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)} className={styles.form}>
      <fieldset>
        <legend className="c-form-caption">Example</legend>
        <ul className={"c-form-list " + styles.formList}>
          <li>
            <label className="c-form-label" htmlFor="from">
              From
            </label>
            <input
              type="text"
              className="c-form-input"
              placeholder="e.g. London"
              name="from"
              id="from"
              onChange={(e) => setFrom(e.target.value)}
              value={from}
              data-test="SearchBar-from"
            />
          </li>

          <li>
            <label className="c-form-label" htmlFor="to">
              To
            </label>
            <input
              type="text"
              className="c-form-input"
              placeholder="e.g. Split"
              name="to"
              id="to"
              onChange={(e) => setTo(e.target.value)}
              value={to}
              data-test="SearchBar-to"
            />
          </li>

          <li>
            <label className="c-form-label" htmlFor="f-out-date">
              Outbound Date
            </label>
            <input
              type="date"
              className="c-form-date"
              placeholder="dd/mm/yyyy"
              name="outboundDate"
              id="f-out-date"
              min={new Date().toISOString().split("T")[0]}
              onChange={(e) => setOutboundDate(e.target.value)}
              value={outboundDate}
              data-test="SearchBar-outbound-date"
            />
          </li>

          <li>
            <label className="c-form-label" htmlFor="f-in-date">
              Inbound Date
            </label>
            <input
              type="date"
              className="c-form-date"
              placeholder="dd/mm/yyyy"
              name="inboundDate"
              id="f-in-date"
              min={outboundDate}
              onChange={(e) => setInboundDate(e.target.value)}
              value={inboundDate}
              data-test="SearchBar-inbound-date"
            />
          </li>

          <li>
            <Button type="submit" data-test="SearchBar-submit">
              Search
            </Button>
          </li>
        </ul>
      </fieldset>
    </form>
  );
}
