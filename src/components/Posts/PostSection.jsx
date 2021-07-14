import React from "react";
import PropTypes from "prop-types";
import { Card } from "components";

export const PostSection = ({
  title,
  body,
  username,
  name,
  propsMessage,
}) => {
  const componentName = "PostSection";
  console.log(`${propsMessage} ${componentName}`);

  return (
    <Card className="post-container">
      <div className="post__header u-margin-bottom-small">
        <img
          src="https://img.icons8.com/office/30/000000/person-male.png"
          alt="person icon"
          className="post__img"
        />

        <div className="post__user-box">
          <Card.Item className="post__username">{username}</Card.Item>
          <Card.Item className="post__name">{name}</Card.Item>
        </div>
      </div>
      <Card.Item className="post__title u-margin-bottom-small">
        {title}
      </Card.Item>
      <Card.Item className="post__body u-margin-bottom-small">{body}</Card.Item>
    </Card>
  );
};

PostSection.propTypes = {
  title: PropTypes.string.isRequired,
};
