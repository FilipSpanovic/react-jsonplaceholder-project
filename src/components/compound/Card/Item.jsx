import React from "react";
import PropTypes from "prop-types";

export const Item = ({ className, children, id }) => {
  return (
    <div className={className} key={id}>
      {children}
    </div>
  );
};

Item.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
