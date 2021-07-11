import React, { useEffect, useMemo, Fragment, useState } from "react";
import { PostsAPI } from "api/PostsAPI";
import { PostSection, CommentSection } from "components";
import { useForm, usePosts } from "hooks";

export const Posts = ({ propsMessage }) => {
  const [num, setNum] = useState(1);
  const [posts, setPosts] = usePosts();
  const {
    values: { search },
    handleInputChange,
  } = useForm({ search: "" });

  const componentName = "Posts";
  console.log(`${propsMessage} ${componentName}`);

  useEffect(() => {
    if (posts.length < 1) {
      PostsAPI.fetchPostsCommentsAndUsers(setPosts);
    }
  }, [setPosts, posts.length]);

  const constructPosts = useMemo(
    () =>
      posts.map(({ title, user, body, comments, id }) => {
        return (
          <Fragment key={id}>
            <PostSection
              propsMessage={propsMessage}
              title={title}
              username={user.username}
              id={id}
              body={body}
            />
            <CommentSection comments={comments} propsMessage={propsMessage} />
          </Fragment>
        );
      }),
    [posts, propsMessage]
  );

  return (
    <Fragment>
      <button onClick={() => setNum(num + 1)}>Rerender test</button>
      <input
        placeholder="...search"
        name="search"
        value={search}
        onChange={handleInputChange}
      />
      {constructPosts}
    </Fragment>
  );
};
