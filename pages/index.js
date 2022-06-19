import React from "react";
import Hero from "../components/home-page/hero";
import FeatureBlogs from "../components/home-page/featured-blog";
import { getFeaturedPosts } from "../helper/post-util";

// const DUMMY_POSTS = [
//   {
//     slug: "getting-started-with-nextjs",
//     title: "Getting started with NextJs",
//     image: "getting-started-nextjs.png",
//     date: "2022-06-19",
//     excerpt:
//       "NextJS is a js framework built on top of React to help developers with creating performant web applications and superfast static websites",
//   },
//   {
//     slug: "getting-started-with-nextjs",
//     title: "Getting started with NextJs",
//     image: "getting-started-nextjs.png",
//     date: "2022-06-19",
//     excerpt:
//       "NextJS is a js framework built on top of React to help developers with creating performant web applications and superfast static websites",
//   },
//   {
//     slug: "getting-started-with-nextjs",
//     title: "Getting started with NextJs",
//     image: "getting-started-nextjs.png",
//     date: "2022-06-19",
//     excerpt:
//       "NextJS is a js framework built on top of React to help developers with creating performant web applications and superfast static websites",
//   },
//   {
//     slug: "getting-started-with-nextjs",
//     title: "Getting started with NextJs",
//     image: "getting-started-nextjs.png",
//     date: "2022-06-19",
//     excerpt:
//       "NextJS is a js framework built on top of React to help developers with creating performant web applications and superfast static websites",
//   },
// ];

const HomePage = ({ featuredPosts }) => {
  console.log(featuredPosts);
  return (
    <>
      <Hero />
      <FeatureBlogs posts={featuredPosts} />
    </>
  );
};

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      featuredPosts,
    },
  };
};

export default HomePage;
