import { clerkMiddleware, redirectToSignIn } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export default clerkMiddleware((auth, req) => {
  // If the user is not authenticated and not on a public route, redirect to homepage
  if (!auth().userId && req.nextUrl.pathname !== '/')  {
    return NextResponse.redirect(new URL('/', req.url));
  }
  // Otherwise, continue as normal
  return NextResponse.next();
}, {
  publicRoutes: ['/'],
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};