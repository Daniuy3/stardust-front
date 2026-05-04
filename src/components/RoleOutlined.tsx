

export const RoleOutlined = ({ name }: { name: string }) => {
  if (name.toLowerCase() === "alumno") {
    return <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-sm text-xs">Alumno</span>;
  }

  if (name.toLowerCase() === "profesor") {
    return <span className="bg-green-100 text-green-800 px-2 py-1 rounded-sm text-xs">Profesor</span>;
  }

  return <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-sm text-xs">{name}</span>;
};
