import { cookies } from 'next/headers';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { decrypt } from './session';
import { createApiClient } from './client';
import { permanentRedirect, RedirectType } from 'next/navigation';

type RequestFunction<T> = (client: ReturnType<typeof createApiClient>) => Promise<AxiosResponse<T>>;

export async function fetchWithAuth<SuccessType , ErrorType = unknown>(requestFn: RequestFunction<SuccessType>): Promise<SuccessType> {

    const cookiesStore= await cookies()
    const token = cookiesStore.get('session')?.value;

    if (!token) {
        permanentRedirect('/login?redirect_reason=no_token', RedirectType.replace);
        throw new Error('No authentication token found');
    }

    const decrytedToken = await decrypt(token);

    if (!decrytedToken) {
        permanentRedirect('/login?redirect_reason=invalid_token', RedirectType.replace);
    }

    const client = createApiClient(decrytedToken.token);


    try {
        const response = await requestFn(client);
        return response.data;

    } catch (error) {

        console.error(error);
        
        
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError<ErrorType>;
            throw axiosError.response?.data ?? new Error('Error inesperado del servidor');
        }

        throw new Error(error instanceof Error ? error.message : 'Error inesperado');
    }
}
