import { NextResponse } from 'next/server';
import { auth } from './lib/auth';
import { headers } from 'next/headers';

export async function proxy(request) {
   const session = await auth.api.getSession({
      headers: await headers(),
   });

   //  return NextResponse.next(); // Proceed to the requested route

   if (session) {
      return NextResponse.next(); // Allow authenticated users to continue
   }

   return NextResponse.redirect(new URL('/login', request.url));
}

export const config = {
   matcher: ['/career', '/news/:path*'],
};
