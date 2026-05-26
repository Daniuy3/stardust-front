import { NextRequest, NextResponse } from 'next/server'
import {
  decrypt,
  getSessionCookieOptions,
  refreshSession,
  SESSION_COOKIE_NAME,
  SESSION_REFRESH_THRESHOLD_MS,
} from '@/lib/session'

const redirectToLogin = (request: NextRequest, reason: string) => {
  const url = request.nextUrl.clone()
  url.pathname = '/login'
  url.search = `?redirect_reason=${reason}`

  const response = NextResponse.redirect(url)
  response.cookies.delete(SESSION_COOKIE_NAME)

  return response
}

export async function proxy(request: NextRequest) {
  const sessionCookie = request.cookies.get(SESSION_COOKIE_NAME)?.value

  if (!sessionCookie) {
    return redirectToLogin(request, 'no_token')
  }

  const session = await decrypt(sessionCookie)

  if (!session) {
    return redirectToLogin(request, 'invalid_token')
  }

  const timeUntilExpiry = session.expires_in - Date.now()

  if (timeUntilExpiry > SESSION_REFRESH_THRESHOLD_MS) {
    return NextResponse.next()
  } 

  try {
    const refreshedSession = await refreshSession(session)

    if (!refreshedSession) {
      return redirectToLogin(request, 'refresh_failed')
    }

    const response = NextResponse.next()
    response.cookies.set(
      SESSION_COOKIE_NAME,
      refreshedSession.session,
      getSessionCookieOptions(refreshedSession.expiresAt),
    )

    return response
  } catch (error) {
    console.error('Error refreshing session:', error)
    return redirectToLogin(request, 'refresh_failed')
  }
}

export const config = {
  matcher: ['/home/:path*', '/administracion/:path*'],
}
