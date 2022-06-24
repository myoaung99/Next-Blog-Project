import React from "react";
import Hero from "../components/home-page/hero";
import FeatureBlogs from "../components/home-page/featured-blog";
import { getFeaturedPosts } from "../helper/post-util";
import { motion } from "framer-motion";

const HomePage = ({ featuredPosts }) => {
  return (
    <motion.div>
      <Hero />
      <FeatureBlogs posts={featuredPosts} />
    </motion.div>
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
