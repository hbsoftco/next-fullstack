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

export async function GET(request: NextRequest, { params }: Params) {
  try {
    const blog = await Blog.findById(params.blogId);

    return NextResponse.json(
      {
        message: "Blog fetched successfully",
        data: blog,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: (error as Error).message,
      },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest, { params }: Params) {
  try {
    const body = await request.json();
    await Blog.findByIdAndUpdate(params.blogId, body);

    return NextResponse.json(
      {
        message: "Blog updated successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: (error as Error).message,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest, { params }: Params) {
  try {
    await Blog.findByIdAndDelete(params.blogId);

    return NextResponse.json(
      {
        message: "Blog deleted successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
