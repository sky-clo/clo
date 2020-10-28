import Button from "../button/Button";
import styles from "./SearchBar.module.scss";
import React, { useEffect, useState } from "react";
import AsyncSelect from "react-select/async";
import useApi from "../../hooks/useApi";

export default function SearchBar() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [inboundDate, setInboundDate] = useState("");
  const [outboundDate, setOutboundDate] = useState("");
  const [outLocationOptions, setOutLocationOptions] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/flights`) //change this to add details to request
      .then((response) => response.json())
      .then()
      .catch((error) => {
        alert("Sorry, we couldn't find any flights, try again!");
      });
  };

  const loadOptions = (from) => {
    return new Promise((resolve) => {
      let options = {
        method: "GET",
        headers: { Accept: "application/json" },
      };

      fetch(`http://localhost:8080/airports?query=${from}`, options)
        .then((response) => response.json())
        .then((locations) => {
          //setOutLocationOptions(locations);
          console.log(locations.Places);
          resolve(
            locations.map((value) => {
              return { value: value.PlaceId, label: value.PlaceName };
            })
          );
        })
        .catch((error) => {
          //do something...
        });
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

            <AsyncSelect
              defaultOptions
              name="from"
              id="from"
              data-test="SearchBar-from"
              loadOptions={loadOptions}
              onInputChange={(e) => setFrom(e)}
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
