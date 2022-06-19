import React from "react";
import Hero from "../components/home-page/hero";
import FeatureBlogs from "../components/home-page/featured-blog";

const DUMMY_POSTS = [
  {
    slug: "getting-start-with-nextjs",
    title: "Getting start with NextJs",
    image: "getting-started-nextjs.png",
    date: "2022-06-19",
    excerpt:
      "NextJS is a js framework built on top of React to help developers with creating performant web applications and superfast static websites",
  },
  {
    slug: "getting-start-with-nextjs",
    title: "Getting start with NextJs",
    image: "getting-started-nextjs.png",
    date: "2022-06-19",
    excerpt:
      "NextJS is a js framework built on top of React to help developers with creating performant web applications and superfast static websites",
  },
  {
    slug: "getting-start-with-nextjs",
    title: "Getting start with NextJs",
    image: "getting-started-nextjs.png",
    date: "2022-06-19",
    excerpt:
      "NextJS is a js framework built on top of React to help developers with creating performant web applications and superfast static websites",
  },
  {
    slug: "getting-start-with-nextjs",
    title: "Getting start with NextJs",
    image: "getting-started-nextjs.png",
    date: "2022-06-19",
    excerpt:
      "NextJS is a js framework built on top of React to help developers with creating performant web applications and superfast static websites",
  },
];

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeatureBlogs posts={DUMMY_POSTS} />
    </>
  );
};

export default HomePage;
