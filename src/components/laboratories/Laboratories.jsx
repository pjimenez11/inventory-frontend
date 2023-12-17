import { IoIosAddCircleOutline } from "react-icons/io";
import CardLaboratory from "./CardLaboratory";

const initialState = [
  {
    id: 1,
    name: "Laboratorio 1",
    description: "Redes",
    computers: 10,
    building: 1,
  },
  {
    id: 2,
    name: "Laboratorio 2",
    description: "Redes",
    computers: 0,
    building: 1,
  },
  {
    id: 3,
    name: "Laboratorio 3",
    description: "Redes",
    computers: 20,
    building: 1,
  },
  {
    id: 4,
    name: "Laboratorio 4",
    description: "Redes",
    computers: 0,
    building: 1,
  },
  {
    id: 5,
    name: "Laboratorio 1",
    description: "Redes",
    computers: 0,
    building: 2,
  },
  {
    id: 6,
    name: "Laboratorio 2",
    description: "Redes",
    computers: 0,
    building: 2,
  },
  {
    id: 7,
    name: "Laboratorio 3",
    description: "Redes",
    computers: 0,
    building: 2,
  },
  {
    id: 8,
    name: "Laboratorio 4",
    description: "Redes",
    computers: 0,
    building: 2,
  },
  {
    id: 9,
    name: "Laboratorio 5",
    description: "Redes",
    computers: 0,
    building: 2,
  },
  {
    id: 10,
    name: "Laboratorio 6",
    description: "Redes",
    computers: 0,
    building: 2,
  },
  {
    id: 11,
    name: "Laboratorio 7",
    description: "Redes",
    computers: 0,
    building: 2,
  },
  {
    id: 12,
    name: "Laboratorio 8",
    description: "Redes",
    computers: 0,
    building: 2,
  },
  {
    id: 13,
    name: "Laboratorio 9",
    description: "Redes",
    computers: 0,
    building: 2,
  },
  {
    id: 14,
    name: "Laboratorio 10",
    description: "Redes",
    computers: 0,
    building: 2,
  },
];

export function Laboratories() {
  return (
    <section className="h-full">
      <div className="flex flex-row h-full pb-6">
        <div className="overflow-y-auto w-1/2 pr-6">
          <h2 className="text-white text-center">Edificio 1</h2>
          <div className="grid grid-cols-3 gap-6 mt-6">
            {initialState
              .filter((laboratory) => laboratory.building === 1)
              .map((laboratory) => (
                <CardLaboratory key={laboratory.id} laboratory={laboratory} />
              ))}
            <button className="flex items-center justify-center bg-oxford-blue-900 rounded-lg p-5 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
              <IoIosAddCircleOutline className="text-oxford-blue-500 w-auto h-20" />
            </button>
          </div>
        </div>

        <div className=" w-0.5 bg-oxford-blue-500"></div>
        <div className="overflow-y-auto overflow-x-hidden w-1/2 pl-6">
          <h2 className="text-white text-center">Edificio 1</h2>
          <div className="grid grid-cols-3 gap-6 mt-6">
            {initialState
              .filter((laboratory) => laboratory.building === 2)
              .map((laboratory) => (
                <CardLaboratory key={laboratory.id} laboratory={laboratory} />
              ))}
            <button className="flex items-center justify-center bg-oxford-blue-900 rounded-lg p-5 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
              <IoIosAddCircleOutline className="text-oxford-blue-500 w-auto h-20" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
