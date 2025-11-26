import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const SECRET_KEY = process.env.JWT_SECRET;

export async function handleWebMiddleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const { pathname } = req.nextUrl;

  const publicPaths = ["/admin/login", "/user/login"];

  console.log(pathname);

  if (!token && pathname.startsWith("/admin/dashboard")) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  if (token) {
    try {
      const user = await jwtVerify(token, new TextEncoder().encode(SECRET_KEY!));

      if (publicPaths.includes(pathname)) {
        if(user.payload.role === "ADMIN") {
          return NextResponse.redirect(new URL("/admin/dashboard", req.url));
        }
      }

      if (req.url.includes("/admin") && user.payload.role !== "ADMIN") {
        return NextResponse.redirect(new URL("/", req.url));
      }

      return NextResponse.next();
    } catch {
      const res = NextResponse.redirect(new URL("/", req.url));
      res.cookies.delete("token");
      return res;
    }
  }

  return NextResponse.next();
}
