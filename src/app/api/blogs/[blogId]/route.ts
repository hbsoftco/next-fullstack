import Database from "@/config/db.config";
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
  return NextResponse.json({
    message: "Get particular blog",
    blogId: params.blogId,
  });
}

export async function PUT(request: NextRequest, { params }: Params) {
  return NextResponse.json({
    message: "Put particular blog",
    blogId: params.blogId,
  });
}

export async function DELETE(request: NextRequest, { params }: Params) {
  return NextResponse.json({
    message: "Delete particular blog",
    blogId: params.blogId,
  });
}
