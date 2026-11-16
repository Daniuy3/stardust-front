
const linkClassName = 'rounded-sm transition-colors hover:text-blue-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300'

export const Footer = () => {
  return (
    <footer className='bg-[#0A1225] px-5 text-slate-100 lg:px-10'>
      <div className='flex flex-wrap items-center justify-between gap-4 border-b border-slate-500 py-6'>
        <a href='#' className={`${linkClassName} text-sm font-semibold`}>
          STARDUST®
        </a>
        <p className='text-xs text-slate-400'>EST. 2026 / MÉXICO</p>
      </div>

      <div className='grid grid-cols-2 gap-6 border-b border-slate-500 py-7'>
        <nav aria-label='Explorar'>
          <h2 className='mb-3 text-[10px] font-medium uppercase text-slate-400'>Explorar</h2>
          <ul className='space-y-3 text-base'>
            {['Inicio', 'Artículos', 'Proyectos'].map((label) => (
              <li key={label}>
                <a href='#' className={linkClassName}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label='Conectar'>
          <h2 className='mb-3 text-[10px] font-medium uppercase text-slate-400'>Conectar</h2>
          <ul className='space-y-3 text-base'>
            {['Instagram', 'GitHub', 'LinkedIn'].map((label) => (
              <li key={label}>
                <a href='#' className={linkClassName}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className='border-b border-slate-500 py-7'>
        <h2 className='mb-4 text-[10px] font-medium uppercase text-slate-400'>Contacto directo</h2>
        <a href='#' className={`${linkClassName} wrap-break-word text-lg font-bold`}>
          contacto@stardustui.com
        </a>
      </div>

      <div className='flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-7 text-[10px] tracking-wide text-slate-400'>
        <p>© 2026 Stardust</p>
        <div className='flex items-center gap-2'>
          <p>Hecho con curiosidad.</p>
        </div>
      </div>
    </footer>
  )
}
