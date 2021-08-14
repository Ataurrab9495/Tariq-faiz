import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

function TabPanel(props) {
  const { id, selected, children } = props;
  const classes = classnames("tab-panel", { "tab-panel--active": selected });

  return (
    <div className={classes} data-id={id}>
      {children}
    </div>
  );
}

TabPanel.propTypes = {
  id: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  children: PropTypes.any.isRequired
};

export default TabPanel;
