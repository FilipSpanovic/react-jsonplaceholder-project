import React from "react";

export const PostSection = ({
  title,
  body,
  username,
  name,
  id,
  propsMessage,
}) => {
  const componentName = "PostSection";
  console.log(`${propsMessage} ${componentName}`);

  return (
    <div className="post-container" key={id}>
      <div className="post__header u-margin-bottom-small">
        <img
          src="https://img.icons8.com/office/30/000000/person-male.png"
          alt="person icon"
          className="post__img"
        />
        <div className="post__user-box">
          <div className="post__username">{username}</div>
          <div className="post__name">{name}</div>
        </div>
      </div>

      <div className="post__title u-margin-bottom-small">{title}</div>

      <div className="post__body u-margin-bottom-small">{body}</div>
    </div>
  );
};
