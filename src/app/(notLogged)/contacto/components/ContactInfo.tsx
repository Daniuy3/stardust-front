import { LuClock3, LuHeadphones, LuMail } from "react-icons/lu";

export const ContactInfo = () => {
  return (
    <section
      aria-labelledby="contact-heading"
      className="flex h-full flex-col justify-center lg:-translate-y-8 lg:pr-4 xl:pr-7"
    >
      <p className="text-sm font-bold tracking-tight text-purple-600 uppercase sm:text-base">
        Hablemos de tu idea
      </p>

      <h1
        id="contact-heading"
        className="mt-5 max-w-xl text-4xl leading-[1.18] font-bold tracking-tight text-[#16154f] sm:text-[2.875rem]"
      >
        Construyamos algo que{" "}
        <span className="lg:block">
          realmente <span className="text-purple-600">funcione</span>
        </span>
      </h1>

      <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
        Cuéntanos qué necesitas y te ayudaremos a convertirlo en una solución
        clara, funcional y lista para crecer.
      </p>

      <address className="mt-10 space-y-8 not-italic sm:mt-12 sm:space-y-10">
        <div className="flex items-center gap-5 sm:gap-7">
          <LuMail
            aria-hidden="true"
            className="size-11 shrink-0 stroke-[1.7] text-[#16154f] sm:size-13"
          />
          <div>
            <h2 className="text-base font-bold text-[#16154f] sm:text-lg">
              Correo
            </h2>
            <a
              href="mailto:contacto@stardustui.com"
              className="mt-1 inline-block min-h-11 py-1 text-base leading-9 text-slate-600 underline-offset-4 transition-colors hover:text-purple-700 hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
            >
              contacto@stardustui.com
            </a>
          </div>
        </div>

        <div className="flex items-center gap-5 sm:gap-7">
          <LuClock3
            aria-hidden="true"
            className="size-11 shrink-0 stroke-[1.7] text-[#16154f] sm:size-13"
          />
          <div>
            <h2 className="text-base font-bold text-[#16154f] sm:text-lg">
              Tiempo de respuesta
            </h2>
            <p className="mt-1 text-base leading-7 text-slate-600">
              Menos de 24 horas hábiles
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5 sm:gap-7">
          <LuHeadphones
            aria-hidden="true"
            className="size-11 shrink-0 stroke-[1.7] text-[#16154f] sm:size-13"
          />
          <div>
            <h2 className="text-base font-bold text-[#16154f] sm:text-lg">
              También podemos ayudarte con
            </h2>
            <p className="mt-1 text-base leading-7 text-slate-600">
              Desarrollo web · Sistemas internos · Consultoría
            </p>
          </div>
        </div>
      </address>
    </section>
  );
};
