import { Benefits } from "@/components/Benefits";
import { MainHero } from "@/components/MainHero";
import { Services } from "@/components/Services";
import Image from "next/image";

export default function Page() {
  return (
    <div className="w-full md:max-w-6xl mx-auto md:w-11/12">
      <MainHero />

      <h2 className="text-xl md:text-3xl font-bold text-center my-10 md:my-16">
        Haz Crecer tu Negocio
      </h2>

      <div className="flex flex-col md:flex-row md:gap-5 my-5">
        <div className="md:w-3/5 relative h-60 md:h-80">
          <Image 
            src="/services/service-1.jpeg"
            fill
            className="object-cover"
            alt="Imagen de fondo"
          />
        </div>
        
        <div className="md:w-2/5 flex flex-col justify-center md:justify-end gap-5 px-5 pb-5 bg-secondary-300 min-h-60">
          <h3 className="text-2xl font-bold"> Más clientes, no solo vistas</h3>
          <p>
              Tu web debe trabajar por ti. Diseñamos sitios pensados para convertir tráfico en oportunidades reales.
          </p>
        </div>

      </div>

      <div className="flex flex-col-reverse md:flex-row md:gap-5 my-5">
        <div className="md:w-2/5 flex flex-col justify-center md:justify-end gap-5 px-5 pb-5 bg-secondary-300 min-h-60">
          <h3 className="text-2xl font-bold"> Tus objetivos también son nuestros</h3>
          <p>
              Nos enfocamos en crear un servicio orientado a alcanzar tus objetivos.
          </p>
        </div>
        <div className="md:w-3/5 relative h-60 md:h-80">
          <Image 
            src="/services/service-2.jpeg"
            fill
            className="object-cover"
            alt="Imagen de fondo"
          />
        </div>
      </div>

      <Services />

      <Benefits />
    </div>
  );
}