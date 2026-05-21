import { NextResponse } from "next/server";

const DUAL_DIPLOMA_HOST = "dualdiploma.foundation.chanakacademy.org";

export function middleware(request) {
  const host = request.headers.get("host")?.split(":")[0]?.toLowerCase();
  const { pathname } = request.nextUrl;

  if (host === DUAL_DIPLOMA_HOST && pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = "/dual-diploma";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
