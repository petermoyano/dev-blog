import { InferGetStaticPropsType, NextPage } from "next";
import BlogCard from "./components/BlogCard";

type Props = InferGetStaticPropsType<typeof getStaticProps>;
interface PostApiResponse {
  postInfo: {
    title: string;
    slug: string;
    meta: string;
  }[];
}

const Blogs: NextPage<Props> = ({ posts }) => {
  console.log(posts);
  return (
    <div className="max-w-3xl mx-auto p-5 space-y-5">
      {posts.map((post) => (
        <BlogCard
          key={post.slug}
          title={post.title}
          description={post.meta}
          slug={post.slug}
        />
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const { postInfo }: PostApiResponse = await fetch(
    "http://localhost:3000/api/posts"
  ).then((data) => data.json());

  return { props: { posts: postInfo } };
};
export default Blogs;
