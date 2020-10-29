import React from "react";
import { Link } from "react-router-dom";
import styles from "./LocationCard.module.css";

const startLocation = "LOND-SKY";
const inboundDate = "2020-10-31";
const outboundDate = "2020-11-6";

export default function LocationCard(props) {
  const link = `/search?from=${startLocation}&to=${props.skyScannerName}&inboundDate=${inboundDate}&outboundDate=${outboundDate}`;
  return (
    <div className="o-layout__item container">
      <div className="c-tile c-tile--square">
        <Link to={link} className="c-tile__link c-shine-context">
          <div className="c-tile__content">
            <div className="c-tile__media">
              <img
                alt={props.name}
                className={`c-tile__poster ${styles.fullWidth}`}
                src={props.imgUrl + "?q=70&w=200"}
              />
            </div>
            <div className="c-tile__body c-tile__caption">
              <p className="c-tile__title c-heading-delta">{props.name}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
