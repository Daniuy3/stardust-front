"use server"

import { fetchWithAuth } from "@/lib/fetchWithAuth"
import { DetailedUserResponse, GetUsersResponse, UserCreationData } from "../interfaces";

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

import { UserUpdateData } from "../interfaces";

export const updateUser = async ({id, ...rest}: UserUpdateData) => {
    try {
        const payload = { ...rest };

        const response = await fetchWithAuth((client) => client.put(`/users/${id}`, payload));

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
        console.error('Error updating user:', error);
        const msg = error instanceof Error ? error.message : String(error)
        return {
            success: false,
            message: msg || 'Error updating user',
            data: null
        }
    }
}


export const getUserById = async (id: number) => {
    try {
        const response = await fetchWithAuth<DetailedUserResponse>((client) => client.get(`/users/${id}`));

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
        console.error('Error fetching user by ID:', error);
        return {
            success: false,
            message: 'Error fetching user',
            data: null
        }
    }
}