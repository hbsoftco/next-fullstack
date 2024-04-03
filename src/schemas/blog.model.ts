import { IBlog } from "@/interfaces/IBlog";
import mongoose, { model, models } from "mongoose";

const blogSchema = new mongoose.Schema<IBlog>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export const Blog = models.Blog || model<IBlog>("Blog", blogSchema);
