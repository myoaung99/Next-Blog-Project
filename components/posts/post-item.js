import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "./post-item.module.css";
import { useInView } from "react-hook-inview";
import { motion, useAnimation } from "framer-motion";

const cardVariants = {
  hover: {
    scale: 1.02,
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    transition: {
      type: "tween",
      ease: "easeInOut",
    },
  },
  hidden: {
    y: 30,
    opacity: 0.5,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      type: "tween",
    },
  },
};

const PostItem = (props) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  const { title, image, date, excerpt, slug } = props.post;

  const formattedDate = new Date(date).toLocaleDateString("en-Us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = "/image/posts/" + slug + "/" + image;
  const linkPath = `/blogs/${slug}`;

  return (
    <motion.li
      ref={ref}
      variants={cardVariants}
      whileHover="hover"
      initial="hidden"
      animate={control}
      className={classes.post}
    >
      <Link href={linkPath}>
        <a>
          <div className={classes.image}>
            <Image
              src={imagePath}
              alt={title}
              width={300}
              height={200}
              layout="responsive"
            />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </motion.li>
  );
};

export default PostItem;
