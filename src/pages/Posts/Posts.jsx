import React, { useEffect, useMemo, Fragment } from "react";
import { PostsAPI } from "api/PostsAPI";
import { PostSection, CommentSection } from "components";
import { useForm, usePosts } from "hooks";

export const Posts = ({ propsMessage }) => {
  const [posts, setPosts] = usePosts();

  const {
    handleInputChange,
    values: { search },
  } = useForm({ search: "" });

  const componentName = "Posts";
  console.log(`${propsMessage} ${componentName}`);

  useEffect(() => {
    posts.length < 1 && PostsAPI.fetchPostsCommentsAndUsers(setPosts);
  }, [setPosts, posts.length]);

  const constructPosts = useMemo(
    () =>
      posts.map(({ title, user, body, comments, id }) => {
        return (
          <div className="post-comments-card" key={id}>
            <PostSection
              propsMessage={propsMessage}
              title={title}
              username={user.username}
              name={user.name}
              id={id}
              body={body}
            />
            <CommentSection comments={comments} propsMessage={propsMessage} />
          </div>
        );
      }),
    [posts, propsMessage]
  );

  return (
    <div className="posts-container">
      <div className="search">
        <input
          className="search__input"
          placeholder="Search by username"
          name="search"
          value={search}
          onChange={handleInputChange}
        />
      </div>

      {constructPosts}
    </div>
  );
};
