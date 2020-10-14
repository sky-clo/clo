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
    //need to change this to actually request from somewhere? mock api for now?
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <label class="c-form-label" for="f-combo">
          FROM
        </label>
        <div class="c-form-combo">
          <div class="c-form-combo__cell">
            <input
              type="text"
              class="c-form-combo__input c-form-input"
              placeholder="e.g. London"
              name="from"
              id="f-combo"
              onChange={(event) => this.handleChange(event)}
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
              name="to"
              id="f-combo"
              onChange={(event) => this.handleChange(event)}
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
            name="date"
            id="f-date"
            onChange={(event) => this.handleChange(event)}
            value={this.state.date}
          />
        </li>
        <div class="c-form-combo__cell">
          <input
            type="submit"
            class="c-form-combo__btn c-btn c-btn--primary"
            value="SEARCH"
          ></input>
        </div>
      </form>
    );
  }
}
export default SearchBar;
