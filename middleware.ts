import { NextResponse, NextRequest } from 'next/server'

import redirectObj from './redirect.json'
 
type RedirectEntry = {
  destination: string
  permanent: boolean
}
 
export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const redirectData = redirectObj[pathname];
 
  if (redirectData && typeof redirectData === 'object') {
    const redirectEntry: RedirectEntry = redirectData;
    const statusCode = redirectEntry.permanent ? 308 : 307
    const absoluteDestination = new URL(redirectEntry.destination, request.nextUrl.origin).toString();
    return NextResponse.redirect(absoluteDestination, statusCode)
  }
 
  // No redirect found, continue without redirecting
  return NextResponse.next()
}