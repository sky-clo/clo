import React, { Component } from "react";

class LocationCard extends Component {
  render() {
    return (
      <th>
        <article class="c-tile c-tile--square has-focus">
          <a class="c-tile__link c-shine-context" href="#">
            <div class="c-tile__content">
              <div class="c-tile__media">
                <img
                  alt="Example image"
                  class="c-tile__poster"
                  src="https://www.sky.com/assets/toolkit/docs/tile/example.jpg"
                />
              </div>
              <div class="c-tile__body c-tile__caption">
                <p class="c-tile__title c-heading-delta">
                  {this.props.location.locationTitle}
                </p>
              </div>
            </div>
          </a>
        </article>
      </th>
    );
  }
}

export default LocationCard;
