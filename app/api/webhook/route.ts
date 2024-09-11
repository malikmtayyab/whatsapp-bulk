import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    return new NextResponse("appleorangejuice", { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      {
        status: "failed",
        message: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}
