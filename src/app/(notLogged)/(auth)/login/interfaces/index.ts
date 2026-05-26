

export interface LoginFormValues {
    email: string;
    password: string;
}

export type UserRole = 'admin' | 'teacher' | 'student';


export interface LoginResponse {
    message: string;
    success: boolean;
    data: {
        token: string;
        expires_in: number;
        user: {
            id: number;
            display_name: string;
            email: string;
            roles: UserRole[];
        }
    }
}


export interface LoginErrorResponse {
    success: boolean;
    message: string;
}