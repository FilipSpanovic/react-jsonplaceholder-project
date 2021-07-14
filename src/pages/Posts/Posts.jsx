import React, { useCallback, useEffect, useMemo } from "react";
import { PostsAPI } from "api/PostsAPI";
import { PostSection, CommentSection, Search } from "components";
import { useForm, usePosts } from "hooks";

export const Posts = ({ propsMessage, history }) => {
  const [posts, setPosts] = usePosts();

  const {
    handleInputChange,
    values: { search },
  } = useForm({ search: "" });

  const componentName = "Posts";
  console.log(`${propsMessage} ${componentName}`);

  useEffect(() => {
    posts.length === 0 && PostsAPI.fetchPostsCommentsAndUsers(setPosts);
  }, [setPosts, posts.length]);

  const handleRedirectToPost = useCallback(
    (post) => () => {
      history.push({
        pathname: `/post/${post.id}`,
        state: { ...post, propsMessage },
      });
    },
    [history, propsMessage]
  );

  const constructPosts = useMemo(() => {
    return posts.map((post) => {
      const { title, user, body, comments, id } = post;
      const isSearchIncluded = user.username
        .toLowerCase()
        .includes(search.toLowerCase());

      return (
        isSearchIncluded && (
          <div
            key={id}
            onClick={handleRedirectToPost(post)}
            className="post-comments-card"
          >
            <PostSection
              propsMessage={propsMessage}
              title={title}
              username={user.username}
              name={user.name}
              body={body}
            />
            <CommentSection comments={comments} propsMessage={propsMessage} />
          </div>
        )
      );
    });
  }, [posts, propsMessage, search, handleRedirectToPost]);

  return (
    <div className="posts-container">
      <Search
        search={search}
        handleInputChange={handleInputChange}
        propsMessage={propsMessage}
      />
      {constructPosts}
    </div>
  );
};

