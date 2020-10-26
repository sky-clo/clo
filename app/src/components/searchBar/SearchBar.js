import React, { Component } from "react";
import Button from "../button/Button";
import styles from "./SearchBar.module.scss";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: "",
      to: props.to || "",
      inboundDate: "",
      outboundDate: "",
    };
  }

  componentWillReceiveProps(props) {
    this.setState({ to: props.to });
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({
      ...this.state,
      [event.target.name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`http://localhost:3000/flights`)
      .then((response) => response.json())
      .then((flights) => {
        alert("Looking for your flights!");
        this.setState({ flights: flights });
      })
      .catch((error) => {
        alert("Sorry, we couldn't find that flight, try again!");
      });
  }

  render() {
    return (
      <form
        onSubmit={(event) => this.handleSubmit(event)}
        className={styles.form}
      >
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
                onChange={(event) => this.handleChange(event)}
                value={this.state.from}
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
                onChange={(event) => this.handleChange(event)}
                value={this.state.to}
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
                onChange={(event) => this.handleChange(event)}
                value={this.state.outboundDate}
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
                min={this.state.outboundDate}
                onChange={(event) => this.handleChange(event)}
                value={this.state.inboundDate}
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
        {this.state.flights
          ? this.state.flights.map((flight) => (
              <p>
                Flight from {flight.from} to {flight.to} - Duration{" "}
                {flight.duration} mins - Flight code {flight.code}
              </p>
            ))
          : ""}
      </form>
    );
  }
}
export default SearchBar;
