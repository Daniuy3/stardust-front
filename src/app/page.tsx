import { Benefits } from "@/components/Benefits";
import { Delivery } from "@/components/Delivery";
import { MainHero } from "@/components/MainHero";
import { Presentation } from "@/components/Presentation";
import { Services } from "@/components/Services";
import { StackedBarChart } from "@/components/StackedBarChart";

export default function Page() {

  const stages = [ 
    {
      title: "Investigación y Estrategia",
      description: "Analizamos tu mercado, competencia y el comportamiento de los usuarios para definir una dirección clara."
    },
    {
      title: "Arquitectura y Estructura",
      description: "Organizamos la información y definimos cómo navegarán los usuarios dentro de tu sitio."
    },
    {
      title: "Diseño UI/UX",
      description: "Diseñamos una interfaz atractiva, moderna y enfocada en la experiencia del usuario para garantizar una navegación fluida y eficaz."
    },
    {
      title: "Desarrollo y Construcción",
      description: "Llevamos el diseño a código, construyendo un sitio funcional, rapido y escalable utilizando las últimas tecnologías web."
    },
    {
      title: "Optimización y Lanzamiento",
      description: "Probamos, ajustamos y optimizamos cada detalle antes de publicar."
    },
    {
      title: "Mantenimiento y Evolución",
      description: "Después del lanzamiento, seguimos mejorando. Actualizamos, optimizamos y damos soporte para que tu sitio evolucione con tu negocio."
    }

  ]
  return (
    <div className="w-full md:max-w-6xl mx-auto md:w-11/12">
      <MainHero />

      <Presentation />

      <StackedBarChart />

      <div>
        <h2 className="text-3xl text-center font-bold pb-5">
          Tu sitio web, paso a paso
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {stages.map((stage, index) => (
            <div key={index} className="p-4 border-t-olive-300 border-t-2">
              <div className="md:w-11/12 mx-auto">
                <h3 className="text-xl font-semibold mb-2 text-indigo-900 text-center md:text-left">{stage.title}</h3>
                <p className="text-sm text-center md:text-left">{stage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Benefits />

      <Delivery />
    </div>
  );
}