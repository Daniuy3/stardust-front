"use server";

import axios, { AxiosError } from "axios";
import { createSession } from "@/lib/session";
import { LoginErrorResponse, LoginResponse } from "../interfaces";

export async function loginUser(email: string, password: string) {
    try {
        const response = await axios.post<LoginResponse >(`${process.env.API_URL}/auth/login`, {
            email,
            password
        });
        
        return {
            success: true,
            data: response.data,
            message: "Inicio de sesión exitoso"
        }
    }   
    catch (error) {
        if(error instanceof AxiosError){
            const response = error.response?.data as LoginErrorResponse;
            console.error("Error response from API:", response);
            return {
                success: false,
                message: response.message 
            }
        }
        
        console.error("Error logging in:", error);
        return {
            success: false,
            message: "Ocurrió un error al iniciar sesión"
        }
    }
}

export async function createSessionAction(personal: LoginResponse["data"]["user"], token: string) {
    await createSession(personal, token);
}