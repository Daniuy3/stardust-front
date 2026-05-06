import { FaCopy, FaEdit, FaReact } from "react-icons/fa";
import { getUserById } from "../api";
import { GoBook } from "react-icons/go";
import { PiProjectorScreenChartLight } from "react-icons/pi";
import { BsAward } from "react-icons/bs";
import { LuClock5 } from "react-icons/lu";
import { TiDocument } from "react-icons/ti";
import { HiOutlineDocumentCheck } from "react-icons/hi2";
import { RoleOutlined } from "@/components/RoleOutlined";
import { PersonalInfo } from "./components/PersonalInfo";
import { Permissions } from "./components/Permissions";
import { Access } from "./components/Access";
import { Activity } from "./components/Activity";
import { RelatedCourses } from "./components/RelatedCourses";
import { UserActions } from "./components/UserActions";




const MetaInfoItem = ({ icon, label, value, className }: { icon: React.ReactNode, label: string, value: string, className?: string }) => (
    <div className={`flex gap-2 items-center px-5 border-l border-gray-300 ${className || ''}`}>
        {icon}
        <div className="-space-y-1.5">
            <p className="text-gray-500 text-sm">
                {label}
            </p>
            <p className="text-xl font-bold">
                {value}
            </p>
        </div>
    </div>
)   

export default async function Page({
    params
}: {
    params: Promise<{ id: number }>;
}) {
    const { id } = await params;

    const { success, data } = await getUserById(id);
    
    if(!success  || !data) {
        return (
            <div>
                <h1>User not found</h1>
            </div>
        );
    }

    return (
        <div className="flex max-h-screen lg:justify-center h-full min-h-0 w-full flex-col gap-5 p-2 py-10 md:p-5 lg:p-10 ">
            <div className="border border-gray-300 rounded-xl p-5 flex flex-col gap-5 xl:flex-row">
                <div className="flex gap-5 justify-center xl:justify-start">
                    <div 
                        className="outline-2 outline-purple-300 rounded-full outline-offset-2 bg-purple-600 w-24 h-24 flex items-center justify-center text-white text-3xl font-bold uppercase relative"
                        >
                        {
                            data.display_name.split(" ").map((word) => word[0]).join("")
                        }
                        <div className={`absolute outline-2 bottom-0 right-0 h-6 w-6 rounded-full ${data.status ==="active" ? 'bg-green-500 outline-green-300' : 'bg-red-500 outline-red-300'}`} />
                    </div>

                    <div className="flex flex-col justify-center gap-2">
                        <div>
                            <h1 className="text-2xl font-bold">{data.display_name}</h1>
                            <div className="text-gray-500 flex gap-2 items-center">
                                {data.email}
                                <FaCopy /> 
                            </div>
                        </div>

                        <div className="flex gap-2">
                            {
                                data.roles.map((role) => (
                                    <RoleOutlined key={role.id} name={role.name} />
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-between  xl:ml-auto gap-3">
                    <UserActions  user={data}/>
                    <div className="justify-start gap-5 flex flex-col md:grid md:grid-cols-2 xl:flex xl:flex-row xl:justify-start">
                        <MetaInfoItem 
                            icon={<GoBook size={24} className="text-purple-700"/>}
                            label="Cursos Inscritos"
                            value="5"
                            className="border-l-0  xl:border-l pt-2 xl:pt-0 justify-center md:justify-start"
                        />

                        <MetaInfoItem 
                            icon={<PiProjectorScreenChartLight  size={28} className="text-purple-700"/>}
                            label="Cursos Impartidos"
                            value="2"
                            className="border-t md:border-t-0 border-l-0 xl:border-l pt-2 xl:pt-0 justify-center md:justify-start"
                        />

                        <MetaInfoItem 
                            icon={<BsAward  size={24} className="text-purple-700"/>}
                            label="Certificados"
                            value="3"
                            className="border-t border-l-0 xl:border-l pt-2 xl:pt-0 justify-center md:justify-start xl:border-t-0"
                        />

                        <MetaInfoItem
                            icon={<LuClock5  size={24} className="text-purple-700"/>}
                            label="Último Acceso"
                            value="Hace 3 días"
                            className="border-t border-l-0 xl:border-l pt-2 xl:pt-0 justify-center md:justify-start xl:border-t-0"
                        />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                <PersonalInfo 
                    first_name={data.first_name}
                    last_name={data.last_name}
                    display_name={data.display_name}
                    email={data.email}
                    phone={data.profile?.phone}
                    birth_date={data.profile?.birth_date}
                    country={data.profile?.country}
                    city={data.profile?.city}
                    professional_title={data.profile?.professional_title}
                />

                <div className="border border-gray-300 rounded-xl p-5">
                    <h2 className="text-sm font-semibold mb-3 flex items-center gap-2">
                        <TiDocument  size={24} /> 
                        biografía
                    </h2>
                    <p>
                        {data.bio || "No proporcionada"}
                    </p>
                </div>

                <Permissions roles={data.roles} />

                <Access 
                    status={data.status}
                    email={data.email}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 ">
                <Activity 
                    items={[
                        {
                            label: "Inició sesión",
                            type: "auth",
                            date: new Date()
                        },
                        {
                            label: "Completó el curso de React",
                            type: "course",
                            date: new Date()
                        },
                        {
                            label: "Obtuvo el certificado de JavaScript",
                            type: "certificate",
                            date: new Date()
                        },
                        {
                            label: "Completó la tarea de TypeScript",
                            type: "task",
                            date: new Date()
                        }
                    ]}
                />

                <RelatedCourses />

                <div className="border border-gray-300 rounded-xl p-5 md:col-start-2 md:row-start-1 xl:col-start-auto xl:row-start-auto">
                    <h2 className="text-sm font-semibold mb-3 flex items-center gap-2">
                        <HiOutlineDocumentCheck   size={28} /> 
                        Datos del prefil
                    </h2>
                    <div className="flex flex-col gap-3">
                        <div>
                            <p>
                                user_id
                            </p>
                            <p className="w-full pl-5 border border-gray-300 rounded-md">
                                {data.profile?.user_id}
                            </p>
                        </div>

                        <p>
                            status
                            <span className={`ml-2 px-2 py-1 rounded-md text-xs ${data.status === "active" ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                {data.status}
                            </span>
                        </p>

                        <div>
                            <p>
                                avatar_url
                            </p>
                            <p className="w-full pl-5 border border-gray-300 rounded-md">
                                {data.avatar_url || "No proporcionado"}
                            </p>
                        </div>

                        <div>
                            <p className="flex justify-between">
                                Avance del perfil
                                <span className="text-sm text-gray-500">
                                    70%
                                </span>
                            </p>
                            <div className="w-full bg-gray-200 rounded-full h-4">
                                <div className="bg-purple-600 h-4 rounded-full" style={{ width: "70%" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}