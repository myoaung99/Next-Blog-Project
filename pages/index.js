import React from "react";
import Hero from "../components/home-page/hero";
import FeatureBlogs from "../components/home-page/featured-blog";
import { getFeaturedPosts } from "../helper/post-util";

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
