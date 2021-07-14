import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Card } from "components";

export const CommentSection = ({ comments, propsMessage, id }) => {
  const componentName = "CommentSection";
  console.log(`${propsMessage} ${componentName}`);

  const constructComments = () =>
    comments.map(({ email, body, id }) => {
      return (
        <Fragment key={id}>
          <Card>
            <Card.Item className="comment__email">{email} says:</Card.Item>
            <Card.Item className="comment__body">{body}</Card.Item>
          </Card>
        </Fragment>
      );
    });

  return (
    <div className="comment">
      <h2 className="comment__title">Comments:</h2>
      {constructComments()}
    </div>
  );
};

CommentSection.propTypes = {
  comments: PropTypes.array.isRequired,
  propsMessage: PropTypes.string.isRequired,
};
