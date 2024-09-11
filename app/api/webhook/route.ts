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
    const requestBody = await request.json();
    const entries = requestBody.entry;
    console.log("checking changes", entries[0].changes[0].value.messages[0]);

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
