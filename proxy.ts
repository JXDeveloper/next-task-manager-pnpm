import { auth } from "@/lib/auth/server";
import { NextRequest, NextResponse } from "next/server";

// export default auth.middleware({
//   loginUrl: "/auth/sign-in",
// });

export default async function middleware(request: NextRequest) {
  const response = await auth.middleware({
    loginUrl: "/auth/sign-in",
  })(request);

  if (response instanceof NextResponse) {
    response.headers.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
    response.headers.set("Pragma", "no-cache");
    response.headers.set("Expires", "0");
  }

  return response;
}

export const config = {
  matcher: ["/dashboard", "/dashboard/:path*"],
};
