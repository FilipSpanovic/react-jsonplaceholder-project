import React, { useCallback, useEffect, useMemo } from "react";
import { PostsAPI } from "api/PostsAPI";
import { PostSection, CommentSection } from "components";
import { useForm, usePosts } from "hooks";
import { Search } from "components/Posts/Search";

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

  const handleRedirectToPost = useCallback((post) => () => {
    console.log(post);
    history.push({
      pathname: `/post/${post.id}`,
      state: { ...post, propsMessage },
    });
  }, []);

  const constructPosts = useMemo(
    () =>
      posts.map((post) => {
        const { title, user, body, comments, id } = post;

        return (
          user.username.toLowerCase().includes(search.toLowerCase()) && (
            <div
              onClick={handleRedirectToPost(post)}
              className="post-comments-card"
              key={id}
            >
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
          )
        );
      }),
    [posts, propsMessage, search, handleRedirectToPost]
  );

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
