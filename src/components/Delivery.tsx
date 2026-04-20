import React from 'react'
import { FaCheckCircle } from "react-icons/fa";

export const Delivery = () => {

    const items : {
        title: string 
        content : string
    }[] = [
        {
            title: "Sistema listo para operar",
            content: "Funcional desde el día uno, probado y preparado para uso real."
        },
        {
            title: "Código y propiedad total",
            content: "Eres dueño del sistema, sin dependencias ni restricciones."
        },
        {
            title: "Documentación y capacitación",
            content: "Tu equipo podrá operar, mantener y escalar el sistema sin fricción."
        },
        {
            title: "Despliegue y monitoreo continuo",
            content: "Sistema en línea, seguro y supervisado para evitar fallos"
        }
    ]
    
  return (
    <div className="bg-secondary-100 py-10 mb-10">
          <h2 className="text-center text-2xl font-bold mb-10 ">
            Lo que te entregamos
          </h2>

          <div className="flex flex-col md:flex-row justify-center gap-3 text-secondary-950 md:px-10 ">
            {items.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center md:w-72">
                <FaCheckCircle className="text-2xl mb-3" />
                <div>
                    <h3 className="text-sm font-semibold">{item.title}</h3>
                    <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
      </div>
  )
}
