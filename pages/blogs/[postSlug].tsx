import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import path from "path";
import fs from "fs";

interface Props {}

const SinglePage: NextPage<Props> = () => {
  return <div>SinglePage</div>;
};

export const getStaticProps: GetStaticProps = () => {
  return { props: {} };
};

export const getStaticPaths: GetStaticPaths = () => {
  //reading paths
  const dirPathToRead = path.join(process.cwd(), "posts");
  const dirs = fs.readdirSync(dirPathToRead);
  const paths = dirs.map((filename) => {
    const filePathToRead = path.join(process.cwd(), "posts/" + filename);
    const fileContent = fs.readFileSync(filePathToRead, { encoding: "utf-8" });
    return { params: { postSlug: matter(fileContent).data.slug } };
  });

  return {
    paths,
    fallback: false,
  };
};
export default SinglePage;
