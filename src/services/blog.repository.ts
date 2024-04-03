import axiosInstance from "@/lib/axios.config";
import { Blog } from "@/models/Blog";
import toast from "react-hot-toast";

type IBlogRepository = {
  getAll: () => Promise<Blog[]>;
  getById: (id: string) => Promise<Blog>;
  delete: (id: string) => Promise<Blog>;
  create: (blog: Blog) => Promise<void>;
  update: (id: string, blog: Blog) => Promise<void>;
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
  delete: async (id: string) => {
    try {
      return (await axiosInstance.delete(`/blogs/${id}`)).data.data;
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
  update: async (id: string, blog: Blog) => {
    try {
      console.log('------> I am in repo');
      
      return await axiosInstance.put(`/blogs/${id}`, blog);
    } catch (error) {
      // return error;
    }
  },
};

export default BlogRepository;
