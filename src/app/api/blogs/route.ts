import { NextRequest, NextResponse } from "next/server";

interface Params {
  params: {
    blogId: string;
  };
}

export async function GET(request: NextRequest) {
  return NextResponse.json(
    {
      message: "Get all blogs",
    },
    { status: 200 }
  );
}

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  return NextResponse.json(
    { message: "Operation successful", body },
    { status: 200 }
  );
};
