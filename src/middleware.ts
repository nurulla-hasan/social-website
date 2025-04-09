import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("token")?.value;

  // Allow all /auth/* routes (public)
  if (pathname.startsWith("/auth")) {
    return NextResponse.next();
  }

  // If not authenticated, redirect to login
  if (!token) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // If token exists, allow access
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|assets|_next/image|favicon.ico|auth).*)",
  ],
};
