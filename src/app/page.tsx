export const revalidate = 0;

import BlogCard from "@/components/BlogCard";
import Button from "@/components/Button";
import BlogRepository from "@/services/blog.repository";
import Link from "next/link";

// This code just run in server side
const getBlogs = async () => {
  const data = BlogRepository.getAll();
  return data;
};

const Home = async () => {
  const blogs = await getBlogs();

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-700">All Blogs</h1>
        <Button label="Add Blog">
          <Link href="/add-blog">Add Blog</Link>
        </Button>
      </div>
      <div className="grid grid-cols-4 gap-5 mt-5">
        {blogs.map((blog) => {
          return <BlogCard blog={blog} key={blog._id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
