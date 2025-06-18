// ページを表示する前に実行したい処理を記述
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // if (!request.nextUrl.pathname.includes('.')) {
  //   console.log('ミドルウェアのテスト');
  // }
  console.log('ミドルウェアのテスト');
  return NextResponse.next();
}

export const config = {
  matcher: ['/blog/:path*'], // /blog/以下のパスに対してミドルウェアを適用
}