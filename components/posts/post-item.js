import React from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "./post-item.module.css";

const PostItem = (props) => {
  const { title, image, date, excerpt, slug } = props.post;

  const formattedDate = new Date(date).toLocaleDateString("en-Us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/image/posts/${slug}/${image}`;

  return (
    <li className={classes.post}>
      <Link>
        <a>
          <div className={classes.image}>
            <Image src={imagePath} alt={title} width={300} height={200} />
          </div>
          <div className={classes.content}>
            <h2>{title}</h2>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PostItem;
