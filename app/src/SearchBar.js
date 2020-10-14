import React, { Component } from "react";
import "./SearchBar.module.css";

class SearchBar extends Component {
  render() {
    return (
      <form>
        <li class="c-form-list__item">
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

          <label class="c-form-label" for="f-combo">
            DATE
          </label>
          <div class="c-form-combo">
            <div class="c-form-combo__cell">
              <input
                type="text"
                class="c-form-combo__input c-form-input"
                placeholder="e.g. 08/08/2020"
                name="f-combo"
                id="f-combo"
              />
            </div>

            <div class="c-form-combo__cell">
              <button class="c-form-combo__btn c-btn c-btn--primary">
                Search
              </button>
            </div>
          </div>
        </li>
      </form>
    );
  }
}
export default SearchBar;
