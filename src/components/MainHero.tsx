import Image from 'next/image'

export const MainHero = () => {
  return (
    <div className='w-full relative h-100 ' id='inicio'>
        <div className='absolute inset-0 z-10 bg-black opacity-40 flex flex-col items-center justify-center  gap-4'/>
        <div className='absolute inset-0 z-20 flex flex-col items-center justify-center  gap-4'>
            <p className='text-white text-center text-2xl md:text-3xl max-w-xl font-bold'>
                Diseñamos sitios web que convierten visitas en clientes
            </p>
        </div>
        <Image src="/main-hero.png" alt="Main Hero Image" fill className="object-cover absolute" />
    </div>
  )
}
