interface PageProps {
  params: {
    blogId: string;
  };
}

const Page = ({ params }: PageProps) => {
  return <div>edit blog {params.blogId}</div>;
};

export default Page;
