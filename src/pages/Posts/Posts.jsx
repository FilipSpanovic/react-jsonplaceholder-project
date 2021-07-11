import React, { useEffect } from "react";
import { PostsAPI } from "api/PostsAPI";
import { usePosts } from "hooks/usePosts";

export const Posts = ({ history, propsMessage }) => {
  const [posts, setPosts] = usePosts();

  const componentName = "Posts";
  console.log(`${propsMessage} ${componentName}`);

  useEffect(() => {
    if (posts.length < 1) {
      PostsAPI.fetchPostsCommentsAndUsers(setPosts);
    }
  }, [setPosts, posts.length]);

  return (
    <div>
      <button onClick={() => history.push("/post/13")}>klikni me</button>
    </div>
  );
};
