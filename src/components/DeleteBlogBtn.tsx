"use client";

import BlogRepository from "@/services/blog.repository";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Button from "./Button";
import { useRouter } from "next/navigation";

interface Props {
  blogId: string;
}

const DeleteBlogBtn: React.FC<Props> = (props) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    try {
      setLoading(true);
      await BlogRepository.delete(props.blogId);
      toast.success("Blog deleted successfully.");

      router.push("/");
    } catch (error) {
      toast.error((error as Error).message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Button label="Delete" type="danger" onClick={handleDelete}>
      Delete
    </Button>
  );
};

export default DeleteBlogBtn;
