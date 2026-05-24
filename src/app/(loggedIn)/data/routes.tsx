import { GoBook } from "react-icons/go";
import { RiGroupLine } from "react-icons/ri";

export const routes = [
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
                    name: "Mis Cursos",
                    href: "/home/mis-cursos"
                },
                {
                    name: "Explorar Cursos",
                    href: "/home/cursos"
                },
                {
                    name: "Calendario",
                    href: "/calendario",
                    disabled: true
                },
                {
                    name: "Certificados",
                    href: "/certificados",
                    disabled: true

                },
                {
                    name: "Favoritos",
                    href: "/favoritos",
                    disabled: true
                }
            ]
        },
        {
            section: "Enseñanza",
            links: [
                {
                    name: "Mis Cursos",
                    href: "/teaching/mis-cursos",
                    icon: <GoBook size={16}/>
                },
                {
                    name: "Crear Curso",
                    href: "/teaching/crear-curso"
                },
                {
                    name: "Administrar Cursos",
                    href: "/teaching/administrar",
                    disabled: true
                },
                {
                    name: "Estadísticas",
                    href: "/teaching/estadisticas",
                    disabled: true
                }
            ]
        }
    ]