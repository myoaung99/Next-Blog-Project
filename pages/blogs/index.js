import React from "react";
import AllBlogPosts from "../../components/posts/all-post";
import { getAllPosts } from "../../helper/post-util";

const AllBlogsPage = (props) => {
  const { posts } = props;
  return <AllBlogPosts posts={posts} />;
};

export const getStaticProps = () => {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
};

export default AllBlogsPage;
