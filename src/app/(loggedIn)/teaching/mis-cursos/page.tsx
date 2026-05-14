import { ContainedButton } from "@/components/Button";
import { Select } from "@/components/Select";
import { InputAdornment, OutlinedInput } from "@mui/material";
import { BiBook, BiChalkboard } from "react-icons/bi";
import { FaBook, FaClock, FaEdit, FaPlus } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { LuSearch } from "react-icons/lu";
import { courses } from "../../../../data/courses-example";
import Image from "next/image";
import { GiNetworkBars } from "react-icons/gi";
import { TbWorld } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";
import { CiPlay1 } from "react-icons/ci";
import { IoPeopleOutline, IoVideocamOutline } from "react-icons/io5";
import { TiDocumentText } from "react-icons/ti";
import { CgLock } from "react-icons/cg";


export default function Page() {
    return (
        <div className="h-full  min-h-0 w-full px-5 py-10 flex justify-center flex-col">
            <div className="flex gap-5 h-full overflow-hidden">
                <div className="flex flex-col gap-5 max-w-3/4 h-full min-h-0">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-2xl font-bold">Mis Cursos</h1>
                            <p>
                                Administra tus cursos, clases, alumnos y evaluaciones
                            </p>
                        </div>

                        <div className="h-8">
                            <ContainedButton
                                startIcon={<FaPlus />}
                            >
                                Crear curso
                            </ContainedButton>
                        </div>
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

                    <div className="p-5 py-2 flex items-center gap-5 border border-gray-300 rounded-lg">
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

                    <div className="p-5 border border-gray-300 flex flex-col gap-5 rounded-lg overflow-y-auto flex-1 min-h-0">
                        {
                            courses.map(course => (
                                <div key={course.id +  "-course-card"} className="flex gap-5 border-gray-300 border rounded-lg">
                                    <div className="min-w-40 relative">
                                        <Image 
                                            src={course.thumbnail_url}
                                            alt={course.title}
                                            fill
                                            className="object-cover rounded-lg  absolute inset-0"
                                        />
                                    </div>
                                    <div className="flex flex-col justify-between py-5 max-w-3/5">
                                        <div className="flex items-center gap-2">
                                            <h2 className="text-sm font-semibold">
                                                {course.title}
                                            </h2>
                                            <p className="py-1 px-2 bg-green-200 text-green-700 rounded-full">
                                                {course.status === "published" ? "Publicado" : "Borrador"}
                                            </p>
                                            <p>
                                                {course.visibility === "public" ? "Público" : "Privado"}
                                            </p>
                                        </div>
                                        <p>
                                            {course.short_description}
                                        </p>
                                        <div className="flex gap-5">
                                            <div className="flex items-center gap-2">
                                                <GiNetworkBars size={16} />
                                                <p>
                                                    {course.level === "beginner" ? "Principiante" : course.level === "intermediate" ? "Intermedio" : "Avanzado"}
                                                </p> 
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <TbWorld size={16} />
                                                <p>
                                                    {course.language === "es" ? "Español" : course.language}
                                                </p> 
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <FaClock size={16} />
                                                <p>
                                                    {course.estimated_duration_hours} horas
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="py-5 ml-auto">
                                       <div className=" flex flex-col justify-between px-2 border-gray-300 border-l border-r">
                                            <div className="-space-y-2">
                                                <p className="font-semibold text-lg">
                                                    120
                                                </p>
                                                <span className=" font-normal text-gray-500 block">
                                                    Alumnos
                                                </span>
                                            </div>

                                            <div className="-space-y-2">
                                                <p className="font-semibold text-lg">
                                                    18
                                                </p>
                                                <span className=" font-normal text-gray-500 block">
                                                    Clases
                                                </span>
                                            </div>
                                            
                                            <div className="-space-y-2">
                                                <p className="font-semibold text-lg">
                                                    4
                                                </p>
                                                <span className=" font-normal text-gray-500 block">
                                                    Tareas
                                                </span>
                                            </div>

                                            <div className="-space-y-2">
                                                <p className="font-semibold text-lg">
                                                    2
                                                </p>
                                                <span className=" font-normal text-gray-500 block">
                                                    Quizzes
                                                </span>
                                            </div>

                                       </div>

                                    </div>
                                    <div className="pr-5 py-5 flex flex-col justify-between">
                                        <button className="text-sm text-purple-600 border border-purple-600 bg-purple-100 px-5 rounded-sm font-semibold py-1 flex gap-2 items-center justify-between w-full">
                                            Editar
                                            <IoIosArrowForward size={14} /> 
                                        </button>

                                        <button className="text-sm border border-gray-300  px-5 rounded-sm font-semibold py-1 flex gap-2 items-center w-full">
                                            <CiPlay1  size={14} /> 
                                            Contenido
                                        </button>

                                        <button className="text-sm border border-gray-300  px-5 rounded-sm font-semibold py-1 flex gap-2 items-center w-full">
                                            <IoPeopleOutline   size={14} /> 
                                            Alumnos
                                        </button>

                                        <button className="text-sm border border-gray-300  px-5 rounded-sm font-semibold py-1 flex gap-2 items-center w-full">
                                            <TiDocumentText    size={14} /> 
                                            Tareas
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="hidden lg:flex flex-col gap-5 justify-between w-full max-w-1/4">
                    <div className="p-5 py-2 h-full     border border-gray-300 rounded-lg">
                        <div className="flex justify-between items-center">
                            <h2 className="text-sm font-bold">
                                Resumen general
                            </h2>

                            <Select 
                                label="Periodo"
                                id="filter-select"
                                items={[
                                    { value: "last_week", label: "Última semana" },
                                    { value: "last_month", label: "Último mes" },
                                    { value: "last_year", label: "Último año" },
                                ]}
                            />
                        </div>
                        <div className="mt-5 flex flex-col gap-5">
                            <div className="flex gap-2 items-center">
                                <FaPeopleGroup size={16} />
                                <p>
                                    Nuevos alumnos
                                </p>
                                <p className="ml-auto font-semibold text-green-600 text-sm">
                                    +15
                                </p>
                            </div>

                            <div className="flex gap-2 items-center">
                                <FaBook size={16} />
                                <p>
                                    Clases creadas
                                </p>
                                <p className="ml-auto font-semibold text-green-600 text-sm">
                                    +15
                                </p>
                            </div>
                            
                            <div className="flex gap-2 items-center">
                                <FaBook size={16} />
                                <p>
                                    Tareas entregadas
                                </p>
                                <p className="ml-auto font-semibold text-green-600 text-sm">
                                    +15
                                </p>
                            </div>

                            <div className="flex gap-2 items-center">
                                <CgLock size={16} />
                                <p>
                                    Horas de contenido
                                </p>
                                <p className="ml-auto font-semibold  text-sm">
                                    12h 45m
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className="p-5 h-full py-2 border border-gray-300 rounded-lg space-y-3">
                        <h2 className="text-sm font-bold">
                            Pendientes
                        </h2>
                        <div className="flex gap-2 items-center">
                            <div className="rounded-full p-3 bg-rose-100 text-rose-500">
                                <FaBook  size={20}/>
                            </div>
                            <div>
                                <p className="font-semibold">
                                    8
                                </p>
                                <p className="text-sm text-gray-500">
                                    Entregas por revisar
                                </p>
                            </div>

                            <p className="text-rose-600 font-semibold ml-auto">
                                ver
                            </p>
                        </div>

                        <div className="flex gap-2 items-center">
                            <div className="rounded-full p-3 bg-purple-100 text-purple-500">
                                <FaEdit  size={20}/>
                            </div>
                            <div>
                                <p className="font-semibold">
                                    2
                                </p>
                                <p className="text-sm text-gray-500">
                                    Cursos en borrador
                                </p>
                            </div>

                            <p className="text-rose-600 font-semibold ml-auto">
                                ver
                            </p>
                        </div>

                        <div className="flex gap-2 items-center">
                            <div className="rounded-full p-3 bg-amber-100 text-amber-500">
                                <IoVideocamOutline   size={20}/>
                            </div>
                            <div>
                                <p className="font-semibold">
                                    1
                                </p>
                                <p className="text-sm text-gray-500">
                                    Clase sin grabación
                                </p>
                            </div>

                            <p className="text-rose-600 font-semibold ml-auto">
                                ver
                            </p>
                        </div>
                    </div>

                    <div className="p-5 py-2 border border-gray-300 rounded-lg space-y-3 h-full">
                        <div className="flex justify-between items-center">
                            <h2 className="text-sm font-bold">
                                Próxima clase en vivo
                            </h2>

                            <p className="text-white bg-purple-800 px-2 py-1 rounded-full">
                                En vivo
                            </p>
                        </div>

                        <p className="font-semibold">
                            React: De cero a experto
                        </p>

                        <div className="flex gap-2">
                            <BiChalkboard size={16} />
                            <p>
                                Hoy a las 6:00 PM
                            </p>
                        </div>
                        <p>
                            Tema: Hooks avanzados
                        </p>

                            <button className="text-sm border border-purple-600 text-purple-600 bg-purple-100  px-5 rounded-sm font-semibold py-2 flex gap-2 items-center w-full justify-center">
                                <IoVideocamOutline />
                                Ir a la sala
                            </button>
                    </div>
                </div>
            </div>
        </div>
    );
}