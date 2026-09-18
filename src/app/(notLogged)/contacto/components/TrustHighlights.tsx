import {
  LuLockKeyhole,
  LuMessageSquareText,
  LuShieldCheck,
} from "react-icons/lu";

const highlights = [
  {
    title: "Respuesta clara",
    description: (
      <>
        Te respondemos de forma
        <br className="hidden xl:block" /> simple y directa.
      </>
    ),
    icon: LuMessageSquareText,
  },
  {
    title: "Sin compromiso",
    description: (
      <>
        Puedes consultarnos sin presión.
        <br className="hidden xl:block" /> Estamos para ayudarte.
      </>
    ),
    icon: LuShieldCheck,
  },
  {
    title: "Tu idea sigue siendo tuya",
    description: (
      <>
        Confidencialidad total.
        <br className="hidden xl:block" /> Valoramos tu confianza.
      </>
    ),
    icon: LuLockKeyhole,
  },
] as const;

export const TrustHighlights = () => {
  return (
    <section
      aria-label="Nuestro compromiso contigo"
      className="mt-10 overflow-hidden rounded-2xl border border-purple-200/70 bg-purple-50/55"
    >
      <ul className="grid md:grid-cols-3">
        {highlights.map(({ title, description, icon: Icon }, index) => (
          <li
            key={title}
            className={`flex min-h-31 items-center gap-5 px-6 py-6 sm:px-8 md:justify-center md:px-5 lg:gap-6 lg:px-8 ${
              index === 0
                ? ""
                : "relative border-t border-purple-200/80 md:border-t-0 md:before:absolute md:before:inset-y-7 md:before:left-0 md:before:w-px md:before:bg-purple-200/80"
            }`}
          >
            <Icon
              aria-hidden="true"
              className="size-12 shrink-0 stroke-[1.7] text-[#16154f] sm:size-14"
            />
            <div>
              <h2 className="text-base font-bold text-[#16154f] sm:text-lg md:text-base lg:text-lg">
                {title}
              </h2>
              <p className="mt-1 text-sm leading-6 text-slate-600 sm:text-base md:text-sm lg:text-base">
                {description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
