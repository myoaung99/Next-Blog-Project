import React from "react";
import PostContent from "../../components/posts/post-detail/post-content";
import { getFeaturedPosts, getSelectedPost } from "../../helper/post-util";

const BlogDetailPage = (props) => {
  const { post } = props;
  console.log(post);
  return (
    <>
      <PostContent post={post} />
    </>
  );
};

export const getStaticPaths = () => {
  const featuredPosts = getFeaturedPosts();
  const paths = featuredPosts.map((post) => ({ params: { slug: post.slug } }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = (context) => {
  const { slug } = context.params;
  const selectedPost = getSelectedPost(slug);
  return {
    props: {
      post: selectedPost,
    },
  };
};

export default BlogDetailPage;
