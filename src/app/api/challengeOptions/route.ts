import { NextResponse } from "next/server";
import db from "@/db/drizzle";
import { getIsAdmin } from "@/db/queries";
import { challengeOptions } from "@/db/schema";

export async function GET(req: Request) {
  const isAdmin = await getIsAdmin();
  if (!isAdmin) {
    return new NextResponse("unAuthorized", { status: 401 });
  }
  const data = await db.query.challengeOptions.findMany();

  const response = NextResponse.json(data);
  response.headers.set('X-Total-Count', data.length.toString());
  response.headers.set('Access-Control-Expose-Headers', 'Content-Range');
  response.headers.set('Content-Range', `bytes ${0}-${100}/${data.length}`);
  
  return response;
}

export async function POST(req: Request) {
  const isAdmin = await getIsAdmin();
  if (!isAdmin) {
    return new NextResponse("unAuthorized", { status: 401 });
  }
  const body = await req.json();

  const data = await db
    .insert(challengeOptions)
    .values({
      ...body,
    })
    .returning();

  return NextResponse.json(data[0]);
}
