import Button from "../button/Button";
import styles from "./SearchBar.module.scss";
import React, { useEffect, useState } from "react";
import AsyncSelect from "react-select/async";
import Select from "react-select";
import useApi from "../../hooks/useApi";
import debounce from "lodash.debounce";

export const colourOptions = [
  { value: "ocean", label: "Ocean", color: "#00B8D9", isFixed: true },
  { value: "blue", label: "Blue", color: "#0052CC", isDisabled: true },
  { value: "purple", label: "Purple", color: "#5243AA" },
  { value: "red", label: "Red", color: "#FF5630", isFixed: true },
  { value: "orange", label: "Orange", color: "#FF8B00" },
  { value: "yellow", label: "Yellow", color: "#FFC400" },
  { value: "green", label: "Green", color: "#36B37E" },
  { value: "forest", label: "Forest", color: "#00875A" },
  { value: "slate", label: "Slate", color: "#253858" },
  { value: "silver", label: "Silver", color: "#666666" },
];

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

  function loadOptions(inputValue, callback) {
    const options = {
      method: "GET",
      headers: { Accept: "application/json" },
    };

    fetch(`http://localhost:8080/airports?query=${inputValue}`, options)
      .then((response) => response.json())
      .then(({ Places }) => {
        const values = Places.map(({ PlaceId, PlaceName }) => ({
          value: PlaceId,
          label: PlaceName,
        }));

        callback(values);
      });
  }

  const debouncedFetchPlaces = debounce(loadOptions, 300);

  function getPlaceOptions(input, callback) {
    if (input?.length === 0 || !input) {
      return callback(null, { options: [] });
    }

    debouncedFetchPlaces(input, callback);
  }

  return (
    <form onSubmit={(event) => handleSubmit(event)} className={styles.form}>
      <fieldset>
        <legend className="c-form-caption">Example</legend>
        <ul className={"c-form-list " + styles.formList}>
          <li className={styles.reactSelectContainer}>
            <label className="c-form-label" htmlFor="from">
              From
            </label>
            <AsyncSelect
              cacheOptions
              defaultOptions
              loadOptions={getPlaceOptions}
              onChange={(e) => setFrom(e)}
            />
          </li>

          <li className={styles.reactSelectContainer}>
            <label className="c-form-label" htmlFor="to">
              To
            </label>
            <AsyncSelect
              cacheOptions
              defaultOptions
              loadOptions={getPlaceOptions}
              onChange={(e) => setTo(e)}
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
