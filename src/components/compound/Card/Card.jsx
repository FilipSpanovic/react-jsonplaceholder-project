import React from "react";
import PropTypes from "prop-types";
import { Item } from "./Item";

export const Card = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

Card.Item = Item;

Card.defaultProps = {
  className: "comment__card",
};

Card.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
