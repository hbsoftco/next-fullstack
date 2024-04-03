/* eslint-disable @next/next/no-img-element */
import Button from "@/components/Button";
import DeleteBlogBtn from "@/components/DeleteBlogBtn";
import BlogRepository from "@/services/blog.repository";
import Link from "next/link";

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
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">{blog?.title}</h1>

        <div className="flex gap-3">
          <Button label="Cancel" type="outline">
            <Link href="/">Back</Link>
          </Button>
          <DeleteBlogBtn blogId={params.blogId} />
          <Button label="Edit" type="primary">
            <Link href={`/edit-blog/${params.blogId}`}>Edit</Link>
          </Button>
        </div>
      </div>

      <img
        src={blog?.image}
        alt={blog?.title}
        className="object-cover rounded"
      />
      <p>{blog?.description}</p>
    </div>
  );
};

export default Page;
