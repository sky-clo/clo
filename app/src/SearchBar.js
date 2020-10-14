import React, { Component } from "react";
import "./SearchBar.module.css";

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
          <legend class="c-form-caption">Example</legend>
          <ul class="c-form-list"></ul>

          <li class="c-form-list__item">
            <label class="c-form-label" for="from">
              FROM
            </label>
            <input
              type="text"
              class="c-form-input--inline"
              placeholder="e.g. London"
              name="from"
              id="from"
              onChange={(event) => this.handleChange(event)}
              value={this.state.from}
            />
          </li>

          <li class="c-form-list__item">
            <label class="c-form-label" for="to">
              TO
            </label>
            <input
              type="text"
              class="c-form-input--inline"
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
              className="c-form-date--inline"
              placeholder="dd/mm/yyyy"
              name="date"
              id="f-date"
              onChange={(event) => this.handleChange(event)}
              value={this.state.date}
            />
          </li>

          <button type="submit" class="c-btn c-btn--primary">
            SEARCH
          </button>
        </fieldset>
      </form>
    );
  }
}
export default SearchBar;
