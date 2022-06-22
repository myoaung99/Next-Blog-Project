import React from "react";
import Head from "next/head";
import PostContent from "../../components/posts/post-detail/post-content";
import { getAllPosts, getSelectedPost } from "../../helper/post-util";

const BlogDetailPage = (props) => {
  const { post } = props;
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostContent post={post} />
    </>
  );
};

export const getStaticPaths = () => {
  const posts = getAllPosts();
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));
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
    revalidate: 600,
  };
};

export default BlogDetailPage;
