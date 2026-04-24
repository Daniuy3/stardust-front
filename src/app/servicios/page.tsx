import { Button, ContainedButton, OutlinedButton } from "@/components/Button";
import { Delivery } from "@/components/Delivery";
import { PageContainer } from "@/components/PageContainer";
import { StackedBarChart } from "@/components/StackedBarChart";
import { Stages } from "@/components/Stages";
import Image from "next/image";
import { AiFillThunderbolt } from "react-icons/ai";
import { BsGraphUpArrow, BsLockFill } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";

export default function Page() {

    const icons = [
        {
            icon: <AiFillThunderbolt size={24} color="#9810fa" />,
            label: "Rendimiento",
            content: "Aplicaciones rápidas y optimizadas."
        },
        {
            icon: <MdOutlineSecurity size={24} color="#9810fa" />,
            label: "Escalabilidad",
            content: "Crecen con tu negocio sin problemas."
        },
        {
            icon: <BsLockFill  size={24} color="#9810fa" />,
            label: "Seguridad",
            content: "Buenas prácticas y tecnologías confiables."
        },
        {
            icon: <BsGraphUpArrow  size={24} color="#9810fa" />,
            label: "Resultados",
            content: "Soluciones enfocadas en tu negocio."
        }
    ]

    return (
        <>
            <div  className="flex flex-col mt-10 lg:mt-5 lg:flex-row gap-5 max-w-7xl mx-auto">
        
            <div className="flex  flex-col gap-3 lg:gap-10 lg:w-1/2 justify-center py-2 px-5 lg:px-0">
                <div className="border border-purple-200 py-2 px-5 rounded-2xl w-max  mx-auto lg:mx-0 hidden md:block">
                    <p className="text-sm text-purple-500 font-semibold">
                        DESARROLLO WEB - INFRAESTRUCTURA - FORMACIÓN
                    </p>
                </div>
                <div className="space-y-5">
                    <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center lg:text-left">
                        Soluciones digitales que hacen
                        <span className="text-purple-600">
                            {" "}
                            crecer
                            {" "}
                        </span>
                        tu negocio.
                    </h1>

                    <p className="text-center lg:text-left text-sm">
                        En stardust construimos aplicaciones web rápidas, escalables y seguras. Combinamos desarrollo a medida, infraestructura confiable y formación práctica para llevar tu proyecto al siguiente nivel.
                    </p>

                    <div className="flex gap-5 justify-center lg:justify-start">
                        <ContainedButton >
                            Quiero un proyecto
                        </ContainedButton>
                        <OutlinedButton 
                            startIcon={<FaCalendarAlt />}
                        >
                            Agendar llamada
                        </OutlinedButton>
                    </div>
                    <div className="flex flex-col items-center md:flex-row md:items-start gap-5">
                        {
                            icons.map((item) => (
                                <div key={item.label} className="flex flex-col items-center md:items-start gap-3 mt-5">
                                    <div  className="bg-purple-200 w-max p-3 rounded-full">
                                        {item.icon}
                                    </div>
                                    <div className="text-center md:text-left">
                                        <p className="font-semibold">{item.label}</p>
                                        <p className="text-sm text-gray-600">{item.content}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div
                className="px-5 w-full lg:w-2/3  rounded-lg overflow-hidden flex items-center justify-center bg-radial from-0% to-70% via-50%  from-purple-300 to-purple-[#F2F2F2]"
                
            >
                <div className="relative h-full w-full min-w-96 md:min-w-120 min-h-96 md:min-h-140">
                    <Image
                        src="/services/services-hero.png"
                        alt="Services Hero"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
        </div>
        <PageContainer>
            <Stages />

            <Delivery />

            <StackedBarChart />
        </PageContainer>
        </>
    );
}