import React from "react";

export const PostSection = ({ title, body, username, id, propsMessage }) => {
    
  const componentName = "PostSection";
  console.log(`${propsMessage} ${componentName}`);

  return (
    <div key={id}>
      <h1>{title}</h1>
      <p>{username}</p>
      <div>{body}</div>
    </div>
  );
};
