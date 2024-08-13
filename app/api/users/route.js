import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";
export async function GET() {
  try {
    const users = await prisma.user.findMany();

    return NextResponse.json(users);
  } catch (error) {
    // Handle errors and return a 500 response with error details
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
