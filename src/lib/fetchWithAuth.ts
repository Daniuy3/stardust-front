"use server";

import { cookies } from 'next/headers';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { decrypt, SESSION_COOKIE_NAME } from './session';
import { createApiClient } from './client';
import { permanentRedirect, RedirectType } from 'next/navigation';

type RequestFunction<T> = (client: ReturnType<typeof createApiClient>) => Promise<AxiosResponse<T>>;

export async function fetchWithAuth<SuccessType , ErrorType = unknown>(requestFn: RequestFunction<SuccessType>): Promise<SuccessType> {

    const cookiesStore= await cookies()
    const token = cookiesStore.get(SESSION_COOKIE_NAME)?.value;

    if (!token) {
        permanentRedirect('/login?redirect_reason=no_token', RedirectType.replace);
        throw new Error('No authentication token found');
    }

    const decryptedToken = await decrypt(token);

    if (!decryptedToken) {
        permanentRedirect('/login?redirect_reason=invalid_token', RedirectType.replace);
    }
    
    try {
        const client = createApiClient(decryptedToken.token);
        const response = await requestFn(client);

        return response.data;

    } catch (error) {

        console.error(error);
        
        
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError<ErrorType>;

            if (axiosError.response?.status === 401) {
                permanentRedirect('/login?redirect_reason=unauthorized', RedirectType.replace);
            }

            throw axiosError.response?.data ?? new Error('Error inesperado del servidor');
        }

        throw new Error(error instanceof Error ? error.message : 'Error inesperado');
    }
}
