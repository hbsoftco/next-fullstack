"use client";

import { useEffect, useState } from "react";
import Button from "./Button";
import InputField from "./InputField";
import TextAreaField from "./TextAreaField";
import toast from "react-hot-toast";
import BlogRepository from "@/services/blog.repository";
import { useRouter } from "next/navigation";
import { Blog } from "@/models/Blog";

const BlogForm = ({ blogData }: { blogData?: Blog }) => {
  const router = useRouter();
  const [blog, setBlog] = useState<Blog>({
    title: "",
    description: "",
    image: "",
  });

  const handleChange =
    (fieldName: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setBlog({ ...blog, [fieldName]: e.target.value });
    };

  const handleSave = async () => {
    try {
      if (blogData) {
        console.log("======================>", blogData._id);
        console.log("======================>", blog);

        await BlogRepository.update(blogData._id!, blog);
        toast.success("Blog updated successfully.");
      } else {
        await BlogRepository.create(blog);
        toast.success("Blog created successfully.");
      }

      router.push("/");
    } catch (error: unknown) {
      console.log(error);

      toast.error((error as Error).message);
    }
  };

  useEffect(() => {
    if (blogData) {
      setBlog(blogData);
    }
  }, [blogData]);

  return (
    <div className="">
      <InputField
        label="Enter title"
        id="title"
        value={blog.title}
        placeholder="Title"
        onChange={handleChange("title")}
      />
      <InputField
        label="Enter image url"
        id="image"
        value={blog.image}
        placeholder="Image"
        onChange={handleChange("image")}
      />
      <TextAreaField
        id="description"
        value={blog.description ?? ""}
        placeholder="Description"
        onChange={handleChange("description")}
      />
      <div className="flex justify-end gap-4 mt-2">
        <Button
          label="Cancel"
          type="outline"
          onClick={() => router.push("/")}
        />
        <Button label="Save" onClick={handleSave} />
      </div>
    </div>
  );
};

export default BlogForm;
