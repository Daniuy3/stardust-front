import { ContainedButton, TextButton } from "@/components/Button";
import { Select } from "@/components/Select";
import { Button, InputAdornment, OutlinedInput, Table, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { BiExport } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";
import { RiGroupLine } from "react-icons/ri";
import { TfiReload } from "react-icons/tfi";
import { TableHandler } from "./components/TableHandler";
import { getUsers } from "./api";

export default async function Page() {

    const users = await getUsers();
    console.log(users);
    return (
        <div className="flex h-full min-h-0 w-full flex-col gap-5 p-10">
            <div>
                <h2 className="text-2xl font-semibold">
                    Usuarios
                </h2>
                <p>
                    Administra usuarios con acceso a la plataforma.
                </p>
            </div>

            <div className="flex min-h-0 w-full flex-1 flex-col overflow-hidden rounded-xl border border-gray-300">
                <div className="p-5 flex gap-5 items-center border-b border-gray-300">
                    <div>
                        <p>
                            Total de Usuarios
                        </p>
                        <div className="flex gap-5 items-center justify-between">
                            <p className="font-semibold text-2xl">
                                128
                            </p>
                            <RiGroupLine size={20}/> 
                        </div>
                    </div>

                    <div className="rounded-xl border p-2 border-gray-300 min-w-36">
                        <div className="flex gap-2 items-center">
                            <div className="h-2 w-2 rounded-full bg-green-700"/>
                            <p className="text-sm">
                                Activos
                            </p>
                        </div>
                        <p className="font-semibold text-xl">
                            120
                        </p>
                    </div>

                    <div className="rounded-xl border p-2 border-gray-300 min-w-36">
                        <div className="flex gap-2 items-center">
                            <div className="h-2 w-2 rounded-full bg-yellow-600"/>
                            <p className="text-sm">
                                Inactivos
                            </p>
                        </div>
                        <p className="font-semibold text-xl">
                            120
                        </p>
                    </div>

                    <div className="rounded-xl border p-2 border-gray-300 min-w-36">
                        <div className="flex gap-2 items-center">
                            <div className="h-2 w-2 rounded-full bg-purple-600"/>
                            <p className="text-sm">
                                Invitados
                            </p>
                        </div>
                        <p className="font-semibold text-xl">
                            120
                        </p>
                    </div>

                    <div className="ml-auto">
                        <Button
                            sx={{
                                borderColor: "#d1d5dc",
                                color: "#374151",
                                padding: "8px 16px",
                                fontSize: "14px",
                                textTransform: "none",
                            }} 
                            variant="outlined"
                            startIcon={<BiExport  size={14}/>}
                        >
                            Exportar
                        </Button>

                        <ContainedButton
                            sx={{
                                ml: 2,
                                borderRadius: "4px",
                            }}
                            startIcon={<FaPlus size={12}/>}
                            variant="contained"
                        >
                            Agregar Usuario
                        </ContainedButton>
                    </div>
                </div>
                <div className="flex p-2 border-b border-gray-300 items-center px-5">
                    <div>
                        <OutlinedInput 
                            size="small"
                            placeholder="Buscar usuarios..."
                            color="secondary"
                            startAdornment={
                                <InputAdornment position="start">
                                    <LuSearch size={14} color="#6b7280"/>
                                </InputAdornment>
                            }
                        />
                    </div>
                    <div className="ml-auto flex gap-5 items-center">
                        <Select 
                            label="Rol"
                            id="role-select"
                            items={[
                                { value: "all", label: "Todos" },
                                { value: "admin", label: "Administrador" },
                                { value: "user", label: "Usuario" },
                                { value: "profesor", label: "Profesor" },
                            ]}
                        />
                        <Select 
                            label="Estado"
                            id="status-select"
                            items={[
                                { value: "all", label: "Todos" },
                                { value: "active", label: "Activo" },
                                { value: "inactive", label: "Inactivo" },
                                { value: "invited", label: "Invitado" },
                            ]}
                        />
                        <Select 
                            label="Filtros"
                            id="filter-select"
                            items={[
                                { value: "all", label: "Todos" },
                                { value: "last_week", label: "Última semana" },
                                { value: "last_month", label: "Último mes" },
                                { value: "last_year", label: "Último año" },
                            ]}
                        />

                        <TextButton
                            startIcon={<TfiReload  size={14}/>}
                        >
                            Limpiar
                        </TextButton>
                    </div>
                </div>

                <TableHandler 
                    initialUsers={users.data?.data || []}
                />
            </div>
        </div>
    );
}