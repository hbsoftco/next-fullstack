/* eslint-disable @next/next/no-img-element */
import { Blog } from "@/models/Blog";
import Link from "next/link";
import React from "react";

interface Props {
  blog: Blog;
}

const BlogCard: React.FC<Props> = ({ blog }) => {
  return (
    <Link
      key={blog.title}
      className="cursor-pointer border p-4 rounded border-gray-200"
      href={`/blog/${blog._id}`}
    >
      <img
        src={blog.image}
        alt={blog.title}
        className="rounded h-52 object-cover w-full"
      />
      <h3 className="text-gray-700 mt-2">{blog.title}</h3>
    </Link>
  );
};

export default BlogCard;
