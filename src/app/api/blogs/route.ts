import Database from "@/config/db.config";
import { Blog } from "@/schemas/blog.model";
import { ConnectOptions } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

const uri = process.env.MONGO_URL;
const options: ConnectOptions = {
  // add your options here if needed
};

const db = Database.getInstance(uri!, options);
db.connect();
interface Params {
  params: {
    blogId: string;
  };
}

export async function GET() {
  const blogs = await Blog.find();

  return NextResponse.json(
    {
      message: "Blogs fetched successfully",
      data: blogs,
    },
    { status: 200 }
  );
}

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();
    await Blog.create(body);
    return NextResponse.json(
      { message: "Operation successful", body },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: (error as Error).message,
      },
      { status: 500 }
    );
  }
};
