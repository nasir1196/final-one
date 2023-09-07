import { NextRequest, NextResponse} from "next/server";


export function middleware(request: NextRequest){
    const path = request.nextUrl.pathname
    const isPublicPath= path === "/login" || path === "/signup" || path=== "/verifyemail"
        || path=== "/" || path=== "/home" || path=== "/craftPainter" || path=== "/contact"
        || path=== "/electric" || path=== "/kuwaitCities"  || path=== "/plumbing"  || path=== "/satellite"
        || path=== "/"

    const token =  request.cookies.get("token")?.value || ""

    // if(isPublicPath && token){
    //     return NextResponse.redirect(new URL("/profile", request.nextUrl))
    // }
    // if(isPublicPath && token){
    //     return NextResponse.redirect(new URL("/", request.nextUrl))
    // }
    if(!isPublicPath &&!token){
        return NextResponse.redirect(new URL("/login", request.nextUrl))
    }
}
export const config = {
    matcher: [
        "/",
        "/profile",
        "/login",
        "/signup",
        "/verifyemail",
        "/about",
        "/",
        "/home",
        "/craftPainter",
        "/contact",
        "/electric",
        "/kuwaitCities",
        "/plumbing",
        "/satellite",
        "/servicePage",
        "/appointment",
        "/forgotPassword",
    ]
}