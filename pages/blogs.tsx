import { NextPage } from "next";
import BlogCard from "./components/BlogCard";

interface Props {}

const Blogs: NextPage<Props> = () => {
  return (
    <>
      <BlogCard title={"this is my blog"} description={"Description!!"} />
      <BlogCard title={"this is my blog"} description={"Description!!"} />
      <BlogCard title={"this is my blog"} description={"Description!!"} />
    </>
  );
};

export default Blogs;
