import Image from 'next/image'
import { ProfileItem } from './ProfileItem'
import NestedList from '@/components/NestedList'
import { AiFillAlert } from 'react-icons/ai'
import { RiGroupLine } from 'react-icons/ri'

export const NavBar = () => {

    const navLinks = [
        {
            section: "Administración",
            links: [
                {
                    name: "Usuarios",
                    href: "/administracion/usuarios",
                    icon: <RiGroupLine size={16}/>
                },
            ]
        },
        {
            section: "General",
            links: [
                {
                    name: "Inicio",
                    href: "/home"
                },
                {
                    name: "Mis Cursos",
                    href: "/home/mis-cursos"
                },
                {
                    name: "Explorar Cursos",
                    href: "/cursos"
                },
                {
                    name: "Calendario",
                    href: "/calendario"
                },
                {
                    name: "Certificados",
                    href: "/certificados"
                },
                {
                    name: "Favoritos",
                    href: "/favoritos"
                }
            ]
        },
        {
            section: "Enseñanza",
            links: [
                {
                    name: "Mis Cursos",
                    href: "/home/mis-cursos"
                },
                {
                    name: "Crear Curso",
                    href: "/cursos/crear"
                },
                {
                    name: "Administrar Cursos",
                    href: "/cursos/administrar"
                },
                {
                    name: "Estadísticas",
                    href: "/estadisticas"
                }
            ]
        }
    ]
    
  return (
    <div className='h-full flex-col border-r border-gray-200 px-5 py-5 gap-5 min-w-64 hidden lg:flex'>
        <div className='relative w-full max-w-40 h-16 block mx-auto'>
            <Image 
                src="/stardust.svg"
                alt="Stardust Logo"
                fill
                className='object-cover w-full absolute'
            />
        </div>

        <div className='flex flex-col h-full overflow-y-auto'>
            {navLinks.map((section) => (
                <div
                    key={section.section}
                >

                    <p className='text-xs text-gray-500 uppercase mb-2 mt-5'>
                        {section.section}
                    </p>

                    <NestedList
                        items={section.links.map((link) => ({
                            Icon: link.icon || <AiFillAlert />,
                            text: link.name,
                            link: link.href
                        }))}
                    />
                </div>
            ))}
        </div>
        <ProfileItem />
    </div>
  )
}
