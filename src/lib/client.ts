import axios, { AxiosInstance } from "axios";

export const  createApiClient =  (token?: string): AxiosInstance => {
    
    const client = axios.create({
        baseURL: process.env.API_URL,
        headers: token ? { Authorization: `Bearer ${token}` } : {},
    });

    return client;
}