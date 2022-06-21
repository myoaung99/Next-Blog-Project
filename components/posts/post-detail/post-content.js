import React from "react";
import Image from "next/image";
import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import ReactMarkdown from "react-markdown";

const PostContent = (props) => {
  const { post } = props;
  const imagePath = `/image/posts/${post.slug}/${post.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown
        components={{
          p: ({ node, children }) => {
            if (node.children[0].tagName === "img") {
              const image = node.children[0];
              return (
                <div className={classes.image}>
                  <Image
                    className={classes.image}
                    src={`/image/posts/${post.slug}/${image.properties.src}`}
                    alt={image.properties.alt}
                    width="600"
                    height="300"
                  />
                </div>
              );
            }
            // Return default child if it's not an image
            return <p>{children}</p>;
          },
        }}
      >
        {post.content}
      </ReactMarkdown>
    </article>
  );
};

export default PostContent;
