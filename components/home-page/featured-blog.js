import React from "react";
import PostGrid from "../posts/post-grid";
import classes from "./featured-blog.module.css";

const FeatureBlogs = ({ posts }) => {
  return (
    <div className={classes.latest}>
      <h1>Featured blog posts</h1>
      <PostGrid posts={posts} />
    </div>
  );
};

export default FeatureBlogs;
