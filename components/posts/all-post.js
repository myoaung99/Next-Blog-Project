import React from "react";
import PostGrid from "./../../components/posts/post-grid";
import classes from "./all-post.module.css";

const AllBlogPosts = ({ posts }) => {
  return (
    <div className={classes.posts}>
      <h2>All Posts</h2>
      <PostGrid posts={posts} />
    </div>
  );
};

export default AllBlogPosts;
