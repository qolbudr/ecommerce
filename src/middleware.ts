import { NextRequest } from "next/server";
import { handleApiMiddleware } from "@/shared/middleware/api.middleware";
import { handleWebMiddleware } from "@/shared/middleware/web.middleware";

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  if (pathname.startsWith("/api")) {
    return handleApiMiddleware(req);
  }

  return handleWebMiddleware(req);
}

export const config = {
  matcher: [
    "/login",
    "/register",
    "/admin/:path*",
    "/api/:path((?!auth).*)"
  ],
};