import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { setActiveCurrencyAction } from "../../../redux/actions/filterAction";
import "./CurrencyBlock.css";

const buttons = ["INR", "USD", "EUR"];

const CurrencyBlock = ({ setActiveCurrency, activeCurrency }) => {
  const changeCurrency = ({ target: { textContent } }) => {
    setActiveCurrency(textContent);
  };

  return (
    <>
      <h3>Currency</h3>

      <div className="btn_container">
        {buttons.map((title) => (
          <button
            className={activeCurrency === title ? "active" : ""}
            onClick={changeCurrency}
            key={title}
          >
            {title}
          </button>
        ))}
      </div>
    </>
  );
};

CurrencyBlock.propTypes = {
  setActiveCurrency: PropTypes.func.isRequired,
  activeCurrency: PropTypes.string.isRequired
};

const mapStateToProps = ({ filters: { activeCurrency } }) => ({
  activeCurrency
});

const mapDispatchToProps = { setActiveCurrency: setActiveCurrencyAction };

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyBlock);
