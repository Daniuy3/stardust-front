import { Select } from "@/components/Select";
import { getCourses } from "./api";
import { CiBookmark } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { FiltersForm } from "./components/FiltersForm";
import { FormControl, InputAdornment, OutlinedInput, } from "@mui/material";
import { LuSearch } from "react-icons/lu";
import { courses } from "@/data/courses-example";
import { CourseCard } from "../mis-cursos/compontents/CourseCard";
import { FIltersMenu } from "./components/FIltersMenu";

export const dynamic = 'force-dynamic';



export default async function Page() {
    
    const { success, data, error } = await getCourses();

    if(!success || !data) {
        return (
            <div>
                <p>Error fetching courses: {error}</p>
            </div>
        );
    }

    const filters = [
        {
            title: "Programación",
            value: "programacion"
        },
        {
            title: "Intermedio",
            value: "intermedio"
        }
    ]

    return (
        <div className="flex h-full min-h-0 pb-5 flex-col overflow-hidden px-3 md:px-5 lg:px-10">
            <div className="flex shrink-0 py-4">
                <div>
                    <h1 className="font-semibold text-2xl">Explorar cursos</h1>
                    <p>
                        Descubre nuevos conocimientos y lleva tus habilidades al siguiente nivel.
                    </p>
                </div>

                <div className="ml-auto mt-auto hidden md:block">
                    <button
                        data-umami-event="Click en guardar búsqueda de cursos"
                        className="cursor-pointer border border-gray-300 rounded-md px-4 py-2 font-medium text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                    >
                        <CiBookmark size={18} />
                        Guardar Busqueda 
                    </button>
                </div>
            </div>

            <div className="flex shrink-0 flex-wrap items-center gap-3 pb-4"> 
                <div className="flex flex-wrap gap-3"> 
                    {
                        filters.map(filter => (
                            <div key={filter.value} className="py-1 px-2  bg-gray-200 rounded-full flex gap-2 items-center"> 
                                <p> 
                                    {filter.title}
                                </p>

                                <IoMdClose />
                            </div>
                        ))
                    }
                </div>

                <div className="ml-auto flex items-center gap-1">
                    <div className="ml-auto flex items-center gap-1">
                        <p className="text-sm text-gray-500">Ordenar por:</p>
                        <Select 
                            id="select-sorter"
                            items={[
                                {label: "Relevancia", value:"relevance"},
                            ]}
                            label=""
                        />
                    </div>
                    <FIltersMenu />
                </div>
            </div>

            <div className="flex min-h-0 flex-1 overflow-hidden gap-5">
                <div className="hidden xl:flex min-h-0 w-full flex-col overflow-y-auto rounded-sm border border-gray-300 p-4 md:w-80 lg:w-1/4">
                    <FiltersForm />
                </div>
                <div className="w-full flex flex-col gap-5 overflow-y-auto">
                    <FormControl variant='outlined' fullWidth size='small'>
                        <OutlinedInput
                            color='secondary'
                            size='small'
                            fullWidth
                            placeholder='Buscar cursos...'
                            startAdornment={
                                <InputAdornment position="start">
                                    <LuSearch />
                                </InputAdornment>
                            }
                            id="presentation-input"
                            sx={{
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#d1d5dc',
                                    ":hover &": {
                                        borderColor: '#7C3AED',
                                    }
                                },
                            }}
                        />
                    </FormControl>

                    <div className="h-full flex justify-center md:justify-start flex-wrap  gap-4">
                            {
                                courses.map(course => (
                                    <CourseCard course={course} key={course.id} />
                                )  )
                            }
                    </div>
                </div>
            </div>
        </div>
    );
}
