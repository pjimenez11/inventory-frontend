import { HiOutlineDesktopComputer } from "react-icons/hi";
import { NavLink } from "react-router-dom";

export default function CardLaboratory({ laboratory }) {
  return (
    <div className="flex flex-col gap-2 bg-oxford-blue-900 rounded-lg p-5 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
      <h2 className="text-white text-center">{laboratory.name}</h2>
      <h3 className="text-gray-400 text-center">{laboratory.description}</h3>
      <div className="flex flex-row justify-center gap-3">
        <div className="flex flex-row items-center justify-center gap-1 text-green-500 border border-green-500 rounded-lg px-2 py-1">
          <HiOutlineDesktopComputer />
          <h3 className="">{laboratory.computers}</h3>
        </div>
        <NavLink to={`/inventory/laboratorios/${laboratory.id}`} className="border border-red-500 hover:bg-red-500 hover:border-red-600 hover:text-white rounded-lg px-2 py-1 text-red-500">
          Editar
        </NavLink>
      </div>
    </div>
  );
}
