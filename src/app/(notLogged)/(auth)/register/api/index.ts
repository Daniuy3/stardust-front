"use server";

import { RegisterActionResponse, RegisterErrorResponse, RegisterFormValues, RegisterResponse } from "../interfaces";
import axios, { AxiosError } from "axios";


export const registerUser = async (data: RegisterFormValues): Promise<RegisterActionResponse> => {
    try {
        const response = await axios.post<RegisterResponse & Partial<RegisterErrorResponse>>(`${process.env.API_URL}/public-register`, data)

        if(!response.data.success) {
            return {
                success: false,
                message: response.data.message,
                errors: response.data.errors,
            }
        }

        return {
            success: true,
            message: response.data.message,
            data: response.data.data,
        }
    }
    catch (error) {
        console.error("Error during registration:", error)

        if(error instanceof AxiosError) {

            console.log("Axios error details:", {
                message: error.message,
                response: error.response?.data,
                status: error.response?.status,
            })

            const responseData = error.response?.data as Partial<RegisterErrorResponse> | undefined
            const message = responseData?.message || "An error occurred during registration."

            return {
                success: false,
                message,
                errors: responseData?.errors,
            }
        }
        
        return {
            success: false,
            message: "An unexpected error occurred during registration.",
        }
    }
}
