import React from "react";
import PropTypes from "prop-types";

export const CommentSection = ({ comments, propsMessage }) => {
  const componentName = "CommentSection";
  console.log(`${propsMessage} ${componentName}`);

  const constructComments = () =>
    comments.map(({ email, name, body, id }) => {
      return (
        <li key={id}>
          <p>
            {email} {name}
          </p>
          <p>{body}</p>
        </li>
      );
    });

  return <ul>{constructComments()}</ul>;
};

CommentSection.propTypes = {
  comments: PropTypes.array.isRequired,
  propsMessage: PropTypes.string.isRequired,
};
