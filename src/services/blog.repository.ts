import axiosInstance from "@/lib/axios.config";
import { Blog } from "@/models/Blog";
import toast from "react-hot-toast";

type IBlogRepository = {
  getAll: () => Promise<Blog[]>;
  getById: (id: string) => Promise<Blog>;
  create: (blog: Blog) => Promise<void>;
};

const BlogRepository: IBlogRepository = {
  getAll: async () => {
    try {
      return (await axiosInstance.get("/blogs")).data.data;
    } catch (error) {
      return error;
    }
  },
  getById: async (id: string) => {
    try {
      return (await axiosInstance.get(`/blogs/${id}`)).data.data;
    } catch (error) {
      return error;
    }
  },
  create: async (blog: Blog) => {
    try {
      await axiosInstance.post("/blogs", blog);
    } catch (error) {
      // toast.error((error as Error).message);
    }
  },
};

export default BlogRepository;
