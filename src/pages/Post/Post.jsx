import React from "react";
import { PostSection, CommentSection } from "components";

export const Post = ({ location, history }) => {
  if (!location.state) {
    history.push("/posts");
    return <></>;
  }

  const { propsMessage, title, user, id, body, comments } = location.state;

  return (
    <div>
      <div className="post-comments-card" key={id}>
        <PostSection
          propsMessage={propsMessage}
          title={title}
          username={user.username}
          name={user.name}
          id={id}
          body={body}
        />
        <CommentSection
          comments={comments}
          id={id}
          propsMessage={propsMessage}
        />
      </div>
    </div>
  );
};
