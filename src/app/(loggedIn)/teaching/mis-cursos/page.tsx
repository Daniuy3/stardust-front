import { ContainedButton } from "@/components/Button";
import { Select } from "@/components/Select";
import { InputAdornment, OutlinedInput } from "@mui/material";
import { BiBook } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { LuSearch } from "react-icons/lu";


export default function Page() {
    return (
        <div className="h-full min-h-0 w-full px-5 py-10 flex justify-center flex-col">
            <div className="flex gap-5">
                <div className="space-y-5">
                    <div className="flex justify-between">
                        <div>
                            <h1 className="text-2xl font-bold">Mis Cursos</h1>
                            <p>
                                Administra tus cursos, clases, alumnos y evaluaciones
                            </p>
                        </div>

                        <ContainedButton
                            startIcon={<FaPlus />}
                        >
                            Crear curso
                        </ContainedButton>
                    </div> 
                    <div className="flex gap-5">
                        <div className="p-5 border border-gray-300 rounded-lg flex gap-5 items-center">
                            <div className="rounded-full p-5 bg-purple-300 text-purple-700">
                                <BiBook size={24} />
                            </div>
                            <div>
                                <p className="font-bold text-lg">
                                    6
                                </p>
                                <p>
                                    Cursos creados
                                </p>
                            </div>
                        </div>

                        <div className="p-5 border border-gray-300 rounded-lg flex gap-5 items-center">
                            <div className="rounded-full p-5 bg-green-300 text-green-700">
                                <BiBook size={24} />
                            </div>
                            <div>
                                <p className="font-bold text-lg">
                                    3
                                </p>
                                <p>
                                    Cursos publicados
                                </p>
                            </div>
                        </div>

                        <div className="p-5 border border-gray-300 rounded-lg flex gap-5 items-center">
                            <div className="rounded-full p-5 bg-amber-200 text-amber-700">
                                <BiBook size={24} />
                            </div>
                            <div>
                                <p className="font-bold text-lg">
                                    3
                                </p>
                                <p>
                                    borradores
                                </p>
                            </div>
                        </div>

                        <div className="p-5 border border-gray-300 rounded-lg flex gap-5 items-center">
                            <div className="rounded-full p-5 bg-indigo-200 text-indigo-700">
                                <FaPeopleGroup size={24} />
                            </div>
                            <div>
                                <p className="font-bold text-lg">
                                    3
                                </p>
                                <p>
                                    Alumnos inscritos
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-5 flex items-center gap-5 border border-gray-300 rounded-lg">
                        <div className="w-full lg:w-auto">
                            <OutlinedInput 
                                size="small"
                                placeholder="Buscar usuarios..."
                                color="secondary"
                                fullWidth
                                startAdornment={
                                    <InputAdornment position="start">
                                        <LuSearch size={14} color="#6b7280"/>
                                    </InputAdornment>
                                }
                            />
                        </div>

                        <div className="flex gap-5 ml-auto">
                            <Select 
                                label="Estado"
                                id="role-select"
                                items={[
                                    { value: "all", label: "Todos" },
                                    { value: "admin", label: "Administrador" },
                                    { value: "user", label: "Usuario" },
                                    { value: "profesor", label: "Profesor" },
                                ]}
                            />
                            <Select 
                                label="Visibilidad"
                                id="status-select"
                                items={[
                                    { value: "all", label: "Todos" },
                                    { value: "active", label: "Activo" },
                                    { value: "inactive", label: "Inactivo" },
                                    { value: "invited", label: "Invitado" },
                                ]}
                            />
                            <Select 
                                label="Nivel"
                                id="filter-select"
                                items={[
                                    { value: "all", label: "Todos" },
                                    { value: "last_week", label: "Última semana" },
                                    { value: "last_month", label: "Último mes" },
                                    { value: "last_year", label: "Último año" },
                                ]}
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}