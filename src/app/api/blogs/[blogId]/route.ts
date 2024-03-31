import { NextRequest, NextResponse } from "next/server";

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
