import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'

export async function middleware(req: any) {
    // Token will exist if the user is logged IN
    const token = await getToken({ req, secret: process.env.JWT_SECRET || '' })
    const { pathname } = req.nextUrl
        // Allow the request , if following is true ....
        // 1) the token exist
        // 2) It is a req for next auth session and provider fetching

    if (pathname.includes('/api/auth') || token) {
        return NextResponse.next();
    }
    if (token && pathname == '/login') {
        return NextResponse.redirect(new URL('/', req.url))
    }
    // Redirect them to login if they dont have token and are requesting a protected route
    if (!token && pathname !== '/login') {
       
        return NextResponse.redirect(new URL('/login', req.url))
    }
}