interface PageProps {
  params: {
    blogId: string;
  };
}

const Page = ({ params }: PageProps) => {
  return <div>blog from next {params.blogId}</div>;
};

export default Page;
