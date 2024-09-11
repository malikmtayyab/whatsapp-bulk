import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);

  // Extract query parameters
  const challenge = url.searchParams.get("hub.challenge");
  try {
    return new NextResponse(challenge, { status: 200 });
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

export async function POST(request: NextRequest) {
  try {
    console.log("requestBody request", request);
    console.log("requestBody JSON.stringify", JSON.stringify(request));
    console.log("requestBody request.json", await request.json());

    return NextResponse.json(
      {
        status: "success",
        message: "Webhook Triggered.",
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
