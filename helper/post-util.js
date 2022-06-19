import fs, { read } from "fs";
import path from "path";
import matter from "gray-matter";

const postFilePath = path.join(process.cwd(), "posts");

const getPostData = (fileName) => {
  const readFile = fs.readFileSync(path.join(postFilePath, fileName), "utf-8");

  const postSlug = fileName.replace(/\.[^\/.]+$/, ""); // removing .md

  const { data, content } = matter(readFile);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
};

export const getAllPosts = () => {
  const allPostDir = fs.readdirSync(postFilePath);
  const allPostData = allPostDir.map((post) => getPostData(post));

  const sortedPosts = allPostData.sort((postA, postB) =>
    postA.date > postB.data ? -1 : 1
  ); // show most recent posts first

  return sortedPosts;
};

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
};
