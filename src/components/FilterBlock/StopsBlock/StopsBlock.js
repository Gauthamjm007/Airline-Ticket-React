import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  showOneMoreStopAction,
  showOneStopAction,
  showAllStopsAction
} from "../../../redux/actions/filterAction";
import Checkbox from "../Checkbox/Checkbox";
import "../Checkbox/Checkbox.css";

const StopsBlock = ({
  stops,
  showAll,
  showOneMoreStop,
  showOneStop,
  showAllStops
}) => {
  const handleShowAllStops = ({ target: { checked } }) => {
    showAllStops(checked);
  };

  return (
    <>
      <h3>Number of Stops</h3>

      <label className="checkbox">
        <input
          type="checkbox"
          name="all"
          onChange={handleShowAllStops}
          checked={showAll}
          disabled={showAll}
        />
        <span className="checkbox_checked" />
        Display All
      </label>

      {Object.keys(stops).map((field) => (
        <Checkbox
          key={field}
          field={field}
          checked={stops[field]}
          showOneMoreStop={showOneMoreStop}
          showOneStop={showOneStop}
        />
      ))}
    </>
  );
};

StopsBlock.propTypes = {
  showAll: PropTypes.bool.isRequired,
  stops: PropTypes.object.isRequired,
  showOneMoreStop: PropTypes.func.isRequired,
  showOneStop: PropTypes.func.isRequired,
  showAllStops: PropTypes.func.isRequired
};

const mapStateToProps = ({ filters: { showAll, stops } }) => ({
  showAll,
  stops
});

const mapDispatchToProps = {
  showOneMoreStop: showOneMoreStopAction,
  showOneStop: showOneStopAction,
  showAllStops: showAllStopsAction
};

export default connect(mapStateToProps, mapDispatchToProps)(StopsBlock);
