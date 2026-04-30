"use server"

import { fetchWithAuth } from "@/lib/fetchWithAuth"
import { GetUsersResponse } from "../interfaces";

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