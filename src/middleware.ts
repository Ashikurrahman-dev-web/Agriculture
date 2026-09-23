import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth } from '@/lib/auth'; 
export const runtime = 'nodejs';

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    try {
        // Better Auth session Check
        const session = await auth.api.getSession({
            headers: request.headers
        });

        
        if (!session && (pathname === '/ai' || pathname.startsWith('/dashboard'))) {
            const loginUrl = new URL('/login', request.url);
            return NextResponse.redirect(loginUrl);
        }

        return NextResponse.next();
    } catch (error) {
        console.error("Middleware Auth Error:", error);
        
        if (pathname === '/ai' || pathname.startsWith('/dashboard')) {
            return NextResponse.redirect(new URL('/login', request.url));
        }
        return NextResponse.next();
    }
}

export const config = {
    matcher: [
        '/ai',
        '/dashboard/:path*'
    ],
};