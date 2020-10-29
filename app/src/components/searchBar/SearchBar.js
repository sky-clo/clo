import Button from "../button/Button";
import styles from "./SearchBar.module.scss";
import React, { useState } from "react";
import AsyncSelect from "react-select/async";
import { components } from "react-select";
import debounce from "lodash.debounce";
import { useHistory } from "react-router-dom";
import { isValid } from "date-fns";

import {
  invalidDateStr,
  isDateSupported,
  noLocationProvidedStr,
} from "../../utils";

// Regex that checks for DD/MM/YYYY or DD-MM-YYYY
const dayMonthYearRegex = /[0-9]{2}(\/|-)[0-9]{2}(\/|-)[0-9]{4}/;
const isDate = RegExp(dayMonthYearRegex);

export default function SearchBar() {
  const [from, setFrom] = useState({});
  const [to, setTo] = useState({});
  const [inboundDate, setInboundDate] = useState("");
  const [outboundDate, setOutboundDate] = useState("");
  const history = useHistory();

  const onSearchSubmit = (e) => {
    // Prevent default form submissions behaviour
    e.preventDefault();

    // Check to see if the user has added a From/To destination
    if (!from?.hasOwnProperty("value") || !to?.hasOwnProperty("value")) {
      return alert(noLocationProvidedStr);
    }

    // Check if user browser supports type="date" on inputs
    const supportsDateInput = isDateSupported();

    // Ensure safari strings are in the correct format
    if (!supportsDateInput) {
      if (!isDate.test(outboundDate) || !isDate.test(inboundDate)) {
        return alert(invalidDateStr);
      }
    }

    // Perform string manipulation from DD/MM/YYYY to YYYY/MM/DD if using safari
    const inbound = supportsDateInput
      ? inboundDate
      : inboundDate
          .split(/[ -/]+/)
          .reverse()
          .join("-");
    const outbound = supportsDateInput
      ? outboundDate
      : outboundDate
          .split(/[ -/]+/)
          .reverse()
          .join("-");

    // Final check to see if our provided dates are valid
    if (!isValid(new Date(inbound)) || !isValid(new Date(outbound))) {
      return alert(invalidDateStr);
    }

    // Push to state and search for the next page to deal with
    history.push({
      pathname: "/search",
      search: `?from=${from.value}&to=${to.value}&inboundDate=${inbound}&outboundDate=${outbound}`,
      state: {
        from,
        to,
        inboundDate: inbound,
        outboundDate: outbound,
      },
    });
  };

  function loadOptions(inputValue, callback) {
    const options = {
      method: "GET",
      headers: { Accept: "application/json" },
    };

    fetch(`${config.apiUrl}/airports?query=${inputValue}`, options)
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
              id="SearchBar-from"
              cacheOptions
              defaultOptions
              loadOptions={getPlaceOptions}
              onChange={(e) => setFrom(e)}
              data-test="SearchBar-from"
              components={{
                Input: addTestAttrToSelect(components.Input, "SearchBar-from"),
              }}
            />
          </li>

          <li className={styles.reactSelectContainer}>
            <label className="c-form-label" htmlFor="to">
              To
            </label>
            <AsyncSelect
              id="SearchBar-to"
              cacheOptions
              defaultOptions
              loadOptions={getPlaceOptions}
              onChange={(e) => setTo(e)}
              data-test="SearchBar-to"
              components={{
                Input: addTestAttrToSelect(components.Input, "SearchBar-to"),
              }}
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

const addTestAttrToSelect = (Component, testLabel) => (props) => (
  <Component {...props} data-test={testLabel} />
);
