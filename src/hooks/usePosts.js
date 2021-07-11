import { useContext } from "react";
import { PostsContext } from "context/Posts/PostsProvider";

export function usePosts() {
  const context = useContext(PostsContext);

  if (!context) {
    throw new Error("usePosts must be used within PostsProvider");
  }

  return context;
}
