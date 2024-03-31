import Database from "@/config/db.config";
import { ConnectOptions } from "mongoose";
import { NextResponse } from "next/server";

const uri = process.env.MONGO_URL;
const options: ConnectOptions = {
  // add your options here if needed
};

const db = Database.getInstance(uri!, options);
db.connect();

export async function GET() {
  return NextResponse.json({
    message: "Hello from Next js",
  });
}
