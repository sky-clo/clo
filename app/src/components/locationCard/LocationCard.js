import React from "react";

export default function LocationCard(props) {
  console.log(props);
  return (
    <div className="o-layout__item">
      <div className="c-tile c-tile--square">
        <a
          className="c-tile__link c-shine-context"
          href={"/location/" + props.name.toLowerCase()}
        >
          <div className="c-tile__content">
            <div className="c-tile__media">
              <img
                alt={props.name}
                className="c-tile__poster"
                src={props.img_url}
              />
            </div>
            <div className="c-tile__body c-tile__caption">
              <p className="c-tile__title c-heading-delta">{props.name}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
