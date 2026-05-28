import { SignJWT, jwtVerify, type JWTPayload } from 'jose'
import type { LoginResponse, UserRole } from '@/app/(notLogged)/(auth)/login/interfaces'
 
const secretKey = process.env.SESSION_SECRET
const encodedKey = new TextEncoder().encode(secretKey)

export const SESSION_COOKIE_NAME = 'session'
export const SESSION_DURATION_MS = 60 * 60 * 1000
export const SESSION_REFRESH_THRESHOLD_MS = 5 * 60 * 1000

interface RefreshTokenResponse {
    success: boolean;
    data: {
        token: string;
        expires_in?: number;
    }
}
 
export interface SessionUser {
    id: number;
    display_name: string;
    email: string;
    roles: UserRole[];
}

export interface SessionToken extends SessionUser, JWTPayload {
    token: string;
    expires_in: number;
}

export async function encrypt(payload: SessionToken) {
    
    return new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('1h')
        .sign(encodedKey)
}
 
export async function decrypt(session: string | undefined = '') {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ['HS256'],
    })
    return payload as unknown as SessionToken
  } catch (error) {
    console.error(error)
  }
}

export function getSessionExpiresAt() {
  return new Date(Date.now() + SESSION_DURATION_MS)
}

export function getSessionCookieOptions(expiresAt: Date) {
  return {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'strict' as const,
    path: '/',
  }
}

export async function createSessionCookie(user: SessionUser, token: string) {
  const expiresAt = getSessionExpiresAt()
  const session = await encrypt({ ...user, token, expires_in: expiresAt.getTime() })

  return {
    session,
    expiresAt,
  }
}

export async function refreshSession(session: SessionToken) {
  const response = await fetch(`${process.env.API_URL}/auth/refresh`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${session.token}`,
      Accept: 'application/json',
    },
    cache: 'no-store',
  })

  if (!response.ok) {
    return null
  }

  const refreshResponse = await response.json() as RefreshTokenResponse

  if (!refreshResponse.success || !refreshResponse.data.token) {
    return null
  }

  return createSessionCookie(session, refreshResponse.data.token)
}

export async function createSession(user: LoginResponse["data"]["user"], token: string) {
  const { cookies } = await import('next/headers')
  const { session, expiresAt } = await createSessionCookie(user, token)
  const cookieStore = await cookies()
 
  cookieStore.set(SESSION_COOKIE_NAME, session, getSessionCookieOptions(expiresAt))
}
