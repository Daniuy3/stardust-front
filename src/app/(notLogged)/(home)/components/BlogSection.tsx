import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRightLong } from 'react-icons/fa6'

const blogs = [
  {
    fecha: '12 may',
    duracionLectura: '5 min',
    titulo: '¿Qué pasa realmente cuando eliminas un archivo en Linux?',
    src: '/blog-section/eliminacion.png',
  },
  {
    fecha: '8 abr',
    duracionLectura: '4 min',
    titulo: 'Cómo funciona el sistema de archivos de Linux',
    src: '/selected-project/portatil-blue.png',
  },
  {
    fecha: '1 abr',
    duracionLectura: '6 min',
    titulo: 'Experimentos para entender los archivos eliminados',
    src: '/selected-project/cec.png',
  },
  {
    fecha: '23 feb',
    duracionLectura: '3 min',
    titulo: 'Linux desde dentro: datos y almacenamiento',
    src: '/selected-project/casa-laura.png',
  },
]

export const BlogSection = () => {
  return (
    <section
      aria-labelledby="blog-section-title"
      className="px-5 py-16 text-[#0c103b] md:px-0 md:py-20"
    >
      <header className="mb-8 md:mb-11">
        <p className="mb-3 text-sm font-bold tracking-widest text-blue-900 md:text-base">
          STARDUST / JOURNAL
        </p>
        <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between xl:gap-8">
          <h2
            id="blog-section-title"
            className="text-4xl leading-tight font-bold tracking-tight md:text-5xl 2xl:text-6xl"
          >
            Artículos y experimentos
          </h2>
          <Link
            href="/blog"
            className="inline-flex w-fit shrink-0 items-center gap-3 border-b border-blue-900/50 pb-1 text-base font-semibold transition-colors hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 md:text-lg"
          >
            Explorar todos los artículos
            <FaArrowRightLong aria-hidden="true" className="size-4 -rotate-45 text-blue-900" />
          </Link>
        </div>
        <p className="mt-3 max-w-6xl text-base leading-relaxed text-gray-600 md:text-xl">
          Experimentos, aprendizajes y documentación a partir de los reels y pruebas reales que compartimos en Stardust.
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.95fr)_minmax(0,1fr)] lg:gap-9">
        <article className="relative isolate flex min-h-100 overflow-hidden rounded-2xl bg-slate-950 sm:min-h-120 lg:min-h-135 2xl:min-h-150">
          <Image
            src="/blog-section/eliminacion.png"
            alt="Ilustración de un disco duro y la eliminación de archivos"
            fill
            sizes="(min-width: 1024px) 60vw, (min-width: 768px) 92vw, 100vw"
            className="-z-20 object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-linear-to-t from-[#0b182e] via-[#0b182e]/65 to-transparent" />
          <div className="mt-auto p-6 sm:p-8 2xl:p-10">
            <span className="mb-3 inline-block rounded-full bg-[#e7edfa] px-4 py-1.5 text-base font-semibold text-blue-900">
              Linux
            </span>
            <h3 className="max-w-3xl text-3xl leading-[1.08] font-bold tracking-tight text-white sm:text-4xl xl:text-5xl">
              ¿Qué pasa realmente cuando eliminas un archivo en Linux?
            </h3>
            <p className="mt-4 text-lg text-slate-200 md:text-xl">
              10 oct · 5 min
            </p>
          </div>
        </article>

        <div className="min-w-0">
          <h3 className="mb-6 text-2xl font-bold tracking-tight md:text-3xl">
            Últimos artículos
          </h3>
          <ul className="flex flex-col gap-5">
            {blogs.map((blog) => (
              <li key={blog.titulo}>
                <article className="grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] items-start gap-4 xl:gap-5">
                  <div className="relative aspect-video overflow-hidden rounded-xl bg-slate-900">
                    <Image
                      src={blog.src}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 13vw, (min-width: 768px) 36vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 py-1">
                    <h4 className="text-base leading-snug font-bold xl:text-lg 2xl:text-xl">
                      {blog.titulo}
                    </h4>
                    <p className="mt-1.5 text-sm text-gray-600 xl:text-base">
                      {blog.fecha} · {blog.duracionLectura}
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
