import { cookies } from "next/headers";
import { NavBar } from "./components/NavBar";
import { decrypt } from "@/lib/session";
import { redirect } from "next/navigation";

export default async function Layout({children}: {children: React.ReactNode}) {

    const handleGetUserName = async (): Promise<{ display_name: string; id: number | undefined }> => {
            const cookieStore = await cookies()
            const session = cookieStore.get('session')?.value;
    
            if(!session) return { display_name: '', id: undefined };
    
            try {
                const decoded = await decrypt(session);
                
                return {
                    display_name: decoded?.display_name || '',
                    id: decoded?.id
                };
            } catch (error) {
                console.error("Error decoding session:", error);
                return { display_name: '', id: undefined };
            }
        };
    
    const { display_name, id } = await handleGetUserName();
    
    if(!display_name || !id) {
        redirect('/login');
    }
    
    return (
        <div
            className="flex flex-col lg:flex-row h-screen w-full overflow-hidden"
        >
            <NavBar display_name={display_name} id={id} />
            <main className="min-w-0 flex-1 overflow-auto">
                {children}
            </main>
        </div>
    );
}