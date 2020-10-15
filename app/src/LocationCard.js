import React, { Component } from "react";

class LocationCard extends Component {
  render() {
    return (
      <div className="o-layout__item u-width-1/3">
        <div className="c-tile c-tile--square">
          <a className="c-tile__link c-shine-context" href="#">
            <div className="c-tile__content">
              <div className="c-tile__media">
                <img
                  alt="Example image"
                  className="c-tile__poster"
                  src="https://www.sky.com/assets/toolkit/docs/tile/example.jpg"
                />
              </div>
              <div className="c-tile__body c-tile__caption">
                <p className="c-tile__title c-heading-delta">
                  {this.props.location.locationTitle}
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default LocationCard;
