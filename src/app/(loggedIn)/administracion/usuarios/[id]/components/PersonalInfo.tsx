import { IoPersonSharp } from "react-icons/io5";



interface Props {
    first_name: string;
    last_name: string;
    display_name: string;
    email?: string;
    phone?: string;
    birth_date?: string | Date;
    country?: string;
    city?: string;
    professional_title?: string;
}
export const PersonalInfo = ({ first_name, last_name, display_name, email, phone, birth_date, country, city, professional_title }: Props) => {
    return (
        <div className="border border-gray-300 rounded-xl p-5 ">
            <h2 className="text-sm font-semibold mb-3 flex items-center gap-2">
                <IoPersonSharp size={20} /> 
                Información Personal
            </h2>
            <div className="grid grid-cols-2">
                <p>
                    Nombre
                </p>
                <p>
                    {first_name}
                </p>

                <p>
                    Apellido
                </p>
                <p>
                    {last_name}
                </p>

                <p>
                    Nombre mostrado
                </p>
                <p>
                    {display_name}
                </p>

                <p>
                    Correo
                </p>
                <p>
                    {email || "No proporcionado"}
                </p>

                <p>
                    Teléfono
                </p>
                <p>
                    {phone || "No proporcionado"}
                </p>

                <p>
                    Fecha Nacimiento
                </p>
                <p>
                    {birth_date ? new Date(birth_date).toLocaleDateString() : "No proporcionado"}
                </p>

                <p>
                    País
                </p>
                <p>
                    {country || "No proporcionado"}
                </p>

                <p>
                    Ciudad
                </p>
                <p>
                    {city || "No proporcionado"}
                </p>

                <p>
                    Título Profesional
                </p>
                <p>
                    {professional_title || "No proporcionado"}
                </p>
            </div>
        </div>
    )
}