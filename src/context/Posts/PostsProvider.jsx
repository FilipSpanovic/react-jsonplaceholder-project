import React, { useMemo, useState } from "react";
export const PostsContext = React.createContext();

export function PostsProvider(props) {
  const [posts, setPosts] = useState([]);

  const componentName = "PostsProvider";
  console.log(`${props.propsMessage} ${componentName}`);

  const value = useMemo(() => {
    return [posts, setPosts];
  }, [posts]);

  return <PostsContext.Provider value={value} {...props} />;
}

