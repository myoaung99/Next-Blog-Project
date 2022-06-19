import React from "react";
import PostContent from "../../components/posts/post-detail/post-content";

const DUMMY_POST = {
  slug: "getting-start-with-nextjs",
  title: "Getting start with NextJs",
  image: "getting-started-nextjs.png",
  date: "2022-06-19",
  content: "# This is mark-down",
};

const BlogDetailPage = () => {
  return (
    <>
      <PostContent post={DUMMY_POST} />
    </>
  );
};

export default BlogDetailPage;
