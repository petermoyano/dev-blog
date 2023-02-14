import { FC } from "react";

interface Props {
  title: string;
  description: string;
}

const BlogCard: FC<Props> = ({ title, description }): JSX.Element => {
  return (
    <div className="max-w-3xl mx-auto p-5 space-y-5">
      <div className="bg-green-200 p-2 rounded">
        <h1 className="text-3xl text-gray-900 font-semibold">{title}</h1>
        <p className="text-gray-900">{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
