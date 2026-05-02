import { TextButton } from "@/components/Button";
import { Select } from "@/components/Select";
import { Button, InputAdornment, OutlinedInput } from "@mui/material";
import { BiExport } from "react-icons/bi";
import { LuSearch } from "react-icons/lu";
import { RiGroupLine } from "react-icons/ri";
import { TfiReload } from "react-icons/tfi";
import { TableHandler } from "./components/TableHandler";
import { getUsers } from "./api";
import { UsersCount } from "./components/UsersCount";
import { CreateUser } from "./components/CreateUser";

export default async function Page() {

    const users = await getUsers();

    return (
        <div className="flex h-full min-h-0 w-full flex-col gap-5 p-2 py-10 md:p-5 lg:p-10">
            <div>
                <h2 className="text-2xl font-semibold">
                    Usuarios
                </h2>
                <p>
                    Administra usuarios con acceso a la plataforma.
                </p>
            </div>

            <div className="flex min-h-0 h-full w-full flex-col rounded-xl border border-gray-300">
                <div className="p-5 flex flex-col gap-5 border-b border-gray-300 lg:flex-row lg:items-center">

                    <div className="mx-auto sm:mx-0">
                        <p>
                            Total de Usuarios
                        </p>
                        <div className="flex gap-5 items-center">
                            <p className="font-semibold text-2xl">
                                128
                            </p>
                            <RiGroupLine size={20}/> 
                        </div>
                    </div>

                    <div className="flex gap-2 justify-center lg:justify-start">
                        <UsersCount 
                            status="active"
                            count={120}
                        />

                        <UsersCount 
                            status="inactive"
                            count={120}
                        />

                        <UsersCount 
                            status="invited"
                            count={8}
                        />
                    </div>

                    <div className="flex gap-2 lg:ml-auto justify-center lg:justify-end">
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

                        <CreateUser />
                    </div>
                </div>
                <div className="flex flex-col gap-3 border-b border-gray-300 px-5 py-2 lg:flex-row lg:items-center">
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
                    <div className=" flex-wrap gap-2 lg:ml-auto lg:justify-end hidden md:flex">
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
                            className="shrink-0"
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