import Button from "../button/Button";
import styles from "./SearchBar.module.scss";
import React, { useState } from "react";
import AsyncSelect from "react-select/async";
import debounce from "lodash.debounce";
import { useHistory } from "react-router-dom";

export default function SearchBar() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [inboundDate, setInboundDate] = useState("");
  const [outboundDate, setOutboundDate] = useState("");
  const history = useHistory();

  const onSearchSubmit = (e) => {
    e.preventDefault();
    history.push({
      pathname: "/search",
      search: `?from=${from.value}&to=${to.value}&inboundDate=${inboundDate}&outboundDate=${outboundDate}`,
      state: { from, to, inboundDate, outboundDate },
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
    <form onSubmit={onSearchSubmit} className={styles.form}>
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
