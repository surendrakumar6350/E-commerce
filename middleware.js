import { NextResponse } from 'next/server'



export async function middleware(request) {
  const cookiesss = request.cookies.get("user")?.value;
  if(cookiesss) {
    const pth = request.nextUrl.pathname == "/v1/1/signup" || request.nextUrl.pathname == "/v1/1/login";
    if(pth) {
    return NextResponse.redirect(new URL('/v1/home', request.url))
    }
  
  }
else {
  const pthd = request.nextUrl.pathname == "/v1/profile/user" || request.nextUrl.pathname == "/v1/profile/admin";
  if(pthd) {
    return NextResponse.redirect(new URL('/v1/1/login', request.url))
  }
}
  }

export const config = {
  matcher: ['/v1/1/signup','/v1/1/login','/v1/profile/user','/v1/profile/admin', '/v1/home']
}