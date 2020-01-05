import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { filterByStops } from "../../helpers/helpers";
import TicketCard from "./TicketCard/TicketCard";
import "./TicketList.css";

const TicketList = ({ tickets, stops, rate, currency }) => {
  if (!tickets.length) return null;
  return (
    <main className="ticket_list">
      {filterByStops(tickets, stops).map((ticket, i) => (
        <TicketCard
          key={i}
          ticket={ticket}
          currencyRate={rate}
          currency={currency}
        />
      ))}
    </main>
  );
};

TicketList.propTypes = {
  tickets: PropTypes.array.isRequired,
  stops: PropTypes.object.isRequired,
  rate: PropTypes.number,
  currency: PropTypes.string.isRequired
};

const mapStateToProps = ({
  ticketsBoard: { tickets },
  filters: { stops, activeCurrency },
  currencyRate
}) => ({
  tickets,
  stops,
  rate: currencyRate[activeCurrency],
  currency: activeCurrency
});

export default connect(mapStateToProps)(TicketList);
