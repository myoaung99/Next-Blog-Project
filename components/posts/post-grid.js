import React from "react";
// import PostItem from "./post-item";
import classes from "./post-grid.module.css";

const PostGrid = ({ posts }) => {
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        // <PostItem />
      ))}
    </ul>
  );
};

export default PostGrid;
