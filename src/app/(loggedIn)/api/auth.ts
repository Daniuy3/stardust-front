"use server";

import { fetchWithAuth } from "@/lib/fetchWithAuth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


interface LogoutResponse {
    success: boolean;
    message: string;
}

export const logout = async () => {

    const cookieStore = await cookies()

    try {
        const response = await fetchWithAuth<LogoutResponse>(client => client.post("/auth/logout"));
        console.log("Logout response:", response);
        if (!response.success) {
            return {
                success: false,
                message: "Error al cerrar sesión"
            }
        }

        cookieStore.delete("session");
    }

    catch (error) {        
        console.error("Logout failed:", error);
        
        return {
            success: false,
            message: "Error al cerrar sesión"
        }
    }

    redirect("/login?redirect_reason=logged_out"); 
}
