"use server"

import { fetchWithAuth } from "@/lib/fetchWithAuth"
import { GetUsersResponse, UserCreationData } from "../interfaces";

export const getUsers = async () => {
    try {
        const response = await fetchWithAuth<GetUsersResponse>((client) => client.get('/users'));

        if(!response.success) {
            return {
                success: false,
                message: response.message,
                data: null
            }
        }

        return response;
    }
    catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}


interface CreateUserErrorResponse {
    success: boolean;
    message: string;
    errors: Record<string, string[]>;
}
export const createUser = async (userData: UserCreationData) => {
    try {
        const response = await fetchWithAuth((client) => client.post('/users', userData));

        if(!response.success) {
            return {
                success: false,
                message: response.message,
                data: null
            }
        }

        return {
            success: true,
            message: response.message,
            data: response.data
        }

    } catch (error) {
        console.error('Error creating user:', error);
        const parsedError = error as CreateUserErrorResponse;
        
        return {
            success: false,
            message: parsedError.message || "Error creating user",
            data: null
        }
    }
}