import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const requestBody = await request.json();

  console.log("requestBody", requestBody);

  try {
    return NextResponse.json(
      {
        status: "success",
        message: "Webhook triggered",
      },
      { status: 200 }
    );
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
