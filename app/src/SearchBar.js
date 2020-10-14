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

  handleFromChange(event) {
    this.setState({
      from: event.target.value,
    });
  }

  handleToChange(event) {
    this.setState({
      to: event.target.value,
    });
  }

  handleDateChange(event) {
    this.setState({
      date: event.target.value,
    });
  }

  render() {
    return (
      <form>
        <label class="c-form-label" for="f-combo">
          FROM
        </label>
        <div class="c-form-combo">
          <div class="c-form-combo__cell">
            <input
              type="text"
              class="c-form-combo__input c-form-input"
              placeholder="e.g. London"
              name="f-combo"
              id="f-combo"
              onChange={(event) => this.handleFromChange(event)}
              value={this.state.from}
            />
          </div>
        </div>

        <label class="c-form-label" for="f-combo">
          TO
        </label>
        <div class="c-form-combo">
          <div class="c-form-combo__cell">
            <input
              type="text"
              class="c-form-combo__input c-form-input"
              placeholder="e.g. Croatia"
              name="f-combo"
              id="f-combo"
              onChange={(event) => this.handleToChange(event)}
              value={this.state.to}
            />
          </div>
        </div>

        <li class="c-form-list__item">
          <label class="c-form-label" for="f-date">
            DATE
          </label>
          <input
            type="date"
            class="c-form-date"
            placeholder="dd/mm/yyyy"
            name="f-date"
            id="f-date"
            onChange={(event) => this.handleDateChange(event)}
            value={this.state.date}
          />
        </li>
      </form>
    );
  }
}
export default SearchBar;
