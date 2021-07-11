import { BASE_URL } from "../constants";
import { merge } from "helpers/utils/merge";

export const PostsAPI = {
  fetchPostsCommentsAndUsers: async function (setPosts) {
    const urls = ["/posts", "/comments", "/users"];

    try {
      const response = await Promise.all(
        urls.map((url) => fetch(`${BASE_URL}${url}`))
      );
      const responseJson = await Promise.all(
        response.map((elem) => elem.json())
      );
      
      const posts = merge(responseJson);

      setPosts(posts);
    } catch (e) {
      console.log(e);
    }
  },
};
