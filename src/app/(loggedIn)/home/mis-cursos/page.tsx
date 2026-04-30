import { decrypt } from "@/lib/session";
import { cookies } from "next/headers";
import { Presentation } from "./compontents/Presentation";
import { Tabs } from "./compontents/Tabs";
import { ProgressChart } from "./compontents/ProgressChart";
import { OutlinedButton } from "@/components/Button";
import { ImStatsBars } from "react-icons/im";
import { CalendarLayout } from "./compontents/CalendarLayout";
import { FaArrowRight } from "react-icons/fa";

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
        <div className="flex h-full w-full max-w-360 mx-auto flex-col px-5 py-3 min-h-0 overflow-hidden">
            <Presentation name={name} />

            <div className="xl:grid flex-1 min-h-0 grid-cols-7 grid-rows-4 pt-5 gap-5">
                
                <div className="col-span-5 row-span-3 flex h-full xl:h-auto min-h-0 flex-col">
                    <h2 className="text-2xl font-semibold pl-2">Mis Cursos</h2>
                    <Tabs />
                </div>

                <div className="hidden xl:flex col-span-5 justify-between items-center rounded-xl border border-gray-200 bg-purple-50 p-5 py-10">
                    <div>
                        <p className="text-xl font-semibold text-gray-600">
                        ¿Buscas algo nuevo para aprender? 
                        </p>
                        <p>
                            Explora nuestro catálogo de cursos y encuentra tu próximo desafío.
                        </p>
                    </div>

                    <OutlinedButton sx={{maxHeight: 50}} endIcon={<FaArrowRight  />}>
                        Explorar Cursos
                    </OutlinedButton>
                </div>

                <div className="col-start-6 col-span-2 row-start-1 row-span-3 min-h-0 flex-col rounded-xl border border-gray-300 p-3 justify-between hidden xl:flex">
                    <h3 className="text-sm font-semibold mb-2">Tu progreso</h3>
                    <ProgressChart />
                    <div className="text-sm mt-5">
                        <p className="flex justify-between">
                            Cursos en progreso: <span className="font-medium">3</span>
                        </p>
                        <p className="flex justify-between">
                            Horas de aprendizaje: <span className="font-medium">12h 30m </span>
                        </p>
                    </div>
                    <div className="mt-5 w-10/12 mx-auto bg-gray-100">
                        <OutlinedButton 
                            fullWidth 
                            className="mt-5" 
                            sx={{bgcolor: "#f3f4f6"}} 
                            startIcon={<ImStatsBars />} 
                        >
                            Ver Estadísticas
                        </OutlinedButton>
                    </div>
                </div>

                <div className="hidden xl:flex col-start-6 row-start-4 col-span-2 min-h-0 w-full flex-col space-y-3 overflow-y-auto rounded-xl border border-gray-300 p-3 ">
                    <div className="flex justify-between">
                        <p className="font-semibold">
                            Próximos eventos
                        </p>

                        <p className="text-purple-700 font-medium cursor-pointer">
                            Ver Todos
                        </p>

                    </div>

                    <div className="flex gap-3">
                        <CalendarLayout 
                            dayNumber={15}
                            month="May"
                        />
                        <div className="flex flex-col w-full">
                            <p className="font-medium">
                                Sesión en vivo: React Avanzado
                            </p>
                            <p className="text-sm text-gray-500">
                                20 de Mayo
                            </p>
                            <p className="text-sm text-gray-500">
                                6:00pm - 7:30pm
                            </p>
                        </div>
                    </div>
                    
                    <div className="flex gap-3">
                        <CalendarLayout 
                            dayNumber={15}
                            month="May"
                        />
                        <div className="flex flex-col w-full">
                            <p className="font-medium">
                                Sesión en vivo: React Avanzado
                            </p>
                            <p className="text-sm text-gray-500">
                                20 de Mayo
                            </p>
                            <p className="text-sm text-gray-500">
                                6:00pm - 7:30pm
                            </p>
                        </div>
                    </div>
                </div>
                

            </div>
        </div>
    );
}