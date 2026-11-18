import { NextRequest, NextResponse } from "next/server";

export function proxy(req: NextRequest) {
  console.log("proxy called:", req.nextUrl.pathname, "credentials set:", !!process.env.BASIC_AUTH_CREDENTIALS);
  // ...以下そのまま
  const credentials = process.env.BASIC_AUTH_CREDENTIALS;

  // 環境変数が未設定なら認証なしで通す
  if (!credentials) {
    return NextResponse.next();
  }

  const authHeader = req.headers.get("authorization");
  if (authHeader?.startsWith("Basic ")) {
    const decoded = atob(authHeader.slice("Basic ".length));
    const accounts = credentials.split("|");
    if (accounts.includes(decoded)) {
      return NextResponse.next();
    }
  }

  return new NextResponse("Authentication required", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="protected"' },
  });
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:jpg|jpeg|png|webp|svg|gif|ico)$).*)",
  ],
};