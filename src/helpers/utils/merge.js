//reduce comments array to a lookup object where keys represent postId and value equals to an array of comments
//if key is not present in the object, create one and assign an array to it with a single comment
//if key is present, spread the array with existing comment(s) and push a new element to it
const commentsReducer = (acc, comment) => {
  if (!acc[comment.postId]) {
    acc[comment.postId] = [comment];

    return acc;
  }
  acc[comment.postId] = [...acc[comment.postId], comment];

  return acc;
};

//reduce users array to a lookup object where keys represent user id's and the value equals to a user object
const usersReducer = (acc, user) => {
  acc[user.id] = user;

  return acc;
};

const reduceToLookup = (arr, reducer) => arr.reduce(reducer, {});

const mapUserAndCommentsToPost = (commentsLookup, usersLookup, posts) =>
  posts.map((post) => {
    const comments = commentsLookup[post.id];
    const user = usersLookup[post.userId];

    return { ...post, user, comments };
  });

export const merge = (arr) => {
  const [posts, comments, users] = arr;

  const commentsLookup = reduceToLookup(comments, commentsReducer);
  const usersLookup = reduceToLookup(users, usersReducer);
  
  const mappedPosts = mapUserAndCommentsToPost(
    commentsLookup,
    usersLookup,
    posts
  );

  return mappedPosts;
};
