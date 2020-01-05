import React, { Component } from "react";
import PropTypes from "prop-types";

import { getStopTitle } from "../../../helpers/helpers";
import "../StopsBlock/StopsBlock.css";

class Checkbox extends Component {
  static propTypes = {
    showOneStop: PropTypes.func.isRequired,
    showOneMoreStop: PropTypes.func.isRequired,
    field: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired
  };

  state = { isVisibleHoverBtn: false };

  handleOneMoreStop = ({ target: { name, checked } }) => {
    const { showOneMoreStop } = this.props;
    showOneMoreStop(name, checked);
  };

  handleOnlyOneStop = ({ target: { name } }) => {
    const { showOneStop } = this.props;
    showOneStop(name);
  };

  handleMouseEnter = () => {
    this.setState({ isVisibleHoverBtn: true });
  };

  onMouseLeave = () => {
    this.setState({ isVisibleHoverBtn: false });
  };

  render() {
    const { isVisibleHoverBtn } = this.state;
    const { field, checked } = this.props;

    return (
      <label
        className="checkbox"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <input
          type="checkbox"
          checked={checked}
          onChange={this.handleOneMoreStop}
          name={field}
        />

        <span className="checkbox_checked" />

        {getStopTitle(field)}
        {isVisibleHoverBtn && (
          <button name={field} onClick={this.handleOnlyOneStop}>
            only
          </button>
        )}
      </label>
    );
  }
}

export default Checkbox;
