import React from "react";
import PropTypes from "prop-types";

export const CommentSection = ({ comments, propsMessage }) => {
  const componentName = "CommentSection";
  console.log(`${propsMessage} ${componentName}`);



  const constructComments = () =>
    comments.map(({ email, body, id }) => {
      return (
        <div className="comment__card" key={id} >
          <div className="comment__email">{email} says:</div>
          <div className="comment__body">{body}</div>
        </div>
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
