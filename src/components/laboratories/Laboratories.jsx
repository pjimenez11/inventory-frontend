import { IoIosAddCircleOutline } from "react-icons/io";
import CardLaboratory from "./CardLaboratory";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import useLaboratory from "../../hooks/useLaboratory";

export function Laboratories() {
  const { laboratories, handlerGetAll } = useLaboratory();

  useEffect(() => {
    handlerGetAll();
  }, []);


  return (
    <section className="h-full">
      <div className="flex flex-row h-full ">
        <div className="overflow-y-auto w-1/2 pr-6">
          <h2 className="text-white text-center">Edificio 1</h2>
          <div className="grid grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
            {laboratories
              .filter((laboratory) => laboratory.building_number === 1)
              .map((laboratory) => (
                <CardLaboratory key={laboratory.id} laboratory={laboratory} />
              ))}
            <NavLink
              to={"/inventory/laboratorios/nuevo/1"}
              className="flex items-center justify-center bg-oxford-blue-900 rounded-lg p-5 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
            >
              <IoIosAddCircleOutline className="text-oxford-blue-500 w-auto h-20" />
            </NavLink>
          </div>
        </div>

        <div className=" w-[1px] bg-oxford-blue-800"></div>
        <div className="overflow-y-auto overflow-x-hidden w-1/2 pl-6">
          <h2 className="text-white text-center">Edificio 2</h2>
          <div className="grid grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
            {laboratories
              .filter((laboratory) => laboratory.building_number === 2)
              .map((laboratory) => (
                <CardLaboratory key={laboratory.id} laboratory={laboratory} />
              ))}
            <NavLink
              to={"/inventory/laboratorios/nuevo/2"}
              className="flex items-center justify-center bg-oxford-blue-900 rounded-lg p-5 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
            >
              <IoIosAddCircleOutline className="text-oxford-blue-500 w-auto h-20" />
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}
