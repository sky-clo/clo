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
          />
        </li>
      </form>
    );
  }
}
export default SearchBar;
