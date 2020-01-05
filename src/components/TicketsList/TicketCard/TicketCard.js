import React from "react";
import PropTypes from "prop-types";

import { convertToRealPrice, getStopTitle } from "../../../helpers/helpers";
import Logo from "../../../assets/img/bay_logo.png";
import Plane from "../../../assets/img/plane_icon.svg";
import "./TicketCard.css";

const TicketCard = ({
  currency,
  currencyRate,
  ticket: {
    arrival_date,
    arrival_time,
    departure_date,
    departure_time,
    destination,
    destination_name,
    origin,
    origin_name,
    price,
    stops
  }
}) => (
  <div className="ticket_card">
    <div className="ticket_bay">
      <img className="bay_logo" src={Logo} alt="" />
      <button className="bay_btn">
        BUY
        <br />
        {convertToRealPrice(price, currencyRate, currency)}
      </button>
    </div>

    <div className="ticket_info">
      <div className="date_info">
        <time className="time">{departure_time}</time>
        <p className="place">
          {origin}, {origin_name}
        </p>
        <time className="date">{departure_date}</time>
      </div>

      <span className="stops">
        {getStopTitle(stops)}
        <img src={Plane} alt="" />
      </span>

      <div className="date_info text_right">
        <time className="time">{arrival_time}</time>
        <p className="place">
          {destination_name}, {destination}
        </p>
        <time className="date">{arrival_date}</time>
      </div>
    </div>
  </div>
);

TicketCard.propTypes = {
  currencyRate: PropTypes.number.isRequired,
  ticket: PropTypes.object.isRequired,
  currency: PropTypes.string.isRequired
};

export default TicketCard;
