import React from "react";
import PostGrid from "../posts/post-grid";
import classes from "./featured-blog.module.css";

const FeatureBlogs = ({ posts }) => {
  return (
    <div className={classes.latest}>
      <h2>Featured blog posts</h2>
      <PostGrid posts={posts} />
    </div>
  );
};

export default FeatureBlogs;
