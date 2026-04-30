import React from 'react'

interface Props {
    status: "active" | "inactive" | "invited"
    count: number
}
export const UsersCount = ({ status, count }: Props) => {
    
    const statusText = status === "active" ? "Activos" : status === "inactive" ? "Inactivos" : "Invitados";
    const statusColor = status === "active" ? "bg-green-700" : status === "inactive" ? "bg-yellow-600" : "bg-purple-600";

  return (
    <div className="rounded-xl border p-2 border-gray-300 min-w-20 xl:min-w-36 flex gap-2 md:block">
        <div className="flex gap-2 items-center">
            <div className={`h-2 w-2 rounded-full ${statusColor}`}/>
            <p className="text-sm hidden md:block">
                { statusText }
            </p>
        </div>
        <p className="font-semibold text-xl">
            { count }
        </p>
    </div>
  )
}
