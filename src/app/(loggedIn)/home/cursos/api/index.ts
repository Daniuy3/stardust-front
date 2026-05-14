"use server";

import { fetchWithAuth } from "@/lib/fetchWithAuth";
import { AxiosError } from "axios";
import { GetCourseResponse } from "../interfaces";

export const getCourses = async () => {
    try {
        
        
        const response = await fetchWithAuth<GetCourseResponse>(client => client.get("/courses"));

        if(response.success) {
            return {
                success: true,
                data: response.data,
            }
        }

        return {
            success: false,
            error: response.message || "Failed to fetch courses.",
        }

    }
    catch (error) {
        if(error instanceof AxiosError) {
            console.error("Error fetching courses:", error.response?.data || error.message);

            return {
                success: false,
                error: error.response?.data || error.message,
            }
        }

        console.error("Unexpected error fetching courses:", error);

        return {
            success: false,
            error: "An unexpected error occurred while fetching courses.",
        }
    }
} 