import 'server-only'

import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import { LoginResponse } from '@/app/(notLogged)/login/interfaces'
 
const secretKey = process.env.SESSION_SECRET
const encodedKey = new TextEncoder().encode(secretKey)
 
export async function encrypt(payload: LoginResponse["data"]["user"] & { token: string }) {
    
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
    return payload as LoginResponse["data"]["user"] & { token: string }
  } catch (error) {
    console.error(error)
  }
}

export async function createSession(user: LoginResponse["data"]["user"], token: string) {
  const expiresAt = new Date(Date.now() +  60 * 60 * 1000)
  const session = await encrypt({ ...user, token })
  const cookieStore = await cookies()
 
  cookieStore.set('session', session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'strict',
    path: '/',
  })
}