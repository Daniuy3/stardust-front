import { ContainedButton } from "@/components/Button";
import { Input } from "@/components/Input";
import { Select } from "@/components/Select";
import { Switch } from "@/components/Switch";
import { Tab, Tabs, TextField } from "@mui/material";
import Image from "next/image";
import { CiSaveDown2 } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { IoCloudUploadOutline } from "react-icons/io5";

export default function Page() {
    return (
        <div className="px-5 py-10 space-y-5">

            <div className="flex justify-between ">
                <Tabs
                    defaultValue={0}
                    value={0}
                    textColor='secondary' 
                    indicatorColor='secondary'
                >
                    <Tab 
                        label="Información General"
                        value={0}
                    />

                    <Tab 
                        label="Contenido"
                        value={1}
                    />

                    <Tab 
                        label="Configuración"
                        value={2}
                    />

                    <Tab
                        label="Publicación"
                        value={3}
                    />
                
                </Tabs>

                <div className="flex gap-2 py-2 -translate-y-1">
                    <button className="border border-gray-300 text-gray-600 flex gap-3 items-center px-4 py-1 rounded-lg">
                        
                        <FaRegEye size={16}/> 
                        Vista previa
                    </button>

                    <ContainedButton
                        startIcon={<CiSaveDown2 fontWeight={700}  size={16}/>}
                    >
                        Guardar
                    </ContainedButton>
                </div>
            </div>

            <div className="flex w-full gap-5">
                <div className="h-full border border-gray-300 rounded-lg p-5 w-full">
                    <h2 className="text-lg font-semibold">
                        Información básica
                    </h2>
                    <p>
                        Completa los detalles principales de tu curso
                    </p>

                    <div className="flex flex-col gap-2 w-full">
                        <Input 
                            label="Título del curso"
                            placeholder="Ej: Introducción a la Programación"
                            endAdornment={
                                <span className="text-gray-500 text-sm">
                                    10/100
                                </span>
                            }
                            
                        />

                        <Input 
                            label="Subtitulo"
                            placeholder="Ej: Introducción a la Programación"
                            endAdornment={
                                <span className="text-gray-500 text-sm">
                                    10/100
                                </span>
                            }
                        />

                        <Input 
                            label="Descripción"
                            placeholder="Describe brevemente el contenido y objetivos de tu curso"
                            multiline
                            rows={4}
                        />

                        <div className="flex gap-5 w-full">
                            <Select 
                                sx={{
                                    width: "100%"
                                }}
                                label="Categoría"
                                id="Category-selector"
                                items={[
                                    {
                                        label: "Ciencia",
                                        value: "science"
                                    },
                                    {
                                        label: "Tecnología",
                                        value: "technology"
                                    },
                                    {
                                        label: "Matemáticas",
                                        value: "mathematics"
                                    }
                                ]}
                            />

                            <Select 
                                sx={{
                                    width: "100%"
                                }}
                                label="Nivel"
                                id="level-selector"
                                items={[
                                    {
                                        label: "Principiante",
                                        value: "beginner"
                                    },
                                    {
                                        label: "Intermedio",
                                        value: "intermediate"
                                    },
                                    {
                                        label: "Avanzado",
                                        value: "advanced"
                                    }
                                ]}
                            />
                        </div>

                        <div className="flex gap-5 w-full items-center">
                            <Select 
                                sx={{
                                    width: "100%"
                                }}
                                label="Idioma"
                                id="language-selector"
                                items={[
                                    {
                                        label: "Español",
                                        value: "spanish"
                                    },
                                    {
                                        label: "Inglés",
                                        value: "english"
                                    },
                                    {
                                        label: "Francés",
                                        value: "french"
                                    }
                                ]}
                            />

                            <TextField 
                                label="Duración estimada"
                                color="secondary"
                                size="small"
                                placeholder="Ej. 10 horas"
                                sx={{
                                    width: "100%"
                                }}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-5 mt-5 justify-between">
                        <div className="border border-gray-300 py-2 px-5 flex flex-col justify-center items-center rounded-lg  gap-3">
                            <div className="flex items-center gap-5 w-full">
                                <div>
                                    <Switch 

                                    />
                                </div>
                                <div>
                                        <h3 className="text-sm font-semibold">
                                            Curso gratuito
                                        </h3>
                                        <p>
                                            Los estudiantes podrán acceder sin costo alguno
                                        </p>
                                    </div>
                                </div>

                                <div className="border-t border-gray-300 h-1 w-full min-h-0" />

                                <div className="flex w-full gap-5 items-center ">
                                    <div>
                                        <Switch 

                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold">
                                            Precio del curso
                                        </h3>
                                        <p>
                                            Define el precio para tu curso. 
                                        </p>
                                    </div>
                                </div>
                        </div>

                        <div className="space-y-3 lg:w-1/2 w-full py-2 px-2 border border-gray-300 rounded-lg">
                            <div className="text-center">
                                <h3 className="text-sm font-semibold">
                                    Imagen de portada
                                </h3>
                                <p>
                                    Recomendado: 1280x720px o proporcion 16:9. 
                                </p>
                            </div>

                            <div 
                                className="border border-dashed border-gray-300 rounded-lg h-24 w-full flex flex-col items-center justify-center text-gray-500">
                                <IoCloudUploadOutline size={32} className="text-purple-600"/>
                                <p className="text-sm  font-semibold">
                                    Haz clic para subir una imagen
                                </p>
                                <p className="text-sm text-gray-400">
                                    o arrastra y suelta aquí
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-full border border-gray-300 rounded-lg p-5 w-1/3 hidden lg:block">
                    <h2 className="text-sm font-semibold mb-4">
                        Vista previa del curso
                    </h2>

                    <div className="border border-gray-300 rounded-lg overflow-hidden text-gray-500">
                        <div className="relative w-full aspect-video">
                                <Image 
                                    src="/courses/docker-thumbnail.png"
                                    alt="Vista previa del curso"
                                    layout="fill"
                                    objectFit="cover"
                                />
                        </div>
                        <div className="px-2 py-4">
                            <p className="font-semibold text-gray-800">
                                Introducción a Docker
                            </p>
                            <p>
                                Aprende los fundamentos de Docker
                            </p>

                            <div className="h-px w-full block bg-gray-300 my-2" />

                            <p className="font-semibold text-gray-800">
                                Descripción
                            </p>

                            <p className=" text-gray-600">
                                Este curso te guiará a través de los conceptos básicos de Docker, incluyendo la creación de contenedores...
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}