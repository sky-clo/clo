import React, { Component } from "react";
import styles from "./SearchBar.module.css";

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      from: "",
      to: "",
      date: "",
    };
  }

  handleChange(event) {
    const value = event.target.value;
    console.log(event.target.name);
    this.setState({
      ...this.state,
      [event.target.name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(
      `Submitting search for ${this.state.from}, ${this.state.to}, ${this.state.date}`
    );
    //need to change this to actually fetch request from mock api for now?
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <fieldset>
          <legend className="c-form-caption">Example</legend>
          <ul className={"c-form-list " + styles.formList}>
            <li className="c-form-list__item">
              <label className="c-form-label" for="from">
                FROM
              </label>
              <input
                type="text"
                className="c-form-input"
                placeholder="e.g. London"
                name="from"
                id="from"
                onChange={(event) => this.handleChange(event)}
                value={this.state.from}
              />
            </li>

            <li className="c-form-list__item">
              <label className="c-form-label" for="to">
                TO
              </label>
              <input
                type="text"
                className="c-form-input"
                placeholder="e.g. Croatia"
                name="to"
                id="to"
                onChange={(event) => this.handleChange(event)}
                value={this.state.to}
              />
            </li>

            <li className="c-form-list__item">
              <label className="c-form-label" for="f-date">
                DATE
              </label>
              <input
                type="date"
                className="c-form-date"
                placeholder="dd/mm/yyyy"
                name="date"
                id="f-date"
                onChange={(event) => this.handleChange(event)}
                value={this.state.date}
              />
            </li>

            <li className="c-form-list__item">
              <button type="submit" className="c-btn c-btn--primary">
                SEARCH
              </button>
            </li>
          </ul>
        </fieldset>
      </form>
    );
  }
}
export default SearchBar;