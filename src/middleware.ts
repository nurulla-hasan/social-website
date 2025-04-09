import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("token")?.value;

  const isAuthPage =
    pathname.startsWith("/auth/login") || pathname.startsWith("/auth/sign-up");

  if (isAuthPage && token) {
    // Authenticated users shouldn't access login/signup
    return NextResponse.redirect(new URL("/home", request.url));
  }

  if (!token && !isAuthPage) {
    // Unauthenticated users trying to access protected routes
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // Otherwise, allow the request
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|assets|_next/image|favicon.ico).*)"],
};
