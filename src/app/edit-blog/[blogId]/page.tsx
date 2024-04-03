import BlogForm from "@/components/BlogForm";
import BlogRepository from "@/services/blog.repository";

interface PageProps {
  params: {
    blogId: string;
  };
}

const getBlog = async (id: string) => {
  const data = BlogRepository.getById(id);
  return data;
};

const Page = async ({ params }: PageProps) => {
  const blog = await getBlog(params.blogId);

  return (
    <div className="text-gray-800">
      <h1 className="mb-2 text-xl font-semibold">Edit Blog</h1>
      <hr />
      <div className="mt-2">
        <BlogForm blogData={blog} />
      </div>
    </div>
  );
};

export default Page;
