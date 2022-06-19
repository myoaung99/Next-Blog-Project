import React from "react";
import PostHeader from "./post-header";
import classes from "./post-content.module.css";

const PostContent = (props) => {
  const { post } = props;
  const imagePath = `/image/posts/${post.slug}/${post.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      {post.content}
    </article>
  );
};

export default PostContent;
