import React, { Component } from "react";

class LocationCard extends Component {
  render() {
    return (
      <div className="o-layout__item">
        <div className="c-tile c-tile--square">
          <a className="c-tile__link c-shine-context" href="#">
            <div className="c-tile__content">
              <div className="c-tile__media">
                <img
                  alt="Example image"
                  className="c-tile__poster"
                  src={this.props.img_urls}
                />
              </div>
              <div className="c-tile__body c-tile__caption">
                <p className="c-tile__title c-heading-delta">
                  {this.props.name}
                </p>
                <p class="c-text-body">{this.props.featured_in}</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default LocationCard;
