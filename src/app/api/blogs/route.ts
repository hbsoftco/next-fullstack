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
