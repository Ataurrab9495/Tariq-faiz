import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

function TabButton(props) {
  const { id, selected, onClick, children } = props;
  const classes = classnames("tab-button", { "tab-button--active": selected });
  return (
    <button className={classes} onClick={onClick} data-id={id}>
      {children}
    </button>
  );
}

TabButton.propTypes = {
  id: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired
};

export default TabButton;
