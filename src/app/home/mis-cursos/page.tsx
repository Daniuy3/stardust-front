import { decrypt } from "@/lib/session";
import { cookies } from "next/headers";

export default async function Page() {

    const handleGetUserName = async (): Promise<string> => {
        const cookieStore = await cookies()
        const session = cookieStore.get('session')?.value;

        if(!session) return '';

        try {
            const decoded = await decrypt(session);
            
            return decoded?.display_name || '';
        } catch (error) {
            console.error("Error decoding session:", error);
            return '';
        }
    };

    const name = await handleGetUserName();

    return (
        <div>
            <h1>Mis Cursos</h1>
            <p>Bienvenido, {name}</p>
        </div>
    );
}