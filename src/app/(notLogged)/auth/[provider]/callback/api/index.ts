"use server";

import { LoginResponse } from "@/app/(notLogged)/(auth)/login/interfaces";
import axios, { AxiosError } from "axios";

interface CallbackParams {
    code: string;
    state: string;
    provider: string;
}


export const handleCallback = async ({
    code,
    state,
    provider
}: CallbackParams) => {

    try {
        const response = await axios.get<LoginResponse>(`${process.env.API_URL}/auth/oauth/${provider}/callback`, {
            params: { code, state },
        });

        return {
            success: response.data.success,
            message: response.data.message,
            data: response.data.data
        }
    }

    catch (error) {
        
        if(error instanceof AxiosError) {
            const status = error.response?.status;
            const data = error.response?.data;
            
            console.error(`Axios error details - Status: ${status}, Data:`, data);
        }

        console.error(`Error occurred while handling callback for ${provider}:`, error);
        
        return {
            success: false,
            message: "Ocurrió un error al procesar el callback. Por favor, intenta de nuevo."
        }
    }
}